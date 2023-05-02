export function PaymentOrderItem({ item }) {
  return (
    <div className='payment-order-item'>
      <p className='payment-order-item__text'>
        {item.title} <span>X {item.amountOrdered}</span>
      </p>
      <p>{(item.price - (item.discount || 0)) * item.amountOrdered} UAH</p>
    </div>
  );
}
