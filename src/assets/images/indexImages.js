import sq from './squares.png';
import bedroom from './bedroom.png';
import kitchen from './kitchen.png';
import bathroom from './bathroom.png';
import livingroom from './livingroom.png';
import nightstand from './nightStand.png';
import greenArrowRight from './greenArrowRight.png';
import maroonArrowRight from './maroonArrow.png';
import heartIcon from './heart.png';
import shopcartIcon from './shopCart.png';
import candleone from './candleImg1.png';
import candletwo from './candleImg2.png';
import candlethree from './candleImg3.png';
import reviewerOne from './reviewer.png';
import gPay from './gPay.png';
import visa from './visa.png';
import applePay from './applePay.png';
import mastercard from './masterCard.png';
import prettyCandleOne from './prettyCandle1.jpeg';
import prettyCandleTwo from './prettyCandle2.jpeg';
import prettyCandleThree from './prettyCandle3.jpeg';
import prettyCandleFour from './prettyCandle4.jpeg';
import newIn from './modalWindowCatalog1.png';
import clothing from './modalWindowCatalog2.png';
import accessories from './modalWindowCatalog3.png';
import shoes from './modalWindowCatalog4.png';
import faceAndBody from './modalWindowCatalog5.png';
import sportswear from './modalWindowCatalog6.png';
import trendingNow from './modalWindowCatalog7.png';
import cardIcon from './card.png';
export { cardIcon };

export const heart = {
  src: heartIcon,
  alt: 'heart icon'
};

export const reviewerIcon = {
  src: reviewerOne,
  alt: 'user icon'
};

export const shopCart = {
  src: shopcartIcon,
  alt: 'shopcart icon'
};

export const candles = [
  {
    src: candleone,
    alt: 'candle image',
    text: 'Dress the table for Autumn'
  },
  {
    src: candletwo,
    alt: 'candle image',
    text: 'Decorate your home'
  },
  {
    src: candlethree,
    alt: 'candle image',
    text: 'Create a great atmosphere'
  }
];

export const nightStand = {
  src: nightstand,
  alt: 'nightStand image'
};

export const squares = {
  src: sq,
  alt: 'squares'
};

export const greenArrow = {
  src: greenArrowRight,
  alt: 'green arrow svg'
};

export const maroonArrow = {
  src: maroonArrowRight,
  alt: 'maroon arrow'
};

export const categories = [
  {
    type: bedroom,
    alt: 'bedroom image',
    name: 'bedroom',
    path: 'bedrooms'
  },
  {
    type: kitchen,
    alt: 'kitchen image',
    name: 'kitchens',
    path: 'kitchens'
  },
  {
    type: bathroom,
    alt: 'bathroom image',
    name: 'bathroom',
    path: 'bathrooms'
  },
  {
    type: livingroom,
    alt: 'living room image',
    name: 'living room',
    path: 'livingrooms'
  }
];

export const modalWindowCatalog = [
  {
    type: newIn,
    alt: 'new collection',
    name: 'new in',
    path: 'newin'
  },
  {
    type: clothing,
    alt: 'clothing',
    name: 'Clothing',
    path: 'clothing'
  },
  {
    type: accessories,
    alt: 'accessories',
    name: 'Accessories',
    path: 'accessories'
  },
  {
    type: shoes,
    alt: 'shoes',
    name: 'Shoes',
    path: 'shoes'
  },
  {
    type: faceAndBody,
    alt: 'Face and body',
    name: 'Face & Body',
    path: 'faceandbody'
  },
  {
    type: sportswear,
    alt: 'sportswear',
    name: 'Sportswear',
    path: 'sportswear'
  },
  {
    type: trendingNow,
    alt: 'trending now',
    name: 'Trending now',
    path: 'trendingnow'
  }
];

export const payments = [
  {
    src: visa,
    alt: 'visa image',
    id: 1
  },
  {
    src: mastercard,
    alt: 'mastercard image',
    id: 2
  },
  {
    src: gPay,
    alt: 'GooglePay image',
    id: 3
  },
  {
    src: applePay,
    alt: 'applePay image',
    id: 4
  }
];

export const prettyCandles = [
  {
    src: prettyCandleOne,
    alt: 'pretty candle',
    id: 1,
    label: 'sale'
  },
  {
    src: prettyCandleTwo,
    alt: 'pretty candle',
    id: 2,
    label: 'new'
  },
  {
    src: prettyCandleThree,
    alt: 'pretty candle',
    id: 3
  },
  {
    src: prettyCandleFour,
    alt: 'pretty candle',
    id: 4,
    label: 'sale'
  }
];
