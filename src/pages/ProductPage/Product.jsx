import { useLoaderData, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import {
  Breadcrumbs,
  PdpSlider,
  SwitchTabs,
  ProductTags,
  ProductInfo,
  Reviews,
  Consultation,
  Goods,
  Portal,
  ModalWindow,
  ReplyForm,
} from '../../components/index';
import { reviewers } from '../../components/Review/ReviewData';
import { tabsData } from '../../components/SwitchTabs/tabsData';
import { productTagsData } from '../../components/ProductTags/ProductTags-data';
import { RecommendationSection } from '../../components/RecommendationSection/RecommendationSection';
import { setBodyOverflow } from '../../utils/general';
import { reviewerIcon } from '../../assets/images/indexImages';
import { catalogItems } from '../../components/CatalogSearchItems/CatalogSearchItemsData';
import { useSelector } from 'react-redux';

export function Product() {
  const modalInitialValue = {
    type: '',
    open: false,
  };

  const { language } = useSelector(
    ({ changeLanguageReducer }) => changeLanguageReducer
  );

  const location = useLocation();
  const data = useLoaderData();
  const [openReviewsModal, setOpenReviewsModal] = useState(modalInitialValue);
  const [allReviews, setAllReviews] = useState(reviewers);
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const value = openReviewsModal.open ? 'hidden' : 'unset';
    setBodyOverflow(value);
  }, [openReviewsModal]);
  const similarTabs = [
    {
      id: 0,
      name: 'Similar products',
      content: (
        <Goods items={catalogItems} type='similar' similarId={data.id} />
      ),
    },
    {
      id: 1,
      name: 'More from Wax',
      content: <Goods items={catalogItems} type='new' />,
    },
  ];

  const handleAddReview = ({ name, text, rate }) => {
    setAllReviews((prev) => [
      ...prev,
      {
        id: Date.now(),
        icon: reviewerIcon.src,
        alt: reviewerIcon.alt,
        name,
        tag: openReviewsModal.type,
        rate,
        text,
        date: new Date().toLocaleDateString().replace(/\//g, '.'),
        label: openReviewsModal.type,
        answers: [],
      },
    ]);
    setOpenReviewsModal(modalInitialValue);
  };

  const product = data.products[selectedProduct];

  useEffect(() => {
    setSlides(
      product.images.map((image, i) => ({
        src: image,
        alt: product.alt,
        id: i,
      }))
    );
  }, [selectedProduct, location.pathname]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className='product'>
      <Portal>
        <ModalWindow
          openModal={openReviewsModal.open}
          setOpenModal={setOpenReviewsModal}
          modalName={
            openReviewsModal.type === 'review'
              ? 'Leave feedback'
              : 'Ask question'
          }
          extraClass='catalog-modal reviews-modal'
        >
          {{
            content: (
              <div className='review-modal'>
                <ReplyForm
                  stars={openReviewsModal.type === 'review'}
                  submitReply={handleAddReview}
                  closeReply={() => setOpenReviewsModal(modalInitialValue)}
                />
              </div>
            ),
          }}
        </ModalWindow>
      </Portal>
      <div className='breadcrumbs'>
        <Breadcrumbs crumbs={location} />
      </div>
      <div className='wrapper product-wrapper'>
        <PdpSlider slides={slides} data={data} />
        <div className='product__description'>
          <ProductInfo
            data={data}
            setSelectedProduct={setSelectedProduct}
            selectedProduct={selectedProduct}
          />
          <SwitchTabs extraClass='product__tabs' tabs={tabsData} />
          <ProductTags data={productTagsData} />
          <RecommendationSection />
        </div>
      </div>
      <Reviews reviews={allReviews} setOpenModal={setOpenReviewsModal} />
      <Consultation />
      <SwitchTabs
        tabs={similarTabs}
        contentBackground='greyLight'
        extraClass='goods__controls'
      />
    </div>
  );
}
