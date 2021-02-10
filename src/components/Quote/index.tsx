import constants from './constants';
import './styles.css';

type propTypes = {
  text?: string;
  loading?: boolean;
};

const Quote: React.FC<propTypes> = ({ text = null, loading = false }) => {
  if (loading) {
    return (
      <p data-testid="loading-indicator">{constants.messages.IS_LOADING}</p>
    );
  }

  const contentClassName = !text ? 'quote-empty' : 'quote-content';
  const contentText = text || constants.messages.IS_EMPTY;

  return (
    <blockquote className={contentClassName} data-testid="content">
      "{contentText}"
    </blockquote>
  );
};

export default Quote;
