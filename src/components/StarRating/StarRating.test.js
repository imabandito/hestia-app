/* eslint-disable testing-library/no-render-in-setup */
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StarRating } from '..';

describe('StarRating component', () => {
  beforeEach(() => {
    render(<StarRating />);
  });

  it('5 stars rendered', () => {
    expect(screen.getAllByRole('button').length).toBe(5);
  });

  test.each`
    a    | expected
    ${5} | ${'on'}
    ${4} | ${'on'}
    ${3} | ${'on'}
    ${2} | ${'on'}
    ${1} | ${'on'}
  `('$a stars should become black after click', ({ a, expected }) => {
    fireEvent.click(screen.getByTestId(`rateStar-${a}`));
    let passedArgument = a;
    while (passedArgument > 0) {
      expect(screen.getByTestId(`rateStar-${a}`)).toHaveClass(`${expected}`);
      passedArgument--;
    }
  });
});
