import { render, screen } from '@testing-library/react';

import constants from '../constants';
import Quote from '..';

describe('Quote component test cases', () => {
  it(`Should render empty quote message when quote is null or undefined`, () => {
    render(<Quote />);

    const content = screen.queryByTestId('content');

    expect(content).toBeInTheDocument();
    expect(content).toHaveClass('quote-empty');
    expect(content).toHaveTextContent(constants.messages.IS_EMPTY);

    expect(screen.queryByTestId('loading-indicator')).toBeNull();
  });

  it(`Should render loading messages when loading quote`, () => {
    render(<Quote loading />);
    expect(screen.queryByTestId('content')).toBeNull();
    expect(screen.getByTestId('loading-indicator')).toHaveTextContent(
      constants.messages.IS_LOADING
    );
  });

  it(`Should render text from props`, () => {
    const quoteText = 'lorem ipsum dolor sit amet';
    render(<Quote text={quoteText} />);

    const content = screen.queryByTestId('content');

    expect(content).toHaveTextContent(quoteText);
    expect(content).toHaveClass('quote-content');
    expect(screen.queryByTestId('loading-indicator')).toBeNull();
  });
});
