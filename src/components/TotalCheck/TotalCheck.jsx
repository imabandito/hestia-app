import { Trans } from 'react-i18next';
import { Button } from '..';

export function TotalCheck({
  delivery,
  price,
  isActive,
  productsNum,
  onClick,
}) {
  return (
    <div className='check' data-testid='total-check'>
      <h4>
        <Trans>Together</Trans>
      </h4>
      <div className='check-row'>
        <p className='check-row__descr'>
          {productsNum} &nbsp;
          <Trans>products for price</Trans>
        </p>
        <p className='check-row__sum'>{price} uah</p>
      </div>
      <div className='check-row'>
        <p className='check-row__descr'>
          <Trans>Delivery price</Trans>
        </p>
        <p className='check-row__sum'>
          <Trans>{delivery}</Trans>
        </p>
      </div>
      <div className='check__grey-line'></div>
      <div className='check-row check-row_price'>
        <p className='check-row__descr'>
          <Trans>To Pay</Trans>
        </p>
        <p className='check-row__sum'>{price} uah.</p>
      </div>
      <Button
        text='Make order'
        type='black'
        extraClass='total-check'
        disabled={!isActive}
        onClick={onClick}
      />
    </div>
  );
}
