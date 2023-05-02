/* eslint-disable testing-library/no-render-in-setup */
import { Pagination } from './Pagination';
import '@testing-library/jest-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Pagination component', () => {
  beforeEach(() => {
    let currentPage = 1;
    function setCurrentPage(num) {
      currentPage = num;
    }
    render(
      <BrowserRouter>
        <Pagination pages={100} setCurrentPage={setCurrentPage} />
      </BrowserRouter>
    );
  });

  it('component rendered', () => {
    expect(screen.getByTestId('pagination')).not.toBeNull();
  });

  it('rendered proper amount of pages', () => {
    expect(
      screen.getAllByTestId('pagination-page').slice(-1)[0]
    ).toHaveTextContent('100');
  });

  it('after clicing on second button it becomes active', () => {
    expect(screen.getAllByTestId('pagination-page')[0]).toHaveClass('active');
    expect(screen.getAllByTestId('pagination-page')[1]).not.toHaveClass(
      'active'
    );
    fireEvent.click(screen.getByTestId('pagination-forward'));
    expect(screen.getAllByTestId('pagination-page')[1]).toHaveClass('active');
    expect(screen.getAllByTestId('pagination-page')[0]).not.toHaveClass(
      'active'
    );
  });
});
