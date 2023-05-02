import React from 'react';

export function SizePicker({ sizes, onSizeChange = () => {} }) {
  return (
    <div className='size-picker'>
      <fieldset id='size-picker'>
        {sizes.map((size, index) => {
          return (
            <label
              data-testid='size-picker-label'
              key={index}
              className='size-picker__group'
            >
              <input
                defaultChecked={index === 0}
                data-testid={`size-${index}`}
                type='radio'
                name='size-picker'
                onClick={() => onSizeChange(index)}
              />
              <span>{`${size}cm`}</span>
            </label>
          );
        })}
      </fieldset>
    </div>
  );
}
