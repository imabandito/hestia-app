import './DashedLine.scss';

export function DashedLine({ startLength = 0 }) {
  return (
    <div className='dashed-line'>
      {[...Array(startLength)].map((val, i) => (
        <div className='dashed-line__item' key={i}></div>
      ))}
    </div>
  );
}
