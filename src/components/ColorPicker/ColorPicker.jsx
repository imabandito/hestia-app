export function ColorPicker({
  colors,
  onColorChange = () => {},
  widthAndHeight,
  name = ''
}) {
  return (
    <div className='color-picker'>
      <fieldset id='color-picker'>
        {colors.map((color, index) => {
          return (
            <label
              key={index}
              data-testid='color-picker-label'
              className='color-picker__group'
            >
              <input
                defaultChecked={index === 0}
                data-testid={`color-${index}`}
                type='radio'
                name={`color-picker-${name}`}
                style={{
                  background:
                    color === 'any'
                      ? `linear-gradient(313deg, rgba(56,108,255,1) 0%, rgba(176,255,196,1) 59%, rgba(255,53,0,1) 100%)
                  `
                      : color,
                  width: `${widthAndHeight.width}px`,
                  height: `${widthAndHeight.height}px`
                }}
                onClick={() => onColorChange(index, color)}
              />
            </label>
          );
        })}
      </fieldset>
    </div>
  );
}
