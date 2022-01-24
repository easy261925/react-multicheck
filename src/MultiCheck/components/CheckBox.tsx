import React from 'react';
import './CheckBox.css'

/**
 * @param {boolean} checked - CheckBox is checked or not
 * @param {Function} onChange - pass the value when checked
 * @param {string} width - CheckBox component width percentage, default is 100%
 * @param {string} label - CheckBox component label
 * 
 */

type CheckBoxProps = {
  checked?: boolean
  onChange?: (checked: boolean) => void
  width?: string
  label?: string
}

const CheckBox: React.FC<CheckBoxProps> = (props) => {
  const { checked, onChange, width = '100%', label } = props;
  return <div className='OptionItem' style={{ width }}>
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => {
        const { checked } = e.target
        onChange && onChange(checked)
      }}
    />
    {label}
  </div>
}

export default CheckBox
