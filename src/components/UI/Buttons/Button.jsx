import cn from 'classnames';
import { Trans } from 'react-i18next';
import {
  HeartIcon,
  ShopCart,
  Squares,
  Arrow,
  CloseIcon,
  SquaresIconBlack,
  UserIcon,
  SmallCloseIcon,
  BentArrow,
  ArrowLeft,
  ArrowRight,
  ShareIcon,
  GetIdeasIcon,
  InspirationIcon,
  HeartIconFill,
  ApplePayIcon,
} from '../indexIcon';

const types = {
  black: 'black',
  menu: 'menu',
  white: 'white',
  greenTransparent: 'greenTransparent',
  maroon: 'maroon',
  none: 'none',
  greenTransparentLight: 'greenTransparentLight',
  greenDark: 'greenDark',
};

export const svgIcon = {
  heart: <HeartIcon />,
  shopcart: <ShopCart />,
  squares: <Squares />,
  arrow: <Arrow />,
  closeIcon: <CloseIcon />,
  squaresBlack: <SquaresIconBlack />,
  userIcon: <UserIcon />,
  smallCloseIcon: <SmallCloseIcon />,
  bentArrow: <BentArrow />,
  arrowLeft: <ArrowLeft />,
  arrowRight: <ArrowRight />,
  share: <ShareIcon />,
  getIdeas: <GetIdeasIcon width='24px' heigth='24px' />,
  inspiration: <InspirationIcon width='24px' heigth='24px' />,
  heartIconFill: <HeartIconFill />,
  applePay: <ApplePayIcon />,
};

export function Button({
  text,
  type = 'black',
  icon,
  position = 'left',
  size,
  extraClass,
  clickHandler,
  state,
  rotate,
  activeIcon,
  ...props
}) {
  const classNames = cn(
    'button',
    type && `button_${types[type]}`,
    size && `button_${size}`,
    extraClass && `button_${extraClass}`
  );

  return (
    <button
      className={classNames}
      onClick={clickHandler}
      {...props}
      aria-label={text ? text : icon}
    >
      {icon && position === 'left' && (
        <div className={state ? `icon ${rotate}` : 'icon'}>
          {!activeIcon ? svgIcon?.[icon] : activeIcon}
        </div>
      )}
      <Trans>{text}</Trans>
      {icon && position === 'right' && (
        <div className={state ? `icon ${rotate}` : 'icon'}>
          {svgIcon?.[icon]}
        </div>
      )}
    </button>
  );
}
