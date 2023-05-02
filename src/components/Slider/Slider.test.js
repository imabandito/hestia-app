/* eslint-disable testing-library/no-render-in-setup */
import '@testing-library/jest-dom';
import { Slider } from './Slider';
import { candles } from '../../assets/images/indexImages';
import { fireEvent, render, screen } from '@testing-library/react';

describe('slider component', () => {
  beforeEach(() => {
    render(<Slider slides={candles} />);
  });

  it('component rendered', () => {
    expect(
      screen.getAllByRole('img', { name: /candle image/i })
    ).not.toBeNull();
  });

  it('dots rendered', () => {
    expect(screen.getByTestId('allDots')).not.toBeNull();
  });

  it('dot after click changes to active', () => {
    expect(screen.getByTestId('dot-2')).not.toHaveClass('active-dot');
    fireEvent.click(screen.getByTestId('dot-2'));
    expect(screen.getByTestId('dot-2')).toHaveClass('active-dot');
  });

  it('after click on dot it changes to active and slide changes to active', () => {
    expect(screen.getByTestId('dot-2')).not.toHaveClass('active-dot');
    fireEvent.click(screen.getByTestId('dot-2'));
    expect(screen.getByTestId('dot-2')).toHaveClass('active-dot');
  });
});
