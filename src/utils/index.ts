import dayjs from "dayjs";

export function getNowddddMMMMDYYYY() {
  return dayjs().format("dddd, MMMM D, YYYY");
}

export function formatDMMMMYYYY(date: string) {
  return dayjs(date).format("D MMMM, YYYY");
}

export const beautifyAddress = (
  address: string | null | undefined,
  start: number,
  end: number
) => {
  let first = address?.substring(0, start);
  let second = address?.substring(address.length - end, address.length);
  return first + "..." + second;
};

export const generateMessageLinkAccount = (
  userId: string,
  walletAddress: string | undefined | any
) => {
  return `Link account: ${userId} to ${walletAddress}`;
};
