import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {
  Breadcrumbs,
  Loader,
  ProductDsItem,
  SimilarIdeasItems
} from '../../components/index';
import { SimilarProductSlider } from '../../components/index';
import {
  clearProducts,
  getOneRoom,
  hideLoader,
  postRoom,
  showLoader
} from '../../redux/actions/roomsActions';

export function ProductDs({ isUploaded }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = location.pathname.match(/[\d]{1,}/)?.[0];
  const {
    oneRoom,
    imageLoading,
    loading,
    productsLoading,
    imageCropResult,
    imageFile
  } = useSelector(({ roomsReducer }) => roomsReducer);

  const testUrl = /^\/getideas\/\d+$/i.test(location.pathname);

  useEffect(() => {
    if (imageCropResult) {
      dispatch(clearProducts());
    }
    if (isUploaded) {
      dispatch(showLoader());
      dispatch(postRoom(imageFile));
    } else if (!testUrl) {
      navigate('/notFound');
    } else {
      dispatch(getOneRoom(id));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return () => dispatch(hideLoader());
  }, [id]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  return !loading && !imageLoading ? (
    <div className='backgroundFill'>
      <div className='breadcrumbs'>
        <Breadcrumbs crumbs={location} />
      </div>
      <div className='wrapper'>
        <div className='product-ds'>
          <ProductDsItem productItem={oneRoom} showDescription={!isUploaded} />

          <SimilarProductSlider
            similarProduct={imageCropResult}
            loading={productsLoading}
            extraClass='similar-product-slider_full'
          />
          <div className='get-ideas'>
            <div className='get-ideas__grid'>
              {oneRoom.similar_ideas?.map((post) => (
                <SimilarIdeasItems id={post.id} post={post} key={post.id} />
              ))}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  ) : (
    <Loader />
  );
}
