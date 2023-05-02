import { PaymentCard, Button } from '..';
import { cardIcon } from '../../assets/images/indexImages';
import liqpay from '../../assets/images/liqpay.png';
import shield from '../../assets/images/shield.png';
import alert from '../../assets/images/alert.png';

export function PaymentCardCheckout() {
  const handlePay = () => {};

  return (
    <div className='checkout-card'>
      <div className='checkout-card__upper'>
        <div>
          <img src={cardIcon} alt='card' />
          <span>Card</span>
        </div>
        <div className='checkout-card__upper-liqpay'>
          <img src={liqpay} alt='liqpay' />
        </div>
      </div>
      <PaymentCard />
      <Button
        text='Pay'
        type='black'
        extraClass='total-check'
        onClick={handlePay}
      />
      <div className='checkout-card-safety'>
        <div className='checkout-card-safety__row'>
          <img src={shield} alt='ssl' />
          <p>Site is protected with SSL sertificate.</p>
        </div>
        <div className='checkout-card-safety__row'>
          <img src={alert} alt='alert' />
          <p>
            In case of unsuccessful payment, check the limit of online payments
          </p>
        </div>
      </div>
    </div>
  );
}
