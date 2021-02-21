import constants from './constants';
import './styles.css';

type propTypes = {
  text?: string;
  loading?: boolean;
};

const Quote: React.FC<propTypes> = ({ text = null, loading = false }) => {
  const containerQuoteName = loading ? 'quote--loading' : 'quote';

  const blockQuoteClassName = text
    ? 'quote__blockquote'
    : 'quote__blockquote--empty';

  const textContent = loading
    ? constants.messages.IS_LOADING
    : text || constants.messages.IS_EMPTY;

  return (
    <div className={containerQuoteName} data-testid="quote-container">
      <blockquote
        className={blockQuoteClassName}
        data-testid="quote__blockquote"
      >
        {textContent}
      </blockquote>
    </div>
  );
};

export default Quote;
