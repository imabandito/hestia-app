import { Slider } from '../index';
import { YoutubeIcon } from '../UI/indexIcon';

export function PdpSlider({ data, slides }) {
  return (
    <div>
      <div className='pdp-slider' data-testid='pdp-slider'>
        <Slider
          slides={slides}
          dotType='black'
          slideExtraClass='pdp-slide-position'
          isAuto={true}
        />
      </div>
      <div className='video-link'>
        <a target='_blank' href={data.videoLink}>
          <YoutubeIcon />
          Video
        </a>
      </div>
    </div>
  );
}
