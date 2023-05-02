import { partnerImages } from './PartnersData';

export const Partners = () => (
  <div className='partners wrapper'>
    {partnerImages.map(({ partner, alt, site }, index) => (
      <div key={index}>
        <a href={site} target='_blank' rel='noreferrer'>
          {' '}
          <img src={partner} alt={alt} />
        </a>
      </div>
    ))}
  </div>
);
