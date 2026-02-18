export interface MsnStandardStock {
  price: number;
  priceChange: number;
  priceChangePercent: number;

  priceDayHigh: number;
  priceDayLow: number;
  priceDayOpen: number;
  pricePreviousClose: number;
  datePreviousClose: string; // ISO date

  priceAsk: number;
  askSize: number;
  priceBid: number;
  bidSize: number;

  accumulatedVolume: number;
  averageVolume: number;

  peRatio: number | null;
  yieldPercent: number | null;

  price52wHigh: number;
  price52wLow: number;

  priceChange1Week: number;
  priceChange1Month: number;
  priceChange3Month: number;
  priceChange6Month: number;
  priceChangeYTD: number;
  priceChange1Year: number;

  return1Week: number;
  return1Month: number;
  return3Month: number;
  return6Month: number;
  returnYTD: number;
  return1Year: number;

  timeLastTraded: string; // ISO datetime
  timeLastUpdated: string; // ISO datetime

  marketCap: number;
  marketCapCurrency: string;

  currency: string;

  sourceExchangeCode: string;
  sourceExchangeName: string;

  exchangeId: string;
  exchangeCode: string;
  exchangeName: string;

  offeringStatus: 'regular' | string;

  displayName: string;
  shortName: string;
  symbol: string;

  securityType: 'stock' | string;
  instrumentId: string;

  country: string;
  market: string;

  icon?: string;

  localizedAttributes: Record<string, unknown>;

  /** MSN 内部字段 */
  _p: string;
  _t: 'UnifiedQuote';
  id: string;
  weight?: number;
  label?: string;
}


export interface YahooStandardStock {
  ask: number;
  askSize: number;
  averageAnalystRating: string;
  averageDailyVolume3Month: number;
  averageDailyVolume10Day: number;
  bid: number;
  bidSize: number;
  bookValue: number;
  corporateActions: any[];
  cryptoTradeable: boolean;
  currency: string;
  customPriceAlertConfidence: string;
  dividendRate: number;
  dividendYield: number;
  earningsTimestampEnd: number;
  earningsTimestampStart: number;
  epsCurrentYear: number;
  epsForward: number;
  epsTrailingTwelveMonths: number;
  esgPopulated: boolean;
  exchange: string;
  exchangeDataDelayedBy: number;
  exchangeTimezoneName: string;
  exchangeTimezoneShortName: string;
  fiftyDayAverage: number;
  fiftyDayAverageChange: number;
  fiftyDayAverageChangePercent: number;
  fiftyTwoWeekChangePercent: number;
  fiftyTwoWeekHigh: number;
  fiftyTwoWeekHighChange: number;
  fiftyTwoWeekHighChangePercent: number;
  fiftyTwoWeekLow: number;
  fiftyTwoWeekLowChange: number;
  fiftyTwoWeekLowChangePercent: number;
  fiftyTwoWeekRange: string;
  financialCurrency: string;
  firstTradeDateMilliseconds: number;
  forwardPE: number;
  fullExchangeName: string;
  gmtOffSetMilliseconds: number;
  hasPrePostMarketData: boolean;
  isEarningsDateEstimate: boolean;
  language: string;
  longName: string;
  market: string;
  marketCap: number;
  marketState: string;
  messageBoardId: string;
  priceEpsCurrentYear: number;
  priceHint: number;
  priceToBook: number;
  quoteType: string;
  region: string;
  regularMarketChange: number;
  regularMarketChangePercent: number;
  regularMarketDayHigh: number;
  regularMarketDayLow: number;
  regularMarketDayRange: string;
  regularMarketOpen: number;
  regularMarketPreviousClose: number;
  regularMarketPrice: number;
  regularMarketTime: number;
  regularMarketVolume: number;
  sharesOutstanding: number;
  shortName: string;
  sourceInterval: number;
  symbol: string;
  tradeable: boolean;
  trailingAnnualDividendRate: number;
  trailingAnnualDividendYield: number;
  trailingPE: number;
  triggerable: boolean;
  twoHundredDayAverage: number;
  twoHundredDayAverageChange: number;
  twoHundredDayAverageChangePercent: number;
  typeDisp: string;
  weight: number;
  label: string;
  investingCode?: string;
}

export const WalletMaps = {
  wechat: "微信",
  alipay: "支付宝",
  unionpay: "银联",
  cash: "现金",
  carpool: "顺风车",
  eastmoney: "股票",
  fund: "公积金",
} as const;

export interface WalletItem {
  id: string;
  userId: string;
  unionpay: string;
  wechat: string;
  alipay: string;
  eastmoney: string;
  cash: string;
  indexSh000001: string;
  indexSpx: string;
  fund: string[];
  carpool: string[];
  settleOn: string;
  createAt: string;
  updateAt: string;
}

export interface PaginationProps {
  currentPage: number;
  pageSize: number;
}
