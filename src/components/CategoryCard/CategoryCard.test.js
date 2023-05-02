/* eslint-disable testing-library/no-render-in-setup */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { categories } from '../../assets/images/indexImages';
import { CategoryCard } from '..';

describe('CategoryCard', () => {
  beforeEach(() => {
    render(
      <Router>
        <CategoryCard
          text="bedroom"
          className="category-card"
          src={categories[0]?.type}
          alt={categories[0]?.alt}
          path={categories[0]?.path}
        />
      </Router>
    );
  });

  it('component rendered', () => {
    expect(screen.getByTestId('category-card')).not.toBeNull();
  });
});
