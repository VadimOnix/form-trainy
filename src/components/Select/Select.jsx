import React, { useMemo, useState } from 'react'
import styled from 'styled-components/macro'
import { InputWrapper, FieldWrapper } from '../Input/Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import SelectOption from '../SelectOption/SelectOption'

const ComponentWrapper = styled(InputWrapper)`
  position: relative;
`

const SelectWrapper = styled(FieldWrapper)`
  position: relative;
  cursor: pointer;
  & > input {
    cursor: pointer;
  }
`

const ArrowWrapper = styled.div`
  position: absolute;
  right: 20px;

  transform: ${(props) => (props.open ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease-in-out;
  width: 11px;
`

const ListWrapper = styled.div`
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  padding: 6px 0;
  position: absolute;
  background: #ffffff;
  margin-top: 6px;
  border-radius: 8px;
  max-width: 100%;
  min-width: 100%;
  min-height: 20px;
  box-shadow: 0px 3px 8px #00000026;
`

const Select = ({ children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [valueOfSelect, setValueOfSelect] = useState('')

  const toggleSelect = () => setIsOpen(!isOpen)

  const options = useMemo(
    () =>
      children.map((child) => (
        <SelectOption {...child.props} key={child.props.value} onClick={() => setValueOfSelect(child.props.value)}>
          {child.props.children}
        </SelectOption>
      )),
    [children]
  )

  return (
    <ComponentWrapper>
      <SelectWrapper onClick={toggleSelect}>
        <input {...props} value={valueOfSelect} type="text" placeholder="Select country" readOnly />
        <ArrowWrapper open={isOpen}>
          <FontAwesomeIcon icon={faAngleDown} />
        </ArrowWrapper>
      </SelectWrapper>
      <ListWrapper isVisible={isOpen}>{options}</ListWrapper>
    </ComponentWrapper>
  )
}

export default Select
