import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Breadcrumbs,
  GetIdeasPageFiltering,
  ImagePostItem,
  ImageUpload,
} from '../../components/index';
import { Loader } from '../../components/index';
import { useInfiniteScroll } from './useInfiniteScroll';
import {
  getAllRooms,
  clearRooms,
  setImageFile,
} from '../../redux/actions/roomsActions';

export function GetIdeas() {
  const location = useLocation();
  const navigate = useNavigate();
  const [pageNum, setPageNum] = useState(1);
  const [loadPostsCount, setLoadPostsCount] = useState(11);
  const [allowFetching, setAllowFetching] = useState(true);

  let [isFetching, setIsFetching, ref] = useInfiniteScroll(loadPosts);

  const pagePosts = useSelector(({ roomsReducer }) => roomsReducer.rooms);
  const loading = useSelector(({ roomsReducer }) => roomsReducer.loading);

  const { options, ranges, isFilterActive } = useSelector(
    ({ getIdeasFilteringReducer }) => getIdeasFilteringReducer
  );
  const dispatch = useDispatch();

  const dropHandler = (file) => {
    dispatch(setImageFile(file));
    setAllowFetching(false);
    navigate('/getIdeas/uploaded');
  };

  useEffect(() => {
    setPageNum(1);
    dispatch(clearRooms());
    setIsFetching(false);
    setIsFetching(true);
  }, [options[0], options[1], ranges[0], ranges[1], isFilterActive]);

  useEffect(() => {
    if (pageNum > 1) {
      setLoadPostsCount(12);
    }
  }, [pageNum]);

  function loadPosts() {
    if (!isFilterActive) {
      dispatch(getAllRooms(pageNum, loadPostsCount));
    } else {
      dispatch(getAllRooms(pageNum, loadPostsCount, options, ranges));
    }
    setPageNum((page) => page + 1);
    setIsFetching(false);
  }

  return (
    <div className='backgroundFill'>
      <div className='breadcrumbs'>
        <Breadcrumbs crumbs={location} />
      </div>
      <div className='wrapper get-ideas-wrapper get-ideas'>
        <GetIdeasPageFiltering />
        <div className='get-ideas__grid'>
          {pagePosts?.length > 0 && <ImageUpload dropHandler={dropHandler} />}
          {pagePosts &&
            pagePosts?.map((post, i) => (
              <ImagePostItem id={post.id} post={post} key={post.id} />
            ))}
          {loading && <Loader />}
        </div>
        {allowFetching && (
          <div className='get-ideas__observer' ref={ref}>
            {isFetching && <Loader />}
          </div>
        )}
      </div>
    </div>
  );
}
