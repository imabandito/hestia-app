import { Description, SignIn, SignUp } from '../index';
import { Goods } from '../Goods/Goods';
import { productItems } from '../CatalogItem/CatalogItemData';
import { catalogItems } from '../CatalogSearchItems/CatalogSearchItemsData';
export const tabsData = [
  {
    id: 0,
    name: 'Description',
    content: (
      <Description
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Iaculis aliquam venenatis sed aliquam elit in ante. Nibh eget 
        sem elit at sit fusce id blandit. Id nisl, porttitor sit enim. 
        Vestibulum elit metus mattis pellentesque dignissim sagittis augue
        nibh lacus. Nisi dui id molestie mauris fusce non laoreet. 
        Sit at molestie urna vestibulum, augue aliquet arcu et nunc.
        Vel nullam ac turpis elit ac aliquam. Id diam egestas aliquet a.
        Nunc integer arcu venenatis blandit mauris diam enim dignissim.'
        link='/product'
      />
    ),
  },
  {
    id: 1,
    name: 'Characteristics',
    content: <div>Characteristics</div>,
  },
];

export const goodsTabs = [
  {
    id: 0,
    name: 'Popular',
    content: <Goods items={catalogItems} type='popular' />,
  },
  {
    id: 1,
    name: 'New',
    content: <Goods items={catalogItems} type='new' />,
  },
];

export const similarTabs = [
  {
    id: 0,
    name: 'Similar products',
    content: <Goods items={catalogItems} type='similar' />,
  },
  {
    id: 1,
    name: 'More from Wax',
    content: <Goods items={catalogItems} type='new' />,
  },
];

export const personalCabinetTabs = [
  {
    id: 0,
    name: 'Sign In',
    content: <SignIn />,
  },
  {
    id: 1,
    name: 'Sign Up',
    content: <SignUp />,
  },
];
