import { Trans } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  HeartIconDesktop,
  CatalogItem,
  Breadcrumbs,
  CatalogSortingFiltering,
} from '../../components';
import { wishlistSortingData } from '../../components/CatalogSortingFiltering/SelectOptionsdata';
import { sortWishList } from '../../redux/actions/goodsActions';

export function WishList() {
  const { sortedWishlist } = useSelector(({ goodsReducer }) => goodsReducer);
  const navigation = useLocation();

  const { language } = useSelector(
    ({ changeLanguageReducer }) => changeLanguageReducer
  );

  return (
    <div className='wish-list background-fill_greyLight'>
      <div className='background-fill'>
        <div className='breadcrumbs'>
          <Breadcrumbs crumbs={navigation} />
        </div>
      </div>
      <div className='wrapper wish-list__wrapper'>
        {sortedWishlist.length > 0 ? (
          <>
            <div className='catalog__heading'>
              <h3 className='recently-viewed-heading'>
                <Trans>Wish list</Trans>
              </h3>
              <p className='recently-viewed-subheading'>
                <Trans>Wished items</Trans> {sortedWishlist.length}
              </p>
            </div>
            <div className='wish-list__sorting'>
              <CatalogSortingFiltering
                selectData={wishlistSortingData}
                onSortChange={sortWishList}
                showFilter={false}
              />
            </div>
            <div className='goods__products wish-list__products'>
              {sortedWishlist.map((obj) => (
                <CatalogItem key={obj.id} item={obj} />
              ))}
            </div>
          </>
        ) : (
          <div className='wrapper payment payment-empty-wrapper'>
            <div className='payment-empty'>
              <HeartIconDesktop />
              <h1>
                <Trans>Nothing in wishlist</Trans>
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
