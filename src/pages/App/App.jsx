import './App.scss';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import {
  Product,
  Home,
  Payment,
  NotFound,
  Catalog,
  ProductDs,
  GetIdeas,
  WishList,
  LoginPage,
  AboutUs,
  DeliveryAndPayment,
  Contacts,
  Discounts,
} from '../../pages/indexPages';
import { RootLayout } from '../../components/RootLayout/RootLayout';
import { loader as itemLoader } from '../CatalogPage/Catalog';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path='catalog' element={<Catalog />} />
      <Route path='bedrooms' element={<Catalog />} />
      <Route path='kitchens' element={<Catalog />} />
      <Route path='bathrooms' element={<Catalog />} />
      <Route path='livingrooms' element={<Catalog />} />
      <Route path='clothing' element={<Catalog />} />
      <Route path='newin' element={<Catalog />} />
      <Route path='accessories' element={<Catalog />} />
      <Route path='shoes' element={<Catalog />} />
      <Route path='faceandbody' element={<Catalog />} />
      <Route path='sportswear' element={<Catalog />} />
      <Route path='trendingnow' element={<Catalog />} />
      <Route
        path='catalog/:productId'
        element={<Product />}
        loader={itemLoader}
      />
      <Route path='payment' element={<Payment />} />
      <Route path='getIdeas' element={<GetIdeas />} />
      <Route
        path='getIdeas/uploaded'
        element={<ProductDs isUploaded={true} />}
      />
      <Route path='about-us' element={<AboutUs />} />
      <Route path='getIdeas/:productDs' element={<ProductDs />} />
      <Route path='wishlist' element={<WishList />} />
      <Route path='*' element={<NotFound />} />
      <Route path='notFound' element={<NotFound />} />
      <Route path='/personalCabinet' element={<LoginPage />} />
      <Route path='/delivery-and-payment' element={<DeliveryAndPayment />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/discounts' element={<Discounts />} />
    </Route>
  )
);

export function App() {
  return <RouterProvider router={router} />;
}
