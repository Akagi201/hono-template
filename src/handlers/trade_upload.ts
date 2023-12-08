import { PerpTradeUploadReq } from '../models/trade_upload';
import { SuccessResponse, FailureResponse } from '../models/response';
import { Context } from 'hono';

export async function perp_trade_upload(c: Context) {
  const req = await c.req.json() as PerpTradeUploadReq;
  const resp: SuccessResponse = {
    success: true,
    timestamp: Date.now(),
  };
  return c.json(resp);
}