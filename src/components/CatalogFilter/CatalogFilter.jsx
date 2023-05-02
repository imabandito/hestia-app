import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import { ColorPicker, TextInput } from '..';
import { updateFilter } from '../../redux/actions/catalogSortingActions';
import { Trans } from 'react-i18next';

export function CatalogFilter({ extraClass, isOpen }) {
  const dispatch = useDispatch();
  const { filterOptions } = useSelector(
    ({ catalogSortingReducer }) => catalogSortingReducer
  );

  const filterClasses = cn(
    'catalog-filter',
    extraClass,
    isOpen && 'catalog-filter_open',
    'reply-form'
  );

  const colors = ['#C84A1E', '#FFE83E', '#9FA2A6', '#FFA800', 'any'];
  const widthAndHeight = {
    width: 20,
    height: 20,
  };

  const handleInputChange = ({ target: { value, id } }) => {
    dispatch(updateFilter({ [id]: value }));
  };

  function handleColorChange(_, color) {
    dispatch(updateFilter({ color: color }));
  }

  return (
    <div className={filterClasses}>
      <TextInput
        value={filterOptions.minPrice}
        placeholder='Min'
        id='minPrice'
        handleInputChange={handleInputChange}
        data-testid='min-price-input'
      />
      <TextInput
        value={filterOptions.maxPrice}
        placeholder='Max'
        id='maxPrice'
        handleInputChange={handleInputChange}
        data-testid='max-price-input'
      />
      <div className='catalog-filter-field'>
        <p className='catalog-filter-field__title'>
          <Trans>Rating from:</Trans>
        </p>

        <div className='catalog__select-box'>
          <select
            className='catalog-select'
            id='rate'
            value={filterOptions.rate}
            onChange={handleInputChange}
            data-testid='rate-selection'
          >
            <option data-testid='1' value='1'>
              1
            </option>
            <option data-testid='2' value='2'>
              2
            </option>
            <option data-testid='3' value='3'>
              3
            </option>
            <option data-testid='4' value='4'>
              4
            </option>
            <option data-testid='5' value='5'>
              5
            </option>
          </select>
        </div>
      </div>
      <div className='catalog-filter-field'>
        <p className='catalog-filter-field__title'>
          <Trans>Color</Trans>
        </p>
        <ColorPicker
          colors={colors}
          widthAndHeight={widthAndHeight}
          onColorChange={handleColorChange}
        />
      </div>
    </div>
  );
}
