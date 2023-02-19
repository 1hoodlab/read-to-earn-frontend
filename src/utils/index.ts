import dayjs from "dayjs";

export function getNowddddMMMMDYYYY() {
  return dayjs().format("dddd, MMMM D, YYYY");
}
