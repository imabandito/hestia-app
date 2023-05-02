import React from 'react';
import { Trans } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { candles } from '../../assets/images/indexImages';
import { Benefits, Breadcrumbs, Slider } from '../../components';

export function DeliveryAndPayment() {
  const location = useLocation();

  const { language } = useSelector(
    ({ changeLanguageReducer }) => changeLanguageReducer
  );
  return (
    <div className='delivery-payment'>
      <div className='breadcrumbs'>
        <Breadcrumbs crumbs={location} />
      </div>
      <div className='wrapper'>
        <Slider slides={candles} />

        <div className='delivery-payment__content'>
          <h2 className='delivery-payment__content-title'>
            <Trans>When is delivery possible?</Trans>
          </h2>
          <p className='delivery-payment__content-text'>
            <Trans>Delivery date</Trans>
          </p>
          <h2 className='delivery-payment__content-title'>
            <Trans>Delivery methods</Trans>
          </h2>
          <h3 className='delivery-payment__content-subtitle'>
            <Trans>Delivery in Kiev</Trans>
          </h3>
          <p className='delivery-payment__content-text'>
            <Trans>Delivery cost</Trans>
          </p>
          <h3 className='delivery-payment__content-subtitle'>
            <Trans>Self-pickup in Kiev</Trans>
          </h3>
          <p className='delivery-payment__content-text'>
            <Trans>Self pickup</Trans>
          </p>
          <h3 className='delivery-payment__content-subtitle'>
            <Trans>Delivery across Ukraine</Trans>
          </h3>
          <p className='delivery-payment__content-text'>
            <Trans>Nova Poshta</Trans>
          </p>
          <h2 className='delivery-payment__content-title'>
            <Trans>Payment</Trans>
          </h2>
          <p className='delivery-payment__content-text'>
            <Trans>The following types of order payment are available</Trans>
          </p>
          <ul className='delivery-payment__content-list'>
            <li>
              <p className='delivery-payment__content-text'>
                <Trans>Liqpay</Trans>
              </p>
            </li>
            <li>
              <p className='delivery-payment__content-text'>
                <Trans>transfer to the Privatbank card</Trans>
              </p>
            </li>
          </ul>
          <p className='delivery-payment__content-text'>
            <Trans>Advance payment</Trans>
          </p>
        </div>
      </div>
      <Benefits />
    </div>
  );
}
