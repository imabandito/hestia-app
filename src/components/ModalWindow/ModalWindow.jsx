import cn from 'classnames';
import { Trans } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button } from '../UI/Buttons/Button';
export function ModalWindow({
  openModal,
  setOpenModal,
  modalName,
  children,
  extraClass,
}) {
  const { language } = useSelector(
    ({ changeLanguageReducer }) => changeLanguageReducer
  );
  const displayModalClass = cn(
    'modal-window',
    { 'display-none': !openModal },
    openModal ? extraClass : ''
  );

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div
      className={displayModalClass}
      data-testid='modalWindow'
      onClick={handleClose}
    >
      <div
        className='modal-window__content'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='modal-window__header'>
          {modalName && (
            <h4>
              <Trans>{modalName}</Trans>
            </h4>
          )}
          <Button
            icon='closeIcon'
            type='none'
            onClick={handleClose}
            extraClass='close'
            data-testid='closeModal'
          />
        </div>
        {children?.content}
      </div>
    </div>
  );
}
