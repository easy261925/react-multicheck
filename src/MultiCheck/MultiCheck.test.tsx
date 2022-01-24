import React from 'react';
import { mount } from 'enzyme';
import MultiCheck, { Props } from './MultiCheck';

const options = [
  { label: 'label-1', value: 'option-1' },
  { label: 'label-2', value: 'option-2' },
  { label: 'label-3', value: 'option-3' },
  { label: 'label-4', value: 'option-4' },
]

/**
 * create MultiCheck Component
 */
function createMultiCheck(props = {}) {
  return <MultiCheck options={options}  {...props} />;
}

describe('MultiCheck', () => {
  describe('initialize', () => {
    it('renders the label if label provided', () => {
      const wrapper = mount(createMultiCheck({ label: 'test-label' }))
      expect(wrapper.find('.Label').text()).toEqual('test-label');
    });

    it('default checked with default values', () => {
      const defaultValues = ['option-1', 'option-2']
      const wrapper = mount(createMultiCheck({ values: defaultValues }))
      // Select All option
      expect(wrapper.find('input').at(0).prop('checked')).toBe(false);
      // Other options
      expect(wrapper.find('input').at(1).prop('checked')).toBe(true);
      expect(wrapper.find('input').at(2).prop('checked')).toBe(true);
      expect(wrapper.find('input').at(3).prop('checked')).toBe(false);
      expect(wrapper.find('input').at(4).prop('checked')).toBe(false);
    });
  });

  describe('should work basically', () => {
    it('check Select All option', () => {
      const handleChange = jest.fn()
      const wrapper = mount(createMultiCheck({ onChange: handleChange }));
      const checkboxes = wrapper.find('input');
      const selectAllOption = checkboxes.first();
      selectAllOption.simulate('change', { target: { checked: true } });
      expect(handleChange).toHaveBeenCalledWith(options);
      selectAllOption.simulate('change', { target: { checked: false } });
      expect(handleChange).toHaveBeenCalledWith([]);
    });

    it('Check the other options until all are selected', () => {
      const wrapper = mount(createMultiCheck({ values: ['option-1', 'option-2', 'option-3', 'option-4'] }));
      const checkboxes = wrapper.find('input');
      checkboxes.map(checkbox => expect(checkbox.prop('checked')).toBe(true));
    });
  });
});
