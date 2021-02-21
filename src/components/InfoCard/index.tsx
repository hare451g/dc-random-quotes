import constants from './constants';
import './styles.css';

type propTypes = {
  author?: string;
  genre?: string;
  loading?: boolean;
  onContainerClick?: () => {};
};

const InfoCard: React.FC<propTypes> = ({
  author,
  genre,
  loading = false,
  onContainerClick,
}) => {
  if (loading) {
    return (
      <div data-testid="infocard-loading">{constants.messages.IS_LOADING}</div>
    );
  }

  return (
    <div
      className="infocard"
      data-testid="infocard-container"
      onClick={onContainerClick}
      role="button"
    >
      <div className="infocard__left-section">
        <div className="infocard__author" data-testid="infocard-author">
          {author || constants.messages.AUTHOR_IS_NULL}
        </div>
        <div className="infocard__genre" data-testid="infocard-genre">
          {genre || constants.messages.GENRE_IS_NULL}
        </div>
      </div>

      <div className="infocard__right-section">
        <span className="infocard__goto-icon" data-testid="infocard-icon">
          &#8594;
        </span>
      </div>
    </div>
  );
};

export default InfoCard;
