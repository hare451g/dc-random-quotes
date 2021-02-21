import axios from 'axios';

import { IQuote, IQuoteResponse } from '../../common/types';

type fetchRandomQuotesType = () => Promise<IQuote | Error>;

const fetchRandomQuotes: fetchRandomQuotesType = async () => {
  try {
    const response = await axios.get(
      'https://quote-garden.herokuapp.com/api/v3/quotes/random'
    );
    const quoteResponse: IQuoteResponse = response.data;

    if (!quoteResponse.data || quoteResponse.data.length <= 0) {
      throw new Error('No quotes is available');
    }

    return quoteResponse.data[0];
  } catch (error) {
    return error;
  }
};

export default fetchRandomQuotes;
