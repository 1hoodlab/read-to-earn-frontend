import AxiosInstance from "@/axiosInstance";
import { UploadType, UploadTypeDetail } from "@/constant";
import FormData from "form-data";
import React, { useState } from "react";

export default function useUploadNews(type: UploadType) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<string>("");
  const [error, setError] = useState<any>(undefined);

  async function upload(file: File | null | undefined) {
    const formData = new FormData();
    formData.append(UploadTypeDetail[type].key, file);
    setIsLoading(true);
    try {
      console.log(UploadTypeDetail[type].url);
      let { data } = await AxiosInstance.post(
        UploadTypeDetail[type].url,
        formData
      );
      setData(data);
      setIsLoading(false);
      setIsSuccess(true);
    } catch (error: any) {
      setIsLoading(false);
      setIsError(false);
      setError(error?.response.data);
    }
  }
  return {
    upload,
    isLoading,
    isSuccess,
    isError,
    data,
    error,
  };
}
