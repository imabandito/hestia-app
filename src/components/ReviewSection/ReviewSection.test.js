/* eslint-disable testing-library/no-render-in-setup */
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { ReviewSection } from './ReviewSection';
import { commentData } from '../Comment/CommentData';

describe('ReviewSection component', () => {
  beforeEach(() => {
    render(<ReviewSection commentData={commentData} commentsPerPage={2} />);
  });

  it('component rendered', () => {
    expect(screen.getByTestId('review-section')).not.toBeNull();
  });

  it('dots rendered', () => {
    expect(screen.getByTestId('all-dots')).not.toBeNull();
  });

  it('need amout of dots rendered', () => {
    expect(screen.getByTestId('all-dots').childElementCount).toBe(4);
  });

  it('dot after click changes to active', () => {
    expect(screen.getByTestId('dot-2')).not.toHaveClass(
      'review-section-dot_active'
    );
    fireEvent.click(screen.getByTestId('dot-2'));
    expect(screen.getByTestId('dot-2')).toHaveClass('review-section-dot_active');
  });
});

describe('ReviewSection component with different data', () => {
  beforeEach(() => {
    render(<ReviewSection commentData={commentData} commentsPerPage={4} />);
  });

  it('component rendered', () => {
    expect(screen.getByTestId('review-section')).not.toBeNull();
  });

  it('dots rendered', () => {
    expect(screen.getByTestId('all-dots')).not.toBeNull();
  });

  it('need amout of dots rendered', () => {
    expect(screen.getByTestId('all-dots').childElementCount).toBe(8);
  });

  it('dot after click changes to active', () => {
    expect(screen.getByTestId('dot-2')).not.toHaveClass(
      'review-section-dot_active'
    );
    fireEvent.click(screen.getByTestId('dot-2'));
    expect(screen.getByTestId('dot-2')).toHaveClass('review-section-dot_active');
  });
});
