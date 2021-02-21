import axios from 'axios';
import { Dispatch } from 'react';

import { IQuote, IResponse } from '../../common/types';
import { Action } from './types';

const fetchRandomQuotesThunk = (dispatch: Dispatch<Action>) => {
  dispatch({ type: 'random-quote__fetch--start' });

  axios
    .get('https://quote-garden.herokuapp.com/api/v3/quotes/random')
    .then((response) => {
      const quoteResponse: IResponse<IQuote[]> = response.data;

      if (!quoteResponse.data || quoteResponse.data.length <= 0) {
        throw new Error('No quotes is available');
      }

      dispatch({
        type: 'random-quote__fetch--success',
        payload: quoteResponse.data[0],
      });
    })
    .catch((error) => dispatch({ type: 'random-quote__fetch--failed', error }));
};

export default {
  fetchRandomQuotesThunk,
};
