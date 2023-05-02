import AxiosInstance from "@/axiosInstance";
import { Server } from "Socket.IO";
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
  PENDING,
  DENIAL,
  APPROVE,
}
const SocketHandler = (req: any, res: any) => {
  if (res.socket.server.io) {
    console.log("Socket is already running");
  } else {
    console.log("Socket is initializing");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      var roomID: string;

      socket.on("JOIN_ROOM", async (data) => {
        const { slug, user_id, is_scroll, reader_token } = JSON.parse(data);
        roomID = slug + "-" + user_id;
        const { data: newsData } = await AxiosInstance.get(`/news/${slug}`);

        const minRead = newsData.min_read;
        const minReadToSecond = (minRead * 60).toFixed();

        console.log(minReadToSecond);

        const endTimeValid = moment().add(minReadToSecond, "seconds").unix();

        reader.set(roomID, {
          slug: newsData.slug,
          user_id: user_id,
          is_scroll: is_scroll,
          claim_status: ClaimStatus.PENDING,
          tracking_scroll: 0,
          tracking_next_tab: false,
          tracking_unfocused: false,
          end_time_valid: endTimeValid,
          reader_token: reader_token,
        });

        socket.join(roomID);
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

      socket.on("SUBMIT", () => {
        const currentTime = moment().unix();
        const readerInfo = reader.get(roomID);

        if (
          readerInfo &&
          (currentTime < readerInfo.end_time_valid ||
            readerInfo.tracking_unfocused ||
            readerInfo.tracking_next_tab ||
            readerInfo.tracking_scroll < 99)
        ) {
          socket.emit("RESULT", { data: { message: "Claim failed" } });
          return;
        } else {
          socket.emit("RESULT", { data: { message: "succees" } });
          //TODO: call server
          AxiosInstance.post(
            "",
            {},
            {
              headers: {},
            }
          );
        }
      });
    });
  }
  res.end();
};

export default SocketHandler;
