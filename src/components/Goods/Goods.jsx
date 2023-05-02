import { Button, CatalogItem } from '../index';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Goods({ items, type, similarId, ...props }) {
  const [sortedProducts, setSortedProducts] = useState([]);
  const itemsPerPage = 4;

  const filterAndSortProducts = () => {
    let filtered;
    const { similar } = items.find((item) => item.id === similarId) || [];
    if (type === 'similar') {
      filtered = similar?.map((id) => items.find((item) => item.id === id));
    } else {
      filtered = items
        .filter(
          (item) =>
            item.products.findIndex((product) => product.label === type) >= 0
        )
        .map((item) => {
          item.products.sort((a, b) => (a.label === type ? -1 : 1));
          return item;
        });
    }
    setSortedProducts(filtered);
  };

  useEffect(() => {
    filterAndSortProducts();
  }, [type]);

  return (
    <div className='goods'>
      <div className='goods__products'>
        {sortedProducts?.slice(0, itemsPerPage).map((product) => (
          <CatalogItem key={product.id} item={product} />
        ))}
      </div>
      {sortedProducts?.length >= itemsPerPage && (
        <Link to='/catalog'>
          <Button
            extraClass='goods__more'
            type='greenTransparent'
            text='View More'
            icon='arrowRight'
          />
        </Link>
      )}
      {!sortedProducts && <p className='goods__fail'>No {type} products :(</p>}
    </div>
  );
}
