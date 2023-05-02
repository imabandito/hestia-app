import { useState } from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import {
  PaymentAccordionItem,
  PaymentOrderItem,
  PaymentTitleContent,
  LogoHeader,
  TotalCheck,
  DeliveryOptions,
  PaymentNumericTitle,
  PaymentOption,
  ContactVerification,
  BagIconDesktop,
  PaymentCard,
  PaymentCardCheckout,
  PaymentCheckout,
} from '../../components';
import { Logo } from '../../components/UI/Logo/Logo';
import { paymentData } from '../../components/PaymentOption/PaymentOptionData';
import { Trans } from 'react-i18next';

export function Payment() {
  const [activeTabs, setActiveTabs] = useState({
    contacts: false,
  });
  const [validTabs, setValidTabs] = useState({
    contacts: false,
    delivery: false,
    payment: false,
  });
  const [cardCheckoutVisible, setCardCheckoutVisible] = useState(false);

  const { language } = useSelector(
    ({ changeLanguageReducer }) => changeLanguageReducer
  );

  const { orders } = useSelector(({ goodsReducer }) => goodsReducer);
  const orderedArray = Object.keys(orders).map((id) => orders[id]);
  const orderedSum = orderedArray.reduce(
    (sum, item) =>
      sum + (item.price - (item.discount || 0)) * item.amountOrdered,
    0
  );
  const handleContactsOpen = (value) => {
    setActiveTabs((prev) => ({ ...prev, contacts: value }));
  };
  const handleDeliveryOpen = (value) => {
    setActiveTabs((prev) => ({ ...prev, delivery: value }));
  };
  const handlePaymentOpen = (value) => {
    setActiveTabs((prev) => ({ ...prev, payment: value }));
  };
  const handleValidTabs = (obj) => {
    setValidTabs((prev) => ({
      ...prev,
      ...obj,
    }));
  };

  const showCardCheckout = () => {
    window.scrollTo({ top: 0 });
    setCardCheckoutVisible(!cardCheckoutVisible);
  };

  return (
    <div className='background-fill_greyLight'>
      <div className='background-fill'>
        <div className='wrapper wrapper_header-payment'>
          <LogoHeader icon={<Logo />} />
        </div>
      </div>
      {orderedArray.length > 0 ? (
        <div className='wrapper payment'>
          <div className='payment-info'>
            <PaymentAccordionItem
              titleContent={<PaymentTitleContent price={orderedSum} />}
              extraClass='payment-accordion-item'
            >
              {orderedArray.map((item) => (
                <PaymentOrderItem item={item} key={item.id} />
              ))}
            </PaymentAccordionItem>
            <PaymentAccordionItem
              titleContent={
                <PaymentNumericTitle
                  number={1}
                  title='Contacts'
                  isChecked={activeTabs.contacts}
                />
              }
              setIsChecked={handleContactsOpen}
            >
              <ContactVerification
                extraClass='contact-verification-form'
                setIsValid={handleValidTabs}
              />
            </PaymentAccordionItem>
            <PaymentAccordionItem
              titleContent={
                <PaymentNumericTitle
                  title='Delivery options'
                  number='2'
                  isChecked={activeTabs.delivery}
                />
              }
              setIsChecked={handleDeliveryOpen}
            >
              <DeliveryOptions setIsValid={handleValidTabs} />
            </PaymentAccordionItem>

            <PaymentAccordionItem
              titleContent={
                <PaymentNumericTitle
                  title={'Payment options'}
                  number='3'
                  isChecked={activeTabs.payment}
                />
              }
              setIsChecked={handlePaymentOpen}
            >
              <PaymentOption
                options={paymentData}
                setIsValid={handleValidTabs}
              />
            </PaymentAccordionItem>
            <TotalCheck
              delivery='free'
              price={orderedSum}
              isActive={Object.values(validTabs).every((val) => val)}
              productsNum={orderedArray.length}
              onClick={showCardCheckout}
            />
          </div>
          <div
            className={`${
              cardCheckoutVisible ? 'card-checkout_visible' : 'card-checkout'
            }`}
          >
            <PaymentCheckout sum={orderedSum} />
            <PaymentCardCheckout />
          </div>
        </div>
      ) : (
        <div className='wrapper payment payment-empty-wrapper'>
          <div className='payment-empty'>
            <BagIconDesktop width='64' height='64' />
            <h1>
              <Trans>No orders made</Trans>
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}
