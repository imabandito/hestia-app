/* eslint-disable testing-library/no-render-in-setup */
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { CatalogSortingFiltering } from '..';
import { A_Z_OPTION, catalogSortingReducer } from '../../redux/reducers';
import { store } from '../../redux/store';
import { catalogItems } from '../CatalogSearchItems/CatalogSearchItemsData';

describe('select items input component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <CatalogSortingFiltering />;
      </Provider>
    );
  });

  it('component rendered', () => {
    expect(screen.getByTestId('items-selection')).toBeInTheDocument();
  });

  it("default option must be 'popularity' ", () => {
    expect(screen.getByRole('option', { name: 'Popularity' }).selected).toBe(
      true
    );
  });

  it('initial state of sorted items must not be empty', () => {
    expect(
      Object.getOwnPropertyNames(
        store.getState().catalogSortingReducer.sortedItems
      ).length !== 0
    ).toBe(true);
  });

  it('redux state changes when other option is selected', () => {
    const popularOptionState = catalogItems.sort((a, b) => b.rate - a.rate);
    const aZState = catalogItems.sort((a, b) => a.title.localeCompare(b.title));
    const defaultStates = {
      sortingOption: 'popularity',
      sortedItems: popularOptionState,
    };
    expect(
      catalogSortingReducer(defaultStates, {
        type: A_Z_OPTION,
        payload: aZState,
      })
    ).toEqual({ ...defaultStates, sortedItems: aZState });
  });

  it("must select 'a-z' option ", () => {
    userEvent.selectOptions(screen.getByTestId('items-selection'), ['a-z']);
    expect(screen.getByRole('option', { name: 'A-Z' }).selected).toBe(true);
  });

  it("must select 'z-a' option ", () => {
    userEvent.selectOptions(screen.getByTestId('items-selection'), ['z-a']);
    expect(screen.getByRole('option', { name: 'Z-A' }).selected).toBe(true);
  });

  it("must select 'price-ascending' option ", () => {
    userEvent.selectOptions(screen.getByTestId('items-selection'), [
      'price-ascending',
    ]);
    expect(
      screen.getByRole('option', { name: 'Price ascending' }).selected
    ).toBe(true);
  });

  it("must select 'price-descending' option ", () => {
    userEvent.selectOptions(screen.getByTestId('items-selection'), [
      'price-descending',
    ]);
    expect(
      screen.getByRole('option', { name: 'Price descending' }).selected
    ).toBe(true);
  });

  it('items should have rate more than 2', () => {
    userEvent.selectOptions(screen.getByTestId('rate-selection'), ['2']);
    expect(store.getState().catalogSortingReducer.sortedItems.length).toBe(11);
  });

  it('items should have grey color', () => {
    fireEvent.click(screen.getByTestId('color-2'));
    const items = store.getState().catalogSortingReducer.sortedItems;
    expect(items.length).toBe(1);
    expect(
      items[0].products.find(({ color }) => color.toUpperCase() === '#9FA2A6')
    ).not.toBe(undefined);
  });

  it('items prices should be greater than 8000', () => {
    fireEvent.change(screen.getByTestId('min-price-input'), {
      target: { value: '8000' },
    });
    const items = store.getState().catalogSortingReducer.sortedItems;
    expect(Object.values(items).every(({ price }) => price >= 8000)).toBe(true);
  });

  it('items prices should be greater than 6000 and lower than 10000', () => {
    fireEvent.change(screen.getByTestId('min-price-input'), {
      target: { value: '6000' },
    });
    fireEvent.change(screen.getByTestId('max-price-input'), {
      target: { value: '10000' },
    });
    const items = store.getState().catalogSortingReducer.sortedItems;
    expect(
      Object.values(items).every(({ price }) => price >= 6000 && price <= 10000)
    ).toBe(true);
  });
});
