import { ErrorRequestHandler } from "express";
import sendResponse from "../../utils/sendResponse";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = "Something went wrong!";

  //ultimate return
  return sendResponse(res, {
    statusCode: statusCode,
    success: false,
    message: err.message || message,
    error: err,
  });
};

export default globalErrorHandler;
