export interface IResponse<T> {
  data: {
    totalPages: number;
    items: T
  },
  isSuccess: boolean;
  message: string;
  code: number;
}