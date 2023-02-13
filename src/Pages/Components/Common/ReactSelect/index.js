import React from 'react'
import Select, { components } from 'react-select'
import arrowDownIcon from '../../../../assets/images/arrowDownIcon.svg'

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <img src={arrowDownIcon} alt='icon' />
    </components.DropdownIndicator>
  )
}

const ReactSelect = ({
  placeholder,
  options,
  value,
  parentCallback,
  placeholderColor,
  backgroundColor,
  border,
  height,
  minHeight,
  minWidth,
  control,
  disabled,
}) => {
  const customStyles = {
    control: (base, state) => ({
      ...base,
      height: height ? height : 48,
      minHeight: minHeight ? minHeight : 48,
      backgroundColor: backgroundColor ? backgroundColor : '#F9F9F9',
      border: '1px solid #EDEDED',
      border: border ? border : '1px solid #EDEDED',
      padding: '0px 8px',
      minWidth: minWidth ? minWidth : '120px',
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: '#7B7B7B',
    }),
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: placeholderColor ? placeholderColor : '#353535',
      }
    },
  }
  const handleChange = (value) => {
    parentCallback(value)
  }

  return (
    <>
      <Select
        isDisabled={disabled}
        control={control}
        styles={customStyles}
        placeholder={placeholder}
        isClearable
        defaultValue={value}
        options={options}
        onChange={(e) => handleChange(e)}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator,
        }}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: '#1fc28f87',
            // primary: "#1fc28f"
            primary: 'gray',
          },
        })}
      />
    </>
  )
}

export default ReactSelect
