import { useState } from 'react';
import cn from 'classnames';
import { UploadIcon } from '../UI/indexIcon';
import { Button } from '..';

export function ImageUpload({ extraClass, dropHandler, ...props }) {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(false);

  const uploadClass = cn(
    'image-upload__drop',
    dragActive && 'image-upload__drop_active'
  );

  const onDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.target?.files?.[0] || e.dataTransfer?.files?.[0];
    setUploadedFile(file);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleUpload = () => {
    dropHandler(uploadedFile);
    setUploadedFile(null);
  };
  const handleCancel = () => {
    setUploadedFile(null);
  };

  return (
    <form
      className={`image-upload ${extraClass}`}
      {...props}
      onSubmit={(e) => e.preventDefault()}
    >
      <h6 className='image-upload__title'>Upload Image</h6>
      {uploadedFile ? (
        <img src={URL.createObjectURL(uploadedFile)} alt='uploaded'></img>
      ) : (
        <label
          className={uploadClass}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={onDrop}
        >
          <UploadIcon width='60' height='60' className='image-upload__icon' />
          <h6 className='image-upload__drop-upload'>
            Drop or Upload your image here
          </h6>
          <input
            type='file'
            id='file-upload'
            className='image-upload__file-input'
            accept='image/jpg, image/jpeg, image/png'
            onChange={onDrop}
            data-testid='image-upload__drop'
          />
        </label>
      )}

      {uploadedFile && (
        <div className={`image-upload__file`}>
          <p className='image-upload__file-name'>{uploadedFile?.name}</p>
          <div className='image-upload__actions'>
            <Button
              text='Upload'
              type='greenTransparent'
              extraClass='file-action-upload'
              onClick={handleUpload}
              data-testid='image-upload__handle-drop'
            />
            <Button
              text='Cancel'
              type='maroon'
              extraClass='file-action-cancel'
              onClick={handleCancel}
            />
          </div>
        </div>
      )}
    </form>
  );
}
