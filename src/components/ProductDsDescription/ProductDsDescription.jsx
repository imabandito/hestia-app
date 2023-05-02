import { Link } from 'react-router-dom';
import { StarRating } from '../index';
import { reviewerIcon } from '../../assets/images/indexImages';

export function ProductDsDescription({ description }) {
  return (
    <div className='product-description'>
      <div className='product-description-user'>
        <div className='product-description-user__icon-wrapper'>
          <img src={reviewerIcon.src} alt='user' />
        </div>
        <div className='product-description__col'>
          <Link to={'/'}>
            <h4 className='product-description-user__name'>
              {description?.owner ?? 'Joe McGuire Design'}
            </h4>
          </Link>
          <div className='product-description__reviews'>
            <StarRating rate='4' disabled />
            <Link to='/' className='product-description-user__reviews'>
              9 reviews
            </Link>
          </div>
        </div>
        <div className='product-description__col'>
          <Link
            to='/productds'
            className='product-description-user__link description__learn-more'
          >
            View Profile
          </Link>
        </div>
      </div>
      <div className='product-description-content'>
        <h3 className='product-description__title'>{description?.title}</h3>
        <h6 className='product-description__subtitle'>
          {description?.subtitle}
        </h6>
        <div className='product-description__text'>
          {description?.description}
        </div>
        <div className='product-description__text'>
          {description?.auto_description}
        </div>
      </div>
    </div>
  );
}
