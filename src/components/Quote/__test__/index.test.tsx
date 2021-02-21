import { render, screen } from '@testing-library/react';

import constants from '../constants';
import Quote from '..';

describe('Quote component test cases', () => {
  it(`Should render empty quote message when quote is null or undefined`, () => {
    render(<Quote />);

    const blockquoteEl = screen.queryByTestId('quote__blockquote');

    expect(blockquoteEl).toBeInTheDocument();
    expect(blockquoteEl).toHaveClass('quote__blockquote--empty');
    expect(blockquoteEl).toHaveTextContent(constants.messages.IS_EMPTY);
  });

  it(`Should render loading messages when loading quote`, () => {
    render(<Quote loading />);
    expect(screen.getByTestId('quote__blockquote')).toHaveTextContent(
      constants.messages.IS_LOADING
    );
    expect(screen.getByTestId('quote-container')).toHaveClass('quote--loading');
  });

  it(`Should render text from props`, () => {
    const quoteText = 'lorem ipsum dolor sit amet';
    render(<Quote text={quoteText} />);

    const content = screen.queryByTestId('quote__blockquote');

    expect(content).toHaveTextContent(quoteText);
    expect(content).toHaveClass('quote__blockquote');
  });
});
