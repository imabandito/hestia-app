import { Trans } from 'react-i18next';
import { useSelector } from 'react-redux';

export function CatalogSearchItemsSection({ children }) {
  const { sortedItems } = useSelector(
    ({ catalogSortingReducer }) => catalogSortingReducer
  );

  return (
    <div className='background-fill_greyLight'>
      <div className='wrapper catalog__search'>
        <div className='catalog__heading'>
          <h2 className='recently-viewed-heading'>
            <Trans>Catalog</Trans>
          </h2>
          <p className='recently-viewed-subheading'>
            <Trans>Results</Trans> {sortedItems.length}
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}
