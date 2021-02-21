import axios from 'axios';
import { IQuote, IQuoteRequestParams, IQuoteResponse } from '../../common/types';

type fetchByAuthorType = (
  author?: IQuoteRequestParams['author']
) => Promise<Array<IQuote> | Error>;

const fetchByAuthor: fetchByAuthorType = async (author) => {
  try {
    if (!author) {
      throw new Error('Author is not selected');
    }

    const response = await axios.get(
      'https://quote-garden.herokuapp.com/api/v3/quotes',
      {
        params: {
          author,
        },
      }
    );

    const quoteResponse: IQuoteResponse = response.data;

    if (!quoteResponse.data || quoteResponse.data.length <= 0) {
      throw new Error("There's no quote from selected author");
    }

    return quoteResponse.data;
  } catch (error) {
    return error;
  }
};

export default fetchByAuthor;
