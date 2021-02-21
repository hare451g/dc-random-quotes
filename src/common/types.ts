export interface IQuoteRequestParams {
  author?: string;
  genre?: string;
  query?: string;
  page?: number;
  limit?: number;
}

export interface IQuotePagination {
  currentPage: number | null;
  nextPage: number | null;
  totalPages: number | null;
}

export interface IQuote {
  _id: string;
  quoteText: string;
  quoteAuthor: string;
  quoteGenre: string;
  __v: number;
}

export interface IResponse<T> {
  message: string;
  statusCode?: number;
  error?: string;
  pagination?: IQuotePagination;
  totalQuotes?: number;
  data?: T;
}

export type IQuoteResponse = IResponse<Array<IQuote>>;
