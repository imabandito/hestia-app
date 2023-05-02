import { useState } from 'react';
import {
  Partners,
  Benefits,
  CategoryCard,
  About,
  HeroSection,
  ModalWindow,
  Portal,
  AccordionItem,
  ReviewSection,
  CategoriesHomeSection,
  SwitchTabs,
} from '../../components/index';
import {
  modalWindowCatalog,
  categories,
} from '../../assets/images/indexImages';
import { accordionsListData } from '../../components/AccordionItem/AccordionItemData';
import { commentData } from '../../components/Comment/CommentData';
import { goodsTabs } from '../../components/SwitchTabs/tabsData';
import { useSelector } from 'react-redux';

export function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [openCategoriesModal, setOpenCategoriesModal] = useState(false);

  const { language } = useSelector(
    ({ changeLanguageReducer }) => changeLanguageReducer
  );

  return (
    <>
      <HeroSection openModal={openModal} setOpenModal={setOpenModal} />
      <Portal>
        <ModalWindow
          openModal={openModal}
          setOpenModal={setOpenModal}
          modalName='Catalog'
          extraClass='catalog-modal'
        >
          {{
            content: (
              <div className='catalog-items'>
                {modalWindowCatalog.map((item, index) => (
                  <CategoryCard
                    key={index}
                    text={item.name}
                    src={item.type}
                    alt={item.alt}
                    path={item.path}
                  />
                ))}
              </div>
            ),
          }}
        </ModalWindow>
      </Portal>
      <SwitchTabs
        tabs={goodsTabs}
        contentBackground='greyLight'
        extraClass='goods__controls'
      />
      <Benefits />
      <About />
      <Partners />
      <Portal>
        <ModalWindow
          openModal={openCategoriesModal}
          setOpenModal={setOpenCategoriesModal}
          modalName='Categories'
          extraClass='categories-modal'
        >
          {{
            content: (
              <div className='categories-option'>
                {accordionsListData.map((accordionItemData) => (
                  <AccordionItem
                    accordion={accordionItemData}
                    key={accordionItemData.id}
                  />
                ))}
              </div>
            ),
          }}
        </ModalWindow>
      </Portal>
      <CategoriesHomeSection
        data={categories}
        setOpenCategoriesModal={setOpenCategoriesModal}
      />
      {commentData && (
        <ReviewSection commentData={commentData} commentsPerPage={2} />
      )}
    </>
  );
}
