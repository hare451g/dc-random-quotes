import { IQuote } from '../../common/types';

export type State = {
  loading: boolean;
  error: Error | null;
  quote: IQuote | null;
};

export type Action =
  | { type: 'random-quote__fetch--start' }
  | { type: 'random-quote__fetch--success'; payload: IQuote }
  | { type: 'random-quote__fetch--failed'; error: Error };
