import { createContext, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Burger, Footer, Header, InfoBanner } from '..';
import i18n from '../../i18n';
import { NavMenu } from '../NavMenu/NavMenu';
export const ModalContext = createContext();

export function RootLayout() {
  const [openBurger, setOpenBurger] = useState(false);
  const [openSupportModal, setOpenSupportModal] = useState(false);
  const location = useLocation();

  const { language } = useSelector(
    ({ changeLanguageReducer }) => changeLanguageReducer
  );
  const handleOpenSupportModal = () => {
    setOpenSupportModal(!openSupportModal);
  };

  const exceptionForHeader = ['payment'];
  const exceptionForFooter = ['payment'];

  const generateHeader = exceptionForHeader.includes(
    location.pathname.slice(1, location.pathname.length)
  );
  const generateFooter = exceptionForFooter.includes(
    location.pathname.slice(1, location.pathname.length)
  );

  return (
    <ModalContext.Provider value={{ openSupportModal, handleOpenSupportModal }}>
      <I18nextProvider i18n={i18n}>
        <div className='app'>
          <InfoBanner text='we give -5% for Instagram subscription' />
          {!generateHeader && <NavMenu />}
          {!generateHeader && (
            <Header openBurger={openBurger} setOpenBurger={setOpenBurger} />
          )}

          {!generateHeader && (
            <Burger openBurger={openBurger} setOpenBurger={setOpenBurger} />
          )}

          <Outlet />

          {!generateFooter && <Footer />}
        </div>
      </I18nextProvider>
    </ModalContext.Provider>
  );
}
