import SyncIconSVG from './sync-24px.svg';
import './styles.css';

type propTypes = {
  onClick?: () => void;
  loading?: boolean;
};

const RandomButton: React.FC<propTypes> = ({ loading, onClick }) => {
  const text = loading ? 'loading' : 'random';
  const iconClassName = loading
    ? 'random-btn__img--loading'
    : 'random-btn__img';

  return (
    <div className="random-btn" data-testid="random-btn">
      <button
        data-testid="random-btn__button"
        className="random-btn__button"
        onClick={onClick}
      >
        {text}
      </button>
      <img
        alt="Generate New"
        className={iconClassName}
        data-testid="random-btn__img"
        onClick={onClick}
        src={SyncIconSVG}
      />
    </div>
  );
};

export default RandomButton;
