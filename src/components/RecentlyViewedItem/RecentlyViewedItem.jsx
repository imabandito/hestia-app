import { Link } from 'react-router-dom';
import { validatePath } from '../../utils/path';
import { Button } from '../UI/Buttons/Button';

export function RecentlyViewedItem({ itemData }) {
  function handleLongText(text) {
    return text.length > 20 ? [...text].slice(0, 28).join('') + '...' : text;
  }
  return (
    <div className='recently-viewed-item'>
      <Link to={`/catalog/${validatePath(itemData)}`}>
        <img
          className='recently-viewed-item__image'
          src={itemData?.src}
          alt={itemData?.alt}
        />

        <p className='recently-viewed-item__title'>
          {handleLongText(itemData?.title)}
        </p>
      </Link>
      <div className='recently-viewed-item__prices recent-prices'>
        {itemData?.discount && (
          <p className='recent-prices__oldPrice'>{itemData?.price + 'uah.'}</p>
        )}
        {itemData?.discount ? (
          <p className='recent-prices__newPrice'>
            {itemData?.price - itemData?.discount + 'uah.'}
          </p>
        ) : (
          <p className='recent-prices__fullPrice'>{itemData?.price + 'uah.'}</p>
        )}

        <Button icon='shopcart' type='none' extraClass='recently-viewed-item' />
      </div>
    </div>
  );
}
