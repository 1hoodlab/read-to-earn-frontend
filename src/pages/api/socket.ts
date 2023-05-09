import AxiosInstance from "@/axiosInstance";
import { Server } from "socket.io";
import axios, { AxiosError } from "axios";
import moment from "moment";

const reader = new Map<string, ReaderType>();

type ReaderType = {
  slug: string;
  user_id: string;
  is_scroll: boolean;
  claim_status: ClaimStatus;
  tracking_scroll: number;
  tracking_next_tab: boolean;
  tracking_unfocused: boolean;
  end_time_valid: number;
  reader_token: string;
};

enum ClaimStatus {
  pending = "pending",
  success = "success",
  failure = "failure",
}

const SocketHandler = (req: any, res: any) => {
  if (res.socket.server.io) {
    console.log("Socket is already running");
  } else {
    console.log("Socket is initializing");
    const io = new Server(res.socket.server, {
      path: "/api/socket",
    });
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      var roomID: string;

      socket.on("JOIN_ROOM", async (data) => {
        const { slug, user_id, is_scroll, reader_token } = JSON.parse(data);
        roomID = slug + "-" + user_id;

        const { data: newsData } = await AxiosInstance.get(`/news/${slug}`);

        const minRead = newsData.min_read;
        const minReadToSecond = (minRead * 60).toFixed();

        const endTimeValid = moment().add(minReadToSecond, "seconds").unix();

        reader.set(roomID, {
          slug: newsData.slug,
          user_id: user_id,
          is_scroll: is_scroll,
          claim_status: ClaimStatus.pending,
          tracking_scroll: 0,
          tracking_next_tab: false,
          tracking_unfocused: false,
          end_time_valid: endTimeValid,
          reader_token: reader_token,
        });

        socket.join(roomID);

        try {
          const { data } = await AxiosInstance.post(
            "/news/managed-claim",
            { slug: slug },
            {
              headers: {
                "x-reader-token": reader_token,
                Authorization: `Bearer ${process.env.ROOT_ACCESS_TOKEN}`,
              },
            }
          );
          socket.emit("LOG", data);
        } catch (error) {
          console.log(error);
        }
        socket.emit("LOG", `ROOM_ID HAS JOIN: ${roomID}`);
      });

      socket.on("TRACKING_SCROLL", (message) => {
        const readerInfo = reader.get(roomID);
        if (readerInfo) {
          reader.set(roomID, {
            ...readerInfo,
            tracking_scroll: parseFloat(message),
          });
        }
      });

      socket.on("TRACKING_NEXT_TAB", (message) => {
        const readerInfo = reader.get(roomID);
        if (readerInfo) {
          reader.set(roomID, {
            ...readerInfo,
            tracking_next_tab: message,
          });
        }
      });

      socket.on("TRACKING_UNFOCUSED", (message) => {
        const readerInfo = reader.get(roomID);
        if (readerInfo) {
          reader.set(roomID, {
            ...readerInfo,
            tracking_unfocused: message,
          });
        }
      });

      socket.on("UNSUBCRIBE", () => {
        console.log("UNSUBCRIBE");
        socket.leave(roomID);
        reader.delete(roomID);
      });

      socket.on("SUBMIT", async () => {
        const currentTime = moment().unix();
        const readerInfo = reader.get(roomID);

        if (
          readerInfo &&
          (currentTime < readerInfo.end_time_valid ||
            readerInfo.tracking_unfocused ||
            readerInfo.tracking_next_tab ||
            (readerInfo.is_scroll && readerInfo.tracking_scroll < 99))
        ) {
          try {
            let { data } = await AxiosInstance.put(
              "/news/managed-claim/status",
              {
                slug: readerInfo.slug,
                user_id: readerInfo.user_id,
                status: ClaimStatus.failure,
              },
              {
                headers: {
                  "x-reader-token": readerInfo.reader_token,
                  Authorization: `Bearer ${process.env.ROOT_ACCESS_TOKEN}`,
                },
              }
            );
            socket.emit("RESULT", { data: data, status: ClaimStatus.failure });
          } catch (error) {
            if (axios.isAxiosError(error)) {
              const { response } = error as AxiosError;
              socket.emit("RESULT", { error: response?.data });
            } else {
              socket.emit("RESULT", { error: "BAD REQUEST" });
            }
          }
          return;
        }
        try {
          let { data } = await AxiosInstance.put(
            "/news/managed-claim/status",
            {
              slug: readerInfo?.slug,
              user_id: readerInfo?.user_id,
              status: ClaimStatus.success,
            },
            {
              headers: {
                "x-reader-token": readerInfo?.reader_token,
                Authorization: `Bearer ${process.env.ROOT_ACCESS_TOKEN}`,
              },
            }
          );
          socket.emit("RESULT", { data: data, status: ClaimStatus.success });
        } catch (error) {
          if (axios.isAxiosError(error)) {
            const { response } = error as AxiosError;
            socket.emit("RESULT", { error: response?.data });
          } else {
            socket.emit("RESULT", { error: "BAD REQUEST" });
          }
        }
      });
    });
  }
  res.end();
};

export default SocketHandler;
