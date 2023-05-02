import cn from 'classnames';
import React, { useState } from 'react';
import { Trans } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, ColorPicker, SizePicker, StarRating } from '..';
import { addToBag, addToWishList } from '../../redux/actions/goodsActions';
import { HeartIconFill } from '../UI/indexIcon';

export function ProductInfo({ data, setSelectedProduct, selectedProduct }) {
  const generatedColors = data?.products.map(({ color }) => color);
  const [selectedSize, setSelectedSize] = useState(0);
  const { sizes, discount } = data;
  const dispatch = useDispatch();
  const { orders, wishlist } = useSelector(({ goodsReducer }) => goodsReducer);

  const discountClass = cn('product-info__price', {
    'product-info__price--onDiscount': discount,
  });

  const handleAddToBag = () => {
    dispatch(addToBag(data));
  };

  const handleAddToWishList = () => {
    dispatch(addToWishList(data));
  };

  const product = data.products[selectedProduct];

  return (
    <div className='product-info' data-testid='product-info'>
      <h1 className='product-info__title'>{data?.title}</h1>
      <div className='product-info__star-rating'>
        <StarRating rate={data?.rate} size={20} disabled />
        <a href='#review-section'>10 reviews</a>
      </div>
      <div className='product-info__specs'>
        <div className='product-info__colors'>
          <span>
            <Trans>Color</Trans>
          </span>
          <ColorPicker
            colors={generatedColors}
            widthAndHeight={{ width: 32, height: 32 }}
            onColorChange={setSelectedProduct}
          />
        </div>
        <div className='product-info__sizes'>
          <span>
            <Trans>Size</Trans>
          </span>
          <SizePicker sizes={sizes} onSizeChange={setSelectedSize} />
        </div>
      </div>
      <div className='product-info__price'>
        <div className='product-info__price-box'>
          {discount && (
            <p className='product-info__discount'>
              {(selectedSize + 1) * product?.price + 'uah.'}
            </p>
          )}
          <p className={discountClass}>
            {' '}
            {product?.discount
              ? (selectedSize + 1) * product?.price - product?.discount
              : product?.price * (selectedSize + 1)}
            uah.
          </p>
        </div>
        <Button
          extraClass='product-info__heart'
          icon='heart'
          type='none'
          onClick={handleAddToWishList}
          activeIcon={wishlist[data.id] ? <HeartIconFill /> : false}
        />
      </div>
      <div className='product-info__purchase'>
        <Button
          type='black'
          size='medium'
          text='Add to Bag'
          onClick={handleAddToBag}
        />
        <Link to='/purchaseInfo'>
          <span>
            <Trans>Info about delivery</Trans>
          </span>
        </Link>
      </div>
    </div>
  );
}
