import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import {
  ShopCart,
  SearchIcon,
  BurgerMenu,
  Logo,
  DesktopLogo,
  UserIconDesktop,
  HeartIconDesktop,
  BagIconDesktop
} from '../index';
import { GetIdeasIcon, InspirationIcon } from '../UI/indexIcon';
import { useEffect } from 'react';

export function Header({ openBurger, setOpenBurger }) {
  const [isActive, setActive] = useState(false);
  const [value, setValue] = useState('');

  const ref = useRef(null);

  const goodsReducer = useSelector(({ goodsReducer }) => goodsReducer);
  const { orders, wishlist } = useSelector(({ goodsReducer }) => goodsReducer);
  const totalAmountOrdered = Object.keys(orders).reduce(
    (sum, cur) => sum + orders[cur].amountOrdered,
    0
  );
  const [totalAmountWished, setTotalAmountWished] = useState(0);

  useEffect(() => {
    setTotalAmountWished(Object.keys(wishlist).length);
  }, [goodsReducer]);

  const inputClassName = cn('search', { 'search-input': isActive });
  const searchBoxClassName = cn('search-box', {
    'search-box_active': isActive
  });
  const searchIconClass = cn('search-icon', {
    'search-icon-position': isActive
  });

  const openSearch = () => {
    setActive(true);
    ref.current && ref.current.focus();
  };

  const closeSearch = () => {
    if (!value) {
      setActive(false);
    }
  };

  return (
    <header className='header'>
      <div className='wrapper wrapper__header'>
        <div className='header__burgerAndSearch'>
          <BurgerMenu openBurger={openBurger} setOpenBurger={setOpenBurger} />
          <div className='search-box__wrapper'>
            <div className={searchBoxClassName}>
              <input
                ref={ref}
                className={inputClassName}
                type='text'
                onBlur={closeSearch}
                placeholder='Search'
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <SearchIcon
                className={searchIconClass}
                test='iconSearch'
                clickHandler={openSearch}
              />
            </div>
          </div>
        </div>
        <Link className='header__logo' to='/' aria-label='logo'>
          <Logo className='disable-mobile-icons-header' />
          <DesktopLogo className='desktop-logo' />
        </Link>
        <Link
          to='/payment'
          className='disable-mobile-icons-header header-payment'
        >
          <ShopCart className='shopCart disable-mobile-icons-header' />
          <div className='header-payment__amount'>{totalAmountOrdered}</div>
        </Link>
        <div className='links-box'>
          <Link to='/personalCabinet' aria-label='personal cabinet'>
            <UserIconDesktop />
          </Link>
          <Link
            to='/wishlist'
            aria-label='shopcart'
            className='header-payment header-wishlist'
          >
            <HeartIconDesktop />
            <div className='header-payment__amount'>{totalAmountWished}</div>
          </Link>
          <Link
            to='/payment'
            aria-label='shop items'
            className='header-payment'
          >
            <BagIconDesktop />
            <div className='header-payment__amount'>{totalAmountOrdered}</div>
          </Link>
          <Link to='/getideas'>
            <GetIdeasIcon width='32px' heigth='32px' />
          </Link>
          <Link to='/styleinspiration'>
            <InspirationIcon width='32px' heigth='32px' />
          </Link>
        </div>
      </div>
    </header>
  );
}
