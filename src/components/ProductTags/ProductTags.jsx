import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

export function ProductTags({ data }) {
  return (
    <div className='product-tags' data-testid='product-tags'>
      <p className='product-tags__title'>
        <Trans>Tags</Trans>
      </p>
      <div className='product-tags__link-container'>
        {data &&
          data.map((link) => (
            <Link
              className='product-tag-link'
              to={link.path}
              key={link.id}
              style={{ backgroundColor: `${link.color}` }}
            >
              <Trans>{link.text}</Trans>
            </Link>
          ))}
      </div>
    </div>
  );
}
