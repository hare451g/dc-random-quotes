import { fireEvent, render, screen } from '@testing-library/react';

import RandomButton from '..';

describe('Random button test suite', () => {
  describe('Component render without props', () => {
    it('Should render all element', () => {
      render(<RandomButton />);
      const containerEl = screen.queryByTestId('random-btn');
      const buttonEl = screen.queryByTestId('random-btn__button');
      const iconEl = screen.queryByTestId('random-btn__img');

      expect(containerEl).toBeInTheDocument();
      expect(buttonEl).toBeInTheDocument();
      expect(iconEl).toBeInTheDocument();
    });

    it('should render initial view correctly', () => {
      render(<RandomButton />);
      const buttonEl = screen.queryByTestId('random-btn__button');
      const iconEl = screen.queryByTestId('random-btn__img');

      expect(buttonEl).toHaveTextContent('random');
      expect(iconEl).toHaveClass('random-btn__img');
    });
  });

  describe('Rendering with props', () => {
    it('Should render loading state', () => {
      render(<RandomButton loading />);
      const buttonEl = screen.queryByTestId('random-btn__button');
      const iconEl = screen.queryByTestId('random-btn__img');

      expect(buttonEl).toHaveTextContent('loading');
      expect(iconEl).toHaveClass('random-btn__img--loading');
    });

    it('Should call onContainerClick when infocard container clicked ', () => {
      const mockOnClick = jest.fn();
      render(<RandomButton onClick={mockOnClick} />);
  
      const buttonEl = screen.getByTestId('random-btn__button');
      fireEvent.click(buttonEl);
  
      expect(mockOnClick).toHaveBeenCalled();
    });
  });
});
