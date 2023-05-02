import { Link } from 'react-router-dom';

export function Description({ text, link }) {
  return (
    <div className='description'>
      <p className='description__text'>{text}</p>
      <Link className='description__learn-more' to={link}>
        Learn more
      </Link>
    </div>
  );
}
