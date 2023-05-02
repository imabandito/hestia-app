import { useContext } from 'react';
import { SocialMedia, Button, Payments, TextList } from '../index';
import { payments } from '../../assets/images/indexImages';
import { ModalContext } from '../../components/RootLayout/RootLayout';

const textData = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel urna
  gravida euismod sed sed.`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel urna
  gravida euismod sed sed.`
];

export function Footer() {
  const { handleOpenSupportModal } = useContext(ModalContext);
  return (
    <footer className='footer'>
      <div className='wrapper footer__wrapper'>
        <div className='footer__col'>
          <SocialMedia type='white' showText={true} />
        </div>

        <div className='footer__col'>
          <Button
            text='Contact Support'
            size='large'
            type='greenDark'
            extraClass='footer'
            clickHandler={handleOpenSupportModal}
          />
          <Payments data={payments} />
        </div>
        <div className='footer__col'>
          <TextList textData={textData} extraClass='footer__content' />
        </div>
      </div>
    </footer>
  );
}
