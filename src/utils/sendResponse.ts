import { Response } from "express";

type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  error?: any;
  data?: T;
  meta?: {
    total: number;
    totalPage: number;
  };
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data?.statusCode).json({
    success: data.success,
    message: data.message,
    data: data.data,
    error: data.error,
    meta: data.meta,
  });
};

export default sendResponse;
