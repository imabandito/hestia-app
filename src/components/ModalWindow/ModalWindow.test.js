/* eslint-disable testing-library/no-render-in-setup */
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ModalWindow } from '../index';
const props = {
  openModal: true,
  setOpenModal: jest.fn()
};
describe('modalWindow component', () => {
  beforeEach(() => {
    render(<ModalWindow {...props} />);
  });
  it('component rendered', () => {
    expect(screen.getByTestId('modalWindow')).not.toBeNull();
  });
  it('modalWindow handleClose', () => {
    fireEvent.click(screen.getByTestId('closeModal'));
    expect(props.setOpenModal).toBeCalledTimes(1);
  });
});
