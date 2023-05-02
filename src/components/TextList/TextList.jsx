import cn from 'classnames';

export function TextList({ textData, extraClass }) {
  const textListClasses = cn('text-list', extraClass);

  return (
    <div className={textListClasses}>
      {textData.map((item, i) => (
        <p className='text-list__item' key={i}>
          {item}
        </p>
      ))}
    </div>
  );
}
