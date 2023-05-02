import { Button, DashedLine } from '..';
import GooglePayButton from '@google-pay/button-react';
import gPayIcon from '../../assets/images/gPay.png';

export function PaymentCheckout({ sum }) {
  return (
    <div className='payment-checkout'>
      <h5>Payment of the order in HESTIA</h5>
      <div className='payment-checkout-sum'>
        <p className='payment-checkout-sum__amount'>Amount due:</p>
        <p className='payment-checkout-sum__number'>{sum} uah.</p>
      </div>
      <Button
        type='black'
        extraClass='total-check payment-checkout-apple-pay'
        icon='applePay'
      />
      <div className='google-pay-wrapper'>
        <div className='google-pay-button'>
          <GooglePayButton
            environment='TEST'
            buttonSizeMode='fill'
            buttonColor='white'
            className='payment-checkout__google-pay'
            paymentRequest={{
              apiVersion: 2,
              apiVersionMinor: 0,
              allowedPaymentMethods: [
                {
                  type: 'CARD',
                  parameters: {
                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                    allowedCardNetworks: ['MASTERCARD', 'VISA']
                  },
                  tokenizationSpecification: {
                    type: 'PAYMENT_GATEWAY',
                    parameters: {
                      gateway: 'example',
                      gatewayMerchantId: 'exampleGatewayMerchantId'
                    }
                  }
                }
              ],
              merchantInfo: {
                merchantId: '12345678901234567890',
                merchantName: 'Demo Merchant'
              },
              transactionInfo: {
                totalPriceStatus: 'FINAL',
                totalPriceLabel: 'Total',
                totalPrice: '100.00',
                currencyCode: 'USD',
                countryCode: 'US'
              }
            }}
            onLoadPaymentData={(paymentRequest) => {
              console.log('load payment data', paymentRequest);
            }}
          />
        </div>
      </div>
      <div className='payment-checkout__or'>
        <DashedLine startLength={16} />
        <span className='payment-checkout__or-name'>or</span>
        <DashedLine startLength={16} />
      </div>
    </div>
  );
}
