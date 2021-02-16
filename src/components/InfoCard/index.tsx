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
      className="box-container"
      data-testid="infocard-container"
      onClick={onContainerClick}
      role="button"
    >
      <div>
        <div className="author" data-testid="infocard-author">
          {author || constants.messages.AUTHOR_IS_NULL}
        </div>
        <div className="genre" data-testid="infocard-genre">
          {genre || constants.messages.GENRE_IS_NULL}
        </div>
      </div>

      <div className="right-arrow">&#8594;</div>
    </div>
  );
};

export default InfoCard;
