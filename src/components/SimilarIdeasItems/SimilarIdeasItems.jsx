import React from 'react';
import { Link } from 'react-router-dom';

export function SimilarIdeasItems({ post }) {
  return (
    <Link to={`/getideas/${post.id}`}>
      <div className='image-post' data-testid='imagePostItem'>
        <div className='image-post__img-wrapper'>
          <img src={post.link} alt={post.title} />
        </div>
      </div>
    </Link>
  );
}
