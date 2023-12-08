export interface SuccessResponse {
  success: boolean;
  data?: any;
  timestamp?: number;
}

export interface FailureResponse {
  success: boolean;
  code: number;
  message: string;
}
