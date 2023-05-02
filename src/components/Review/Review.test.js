/* eslint-disable testing-library/no-render-in-setup */
import '@testing-library/jest-dom';
import { Review } from '../index';
import { fireEvent, render, screen } from '@testing-library/react';
import { reviewers } from './ReviewData';

describe('Review component', () => {
  beforeEach(() => {
    render(<Review reviewer={reviewers[0]} />);
  });

  it('component rendered', () => {
    expect(screen.getByTestId('review-item')).not.toBeNull();
  });

  it('proper amount of answers', () => {
    expect(screen.getByTestId('answers-button')).toHaveTextContent('2 answers');
  });

  it('form opened', () => {
    const button = screen.getByRole('button', { name: /reply/i });

    fireEvent.click(button);
    const replyForm = screen.getByTestId('reply-form');
    expect(replyForm).toBeInTheDocument();
  });
});
