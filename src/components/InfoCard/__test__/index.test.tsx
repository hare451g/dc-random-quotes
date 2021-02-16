import { fireEvent, render, screen } from '@testing-library/react';

import constants from '../constants';
import InfoCard from '../';

describe('InfoCard component test cases', () => {
  it('Should be render empty messages when props is null', () => {
    render(<InfoCard />);
    const authorEl = screen.queryByTestId('infocard-author');
    const genreEl = screen.queryByTestId('infocard-genre');

    expect(authorEl).toBeInTheDocument();
    expect(genreEl).toBeInTheDocument();

    expect(authorEl).toHaveTextContent(constants.messages.AUTHOR_IS_NULL);
    expect(genreEl).toHaveTextContent(constants.messages.GENRE_IS_NULL);
  });

  it('Should be render loading view when loading is true', () => {
    render(<InfoCard loading />);
    const loadingEl = screen.queryByTestId('infocard-loading');
    expect(loadingEl).toBeInTheDocument();
    expect(loadingEl).toHaveTextContent(constants.messages.IS_LOADING);
  });

  it('Should be render author and genre name correctly', () => {
    const quoteMock = {
      author: 'John Doe',
      genre: 'Business',
    };

    render(<InfoCard author={quoteMock.author} genre={quoteMock.genre} />);
    const authorEl = screen.queryByTestId('infocard-author');
    const genreEl = screen.queryByTestId('infocard-genre');

    expect(authorEl).toBeInTheDocument();
    expect(genreEl).toBeInTheDocument();

    expect(authorEl).toHaveTextContent(quoteMock.author);
    expect(genreEl).toHaveTextContent(quoteMock.genre);
  });

  it('Should call onContainerClick when infocard container clicked', () => {
    const onContainerClick = jest.fn();
    render(<InfoCard onContainerClick={onContainerClick} />);

    const containerEl = screen.getByTestId('infocard-container');
    fireEvent.click(containerEl);
    expect(onContainerClick).toHaveBeenCalled();
  });
});
