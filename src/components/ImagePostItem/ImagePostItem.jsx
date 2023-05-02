import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../index';
import { reviewerIcon } from '../../assets/images/indexImages';

export function ImagePostItem({ post }) {
  const [accordActive, setAccordIsActive] = useState(false);
  const descrRef = useRef();

  function handleBackClick() {
    descrRef.current.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const openDescr = () => {
    setAccordIsActive(!accordActive);
    if (accordActive) {
      handleBackClick();
    }
  };
  return (
    <div className='image-post' data-testid='imagePostItem'>
      <div className='image-post__img-wrapper'>
        <img src={post.link} alt={post.title} />
        <Link to={`/getideas/${post.id}`}>
          {' '}
          <div className='image-post__overlay'>
            <div className='image-post_title-wrapper'>
              <h4 className='image-post__title'>{post.title}</h4>
            </div>
            <div className='image-post__actions'>
              <Button
                text='Share'
                type='white'
                icon='share'
                extraClass='postItem'
                onClick={(e) => e.preventDefault()}
              />
              <Button
                text='Save'
                type='white'
                icon='heart'
                extraClass='postItem'
                onClick={(e) => e.preventDefault()}
              />
            </div>
          </div>
        </Link>
      </div>
      <div className='image-post-owner'>
        <img
          src={post.owner?.img || reviewerIcon.src}
          alt={post?.owner?.alt}
          className='image-post-owner__img'
        />
        <h6>{post.owner || 'Owner Name'}</h6>
      </div>
      <div
        className={`image-post__descr descr-accordion 
        ${accordActive ? 'descr-accordion_active' : ''}`}
        data-testid='imagePostDescr'
      >
        <p ref={descrRef}>{post.description || 'No description provided'}</p>
        {post.description && post.description.length > 85 && (
          <Button
            icon='arrow'
            type='none'
            extraClass={accordActive ? 'rotate' : ''}
            onClick={openDescr}
            data-testid='imagePostDescrBtn'
          />
        )}
      </div>
    </div>
  );
}
