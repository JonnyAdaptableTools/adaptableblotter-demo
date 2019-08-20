export interface ITrade {
  tradeId: number;
  notional: number;
  deskId: number;
  counterparty: string;
  currency: string;
  country: string;
  changeOnYear: number;
  price: number;
  bid: number;
  ask: number;
  bidOfferSpread: number;
  isLive: boolean;
  fitchRating: string;
  moodysRating: string;
  sandpRating: string;
  tradeDate: Date;
  settlementDate: Date;
  bloombergAsk: number;
  bloombergBid: number;
  indicativeAsk: number;
  indicativeBid: number;
  markitAsk: number;
  markitBid: number;
  percentChange: number;
  lastUpdated: Date;
  lastUpdatedBy: string;
}
