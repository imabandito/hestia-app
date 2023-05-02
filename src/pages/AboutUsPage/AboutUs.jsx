import React from 'react';
import { useLocation } from 'react-router-dom';
import { Breadcrumbs, Consultation, Topics } from '../../components';
import aboutUsHeroSection from '../../assets/images/aboutUsHeroSection.png';
import aboutUsNews1 from '../../assets/images/aboutUsNews1.png';
import aboutUsNews2 from '../../assets/images/aboutUsNews2.png';
import { Trans } from 'react-i18next';
import { useSelector } from 'react-redux';

export function AboutUs() {
  const location = useLocation();

  const { language } = useSelector(
    ({ changeLanguageReducer }) => changeLanguageReducer
  );
  return (
    <div className='about-us'>
      <div className='breadcrumbs'>
        <Breadcrumbs crumbs={location} />
      </div>
      <div className='about-us__hero-section'>
        <div className='about-us__hero-section-photo'>
          <img src={aboutUsHeroSection} alt='about us' />
        </div>
        <div className='about-us__hero-section-text-box background-fill_greyLight'>
          <div className='about-us-date'>
            <span>
              <Trans>Design</Trans>
            </span>
            &nbsp;
            <span>
              <Trans>December 2022</Trans>
            </span>
          </div>
          <h1 className='about-us-heading'>
            <Trans>A peek into the making of an HESTIA soft toy</Trans>
          </h1>
          <p>
            <Trans>
              The journey from idea to cuddly character is full of adventure for
              a soft toy at HESTIA, with all the trials and tribulations it
              entails. Danguole Gvaldiene tells us about the care and joy that
              goes into developing HESTIA soft toys, while Jessica Bondesson
              shares the delights of helping adults connect with their inner
              child to do so.
            </Trans>
          </p>
        </div>
      </div>
      <div className='wrapper about-us__news'>
        <div className='about-us__news-section'>
          <img src={aboutUsNews1} alt='news 1' />
          <div className='about-us-date about-us__news-date background-fill_greyLight'>
            <span>
              <Trans>Design</Trans>
            </span>
            &nbsp;
            <span>
              <Trans>22 December 2022</Trans>
            </span>
            <h1 className='about-us-heading'>
              <Trans>Designing a small space kitchen to make your own</Trans>
            </h1>
          </div>
        </div>
        <div className='about-us__news-section'>
          <img src={aboutUsNews2} alt='news 2' />
          <div className='about-us-date about-us__news-date background-fill_greyLight'>
            <span>
              <Trans>Design</Trans>
            </span>
            &nbsp;
            <span>
              <Trans>08 December 2022</Trans>
            </span>
            <h1 className='about-us-heading'>
              <Trans>
                HESTIA and Sonos launch the new SYMFONISK floor lamp speaker
              </Trans>
            </h1>
          </div>
        </div>
      </div>
      <div className='about-us__our-vision wrapper'>
        <h1>
          <Trans>
            Our vision is to create a better everyday life for the many people.
            On this site you can discover exactly what this means and find out
            who we are, what we do and what we stand for.
          </Trans>
        </h1>
      </div>
      <Consultation />
      <Topics />
    </div>
  );
}
