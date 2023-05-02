import { useLocation } from 'react-router-dom';
import { DiscountItem } from '../../components';
import { discountData } from '../../components/DiscountItem/DiscountData';
import { Breadcrumbs } from '../../components';

export function Discounts() {
  const navigation = useLocation();

  return (
    <div className='background-fill_greyLight'>
      <div className='breadcrumbs'>
        <Breadcrumbs crumbs={navigation} />
      </div>
      <div className='wrapper discounts'>
        <div className='discounts__items'>
          {discountData.map((data, i) => (
            <DiscountItem data={data} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
