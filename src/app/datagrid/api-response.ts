export interface ApiResponse<T> {
  timeStamp: string;
  statusCode: number;
  httpStatus: string;
  message: string;
  payload: {page: T};
}
