import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

export function CategoryCard({ text, path, src, alt }) {
  return (
    <div className='category-card' data-testid='category-card'>
      <img className='category-card__image' src={src} alt={alt} />
      <Link to={`${path}`} className='category-card__link' aria-label={text}>
        <Trans>{text}</Trans>
      </Link>
    </div>
  );
}
