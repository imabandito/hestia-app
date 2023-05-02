import cn from 'classnames';
import { useState } from 'react';
import { Button } from '../UI/Buttons/Button';

export function SwitchTabs({ tabs, extraClass, contentBackground }) {
  const [tabNum, setTabNum] = useState(0);
  const tabsClasses = cn('switch-tabs', extraClass);
  const handleTab = (num) => {
    setTabNum(num);
  };

  return (
    <div className={tabsClasses} data-testid='switch-tabs'>
      <div className='switch-tabs__controls-wrapper wrapper'>
        <div className='switch-tabs__controls'>
          {tabs?.map((tab, i) => (
            <Button
              key={tab.id}
              text={tab.name}
              type='none'
              extraClass={tabNum === i ? 'tab-active' : 'tab'}
              onClick={() => handleTab(i)}
            />
          ))}
        </div>
      </div>
      <div className={`background-fill_${contentBackground}`}>
        <div className='wrapper goods-wrapper'>
          <div className='switch-tabs__content'>{tabs?.[tabNum]?.content}</div>
        </div>
      </div>
    </div>
  );
}
