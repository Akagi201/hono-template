export interface PerpTradeUploadReq {
  tradeId: number;
  matchId: number;
  accountId: string;
  symbolId: number;
  tradeQty: string;
  executedPrice: string;
  fee: string;
  sumUnitaryFundings: string;
  timestamp: number;
}
