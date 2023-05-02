import cn from 'classnames';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ColorPicker, Slider, StarRating, Tag } from '../index';
import { Button } from '../UI/Buttons/Button';
import { validatePath } from '../../utils/path';
import { useDispatch } from 'react-redux';
import { addToBag, addToWishList } from '../../redux/actions/goodsActions';
import { HeartIconFill } from '../UI/indexIcon';

export function CatalogItem({ item }) {
  function handleLongText(text) {
    const maxLength = 20;
    return text.length > maxLength
      ? [...text].slice(0, maxLength).join('') + '...'
      : text;
  }
  const [selectedProduct, setSelectedProduct] = useState(0);
  const dispatch = useDispatch();

  const generatedColors = item?.products.map(({ color }) => color);

  const instockClass = cn('product-content__stock', {
    'product-content__stock--available': item.inStock
  });

  const discountClass = cn('product-content__price', {
    'product-content__price--onDiscount': item.discount
  });

  const { orders, wishlist } = useSelector(({ goodsReducer }) => goodsReducer);
  const amountOrdered = orders[item.id]?.amountOrdered;

  const handlePurchase = () => {
    dispatch(addToBag(item));
  };

  const handleAddToWishList = () => {
    dispatch(addToWishList(item));
  };

  const product = item.products[selectedProduct];
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    setSlides(
      product.images.map((image, i) => ({
        src: image,
        alt: product.alt,
        id: i
      }))
    );
  }, [selectedProduct]);

  return (
    <div className='catalog-item' data-testid={`product-item-${item.id}`}>
      <div className='catalog-item__img'>
        <Link to={`/catalog/${validatePath(item)}`}>
          <Slider
            slides={slides}
            dotType='black'
            slideExtraClass='catalog-item-slider'
            isAuto={false}
          />
        </Link>
        <Button
          extraClass='catalog-heart'
          icon='heart'
          type='none'
          onClick={handleAddToWishList}
          activeIcon={wishlist[item.id] ? <HeartIconFill /> : false}
        />
        {product?.label && (
          <Tag type={product.label} extraClass='catalog-item__tag' />
        )}
        <ColorPicker
          colors={generatedColors}
          onColorChange={setSelectedProduct}
          widthAndHeight={{ width: 12, height: 12 }}
          name={item.id}
        />
      </div>
      <div className='catalog-item__content product-content'>
        <Link
          to={`/catalog/${validatePath(item)}`}
          className='product-content__title'
        >
          {handleLongText(item.title)}
        </Link>
        <div className='product-content__review'>
          <StarRating size={10} rate={item.rate} disabled />
          <Link to='#' className='review-count'>
            {item?.reviews} reviews
          </Link>
        </div>
        {product?.discount && (
          <p className='product-content__discount'>{product?.price + 'uah.'}</p>
        )}
        <p className={discountClass}>
          {' '}
          {product?.discount
            ? product?.price - product?.discount
            : product?.price}
          uah.
        </p>
        <p className={instockClass}>
          {item?.inStock ? 'In Stock' : 'Not Avaliable'}
        </p>
        {item.inStock && (
          <div className='catalog-item__cart'>
            <Button
              extraClass='catalog-shopcart'
              icon='shopcart'
              type='none'
              onClick={handlePurchase}
            />
            {amountOrdered && (
              <div className='catalog-item__amount'>{amountOrdered}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
