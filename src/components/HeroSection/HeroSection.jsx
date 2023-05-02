import { useEffect } from 'react';
import { Slider } from '../Slider/Slider';
import { Button } from '../UI/Buttons/Button';
import { candles } from '../../assets/images/indexImages';
import { Categories } from '../Categories/Categories';
import { categoriesData } from '../Categories/CategoriesDataHero';
import { setBodyOverflow } from '../../utils/general';

export function HeroSection({ openModal, setOpenModal }) {
  useEffect(() => {
    const value = openModal ? 'hidden' : 'unset';
    setBodyOverflow(value);
  }, [openModal]);

  return (
    <div className='wrapper'>
      <div className='hero-section' data-testid='heroSection'>
        <Button
          text='Catalog'
          size='large'
          icon='squares'
          extraClass='hero-section'
          onClick={() => setOpenModal(true)}
        />
        <div className='wrapper wrapper__hero-inner'>
          <Slider slides={candles} />
          <Categories data={categoriesData} />
        </div>
      </div>
    </div>
  );
}
