import { redirect, useLocation } from 'react-router-dom';
import { validatePathforBreadcrumbs } from '../../utils/path';
import {
  Breadcrumbs,
  CatalogSearchItemsSection,
  RecentlyViewedSection,
  Consultation,
  CatalogSortingFiltering,
  CatalogSearchItems,
} from '../../components';
import { catalogItems } from '../../components/CatalogSearchItems/CatalogSearchItemsData';
import { sortBySearchingOption } from '../../redux/actions/catalogSortingActions';
import { catalogSortingData } from '../../components/CatalogSortingFiltering/SelectOptionsdata';
import { useSelector } from 'react-redux';

export function Catalog() {
  const navigation = useLocation();

  const { language } = useSelector(
    ({ changeLanguageReducer }) => changeLanguageReducer
  );

  return (
    <div className='catalog'>
      <div className='breadcrumbs'>
        <Breadcrumbs crumbs={navigation} />
      </div>
      <CatalogSearchItemsSection>
        <CatalogSortingFiltering
          onSortChange={(catalogItems, option) =>
            sortBySearchingOption(catalogItems, option)
          }
          selectData={catalogSortingData}
        />
        <CatalogSearchItems />
      </CatalogSearchItemsSection>
      <Consultation />
      <RecentlyViewedSection />
    </div>
  );
}

export function loader({ params }) {
  let parameters = validatePathforBreadcrumbs(params.productId);
  let result = catalogItems.find((item) => item.title === parameters);

  if (!result) {
    return redirect('*');
  } else {
    return result;
  }
}
