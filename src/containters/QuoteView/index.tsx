import { RouteComponentProps } from '@reach/router';
import { useEffect, useReducer } from 'react';

// components
import InfoCard from '../../components/InfoCard';
import Quote from '../../components/Quote';
import RandomButton from '../../components/RandomButton';

// local
import reducer, { initialState } from './reducer';
import service from './service';
import './styles.css';

const QuoteView: React.FC<RouteComponentProps> = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    service.fetchRandomQuotesThunk(dispatch);
  }, []);

  return (
    <div className="quote-screen">
      <aside className="quote-screen__top">
        <RandomButton
          onClick={() => service.fetchRandomQuotesThunk(dispatch)}
          loading={state.loading}
        />
      </aside>
      <main className="quote-screen__main">
        <div className="quote-screen__quote">
          <Quote text={state.quote?.quoteText} loading={state.loading} />
        </div>
        <div className="quote-screen__infocard">
          <InfoCard
            author={state.quote?.quoteAuthor}
            genre={state.quote?.quoteGenre}
            loading={state.loading}
          />
        </div>
      </main>
    </div>
  );
};

export default QuoteView;
