import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/src/ReactCrop.scss';
import { ProductDsDescription } from '../index';
import { getSimilarProducts } from '../../redux/actions/roomsActions';
import { useLocation } from 'react-router-dom';

export function ProductDsItem({ productItem, showDescription }) {
  const [crop, setCrop] = useState();
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  const [croppedFile, setCroppedFile] = useState();
  const [file, setFile] = useState(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const dispatch = useDispatch();
  const location = useLocation();

  const { imageFile, oneRoomImage } = useSelector(
    ({ roomsReducer }) => roomsReducer
  );

  const handleFullWidth = (e) => {
    setWidth(() => +(e.target.naturalWidth / e.target.clientWidth).toFixed(2));
    setHeight(
      () => +(e.target.naturalHeight / e.target.clientHeight).toFixed(2)
    );
  };

  function getCroppedImg(imageFile, pixelCrop, fileName) {
    const canvas = document.createElement('canvas');
    canvas.x = pixelCrop.x;
    canvas.y = pixelCrop.y;
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    const ctx = canvas.getContext('2d');

    let image = new Image();
    image.src = URL.createObjectURL(imageFile);

    let promise = new Promise((resolve, reject) => {
      image.onload = function () {
        ctx.drawImage(
          image,
          width * pixelCrop.x,
          height * pixelCrop.y,
          width * pixelCrop.width,
          height * pixelCrop.height,
          0,
          0,
          pixelCrop.width,
          pixelCrop.height
        );
        resolve();
      };
    }).then(function () {
      return new Promise((resolve, reject) => {
        canvas.toBlob((blob) => {
          if (blob) {
            blob.name = fileName;
            resolve(blob);
          }
        }, 'image/jpeg');
      });
    });
    return promise;
  }

  function cropHandler(c) {
    setCoordinates({
      x: c.x,
      y: c.y,
      width: c.width,
      height: c.height
    });

    getCroppedImg(file, c, 'preview.jpg').then((res) => {
      setCroppedFile(() => new File([res], 'cropped-img.jpeg', res));
    });
    setCrop(c);
  }

  useEffect(() => {
    let unsubscribed = false;

    if (coordinates.width === 0) {
      return;
    }

    const timeoutId = setTimeout(() => {
      if (!unsubscribed) {
        const formData = new FormData();
        formData.append('file', croppedFile);
        dispatch(getSimilarProducts(formData));
      }
    }, 500);

    return () => {
      unsubscribed = true;
      clearTimeout(timeoutId);
    };
  }, [coordinates.x, coordinates.y, coordinates.width, coordinates.height]);

  useEffect(() => {
    if (location.pathname.includes('uploaded')) {
      setFile(imageFile);
    } else {
      setFile(oneRoomImage);
    }
  }, []);

  return (
    <div className='product-ds-item'>
      <div className='product-ds-item__image'>
        <ReactCrop
          minHeight={50}
          minWidth={50}
          crop={crop}
          onChange={(c) => {
            cropHandler(c);
          }}
        >
          <img
            onLoad={(e) => handleFullWidth(e)}
            className='full-width'
            src={productItem.link}
            alt={productItem.alt}
          />
        </ReactCrop>
        {/* {productItem.tags &&
          productItem.tags.map((tag, index) => (
            <div
              className="ds-tag"
              key={index}
              style={{
                width: `${tag.width}%`,
                height: `${tag.height}%`,
                left: `${tag.x}%`,
                top: `${tag.y}%`
              }}
            >
              <div className="ds-tag-container">
                <div
                  className="ds-tag-container__background"
                  data-testid="tagIcon"
                >
                  <TagIcon />
                </div>
              </div>
            </div>
          ))} */}
      </div>
      {showDescription && <ProductDsDescription description={productItem} />}
      {/* <div className='product-ds-item__description'></div> */}
    </div>
  );
}
