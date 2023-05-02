import { Link } from 'react-router-dom';

export function DiscountItem({ data, ...props }) {
  return (
    <div className='discount-item' {...props}>
      <div>
        <img className='discount-item__image' src={data.img} alt={data.alt} />
      </div>
      <div className='discount-item__info'>
        <h4>{data.title}</h4>
        <div className='discount-item__lower'>
          <div className='discount-item__days'>
            {data.days} {data.days > 1 ? 'days' : 'day'} remaining
          </div>
          <Link className='discount-item__link' to={data.link}>
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
