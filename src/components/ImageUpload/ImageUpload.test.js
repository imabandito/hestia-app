/* eslint-disable testing-library/no-render-in-setup */
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { ImageUpload } from './ImageUpload';

describe('copmonent ImageUpload', () => {
  const dropHandler = jest.fn();

  beforeEach(() => {
    render(<ImageUpload dropHandler={dropHandler} />);
  });

  it('component rendered', () => {
    expect(
      screen.getByRole('heading', {
        name: /upload image/i
      })
    ).not.toBeNull();
  });

  it('file upload is working', () => {
    const file = new File(['img'], '../../assets/images/bedroom.png', {
      type: 'image/png'
    });
    const fileInput = screen.getByTestId('image-upload__drop');

    userEvent.upload(fileInput, file);
    expect(fileInput.files).toHaveLength(1);
    const uploadFileButton = screen.getByTestId('image-upload__handle-drop');

    fireEvent.click(uploadFileButton);
    expect(dropHandler).toHaveBeenCalledTimes(1);
  });
});
