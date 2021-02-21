import { Reducer } from 'react';

import { Action, State } from './types';

export const initialState: State = {
  loading: false,
  error: null,
  quote: null,
};

const reducer: Reducer<State, Action> = (prevState = initialState, action) => {
  switch (action.type) {
    case 'random-quote__fetch--start':
      return {
        ...prevState,
        loading: true,
        error: null,
        quote: null,
      };

    case 'random-quote__fetch--success':
      return {
        ...prevState,
        loading: false,
        error: null,
        quote: action.payload,
      };

    case 'random-quote__fetch--failed':
      return {
        ...prevState,
        loading: false,
        error: action.error,
        quote: null,
      };

    default:
      return prevState;
  }
};

export default reducer;
