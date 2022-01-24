import './MultiCheck.css';

import React from 'react';
import CheckBox from './components/CheckBox';

export type Option = {
  label: string,
  value: string
}

/**
 * Notice:
 * 1. There should be a special `Select All` option with checkbox to control all passing options
 * 2. If columns > 1, the options should be placed from top to bottom in each column
 *
 * @param {string} label - the label text of this component
 * @param {Option[]} options - options
 * @param {string[]} values - default checked option values
 * @param {number} columns - default value is 1
 * @param {Function} onChange - when checked options are changed,
 *                             they should be passed to outside
 */
export type Props = {
  label?: string,
  options: Option[],
  columns?: number,
  values?: string[]
  onChange?: (options: Option[]) => void,
}

const MultiCheck: React.FunctionComponent<Props> = (props): JSX.Element => {
  const { label, options, columns = 1, values = [], onChange } = props
  const width = `${100 / columns}%`

  return <div className='MultiCheck'>
    <div className='Label'>{label}</div>
    <div className='OptionsContainer'>
      <div className='OptionsContent'>
        {/* Select All Option */}
        <CheckBox
          width={width}
          checked={options.length === values.length}
          label='Select All'
          onChange={checked => {
            if (checked) {
              onChange && onChange(options)
            } else {
              onChange && onChange([])
            }
          }}
        />
        {/* Other Option */}
        {options.map(option => {
          return <CheckBox
            width={width}
            key={option.value}
            checked={values.includes(option.value)}
            label={option.label}
            onChange={checked => {
              const prevOptions: Option[] = []
              options.map(item => {
                if (values.find(val => val === item.value)) {
                  prevOptions.push(item)
                }
              })
              if (checked) {
                onChange && onChange([...prevOptions, option])
              } else {
                onChange && onChange(prevOptions.filter(item => item.value !== option.value))
              }
            }}
          />
        })}
      </div>
    </div>
  </div>
}

export default MultiCheck;
