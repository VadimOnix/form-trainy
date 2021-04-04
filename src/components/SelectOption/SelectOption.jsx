import React from 'react'
import styled from 'styled-components/macro'

const StyledOption = styled.option`
  white-space: normal;
  font-size: 14px;
  line-height: 32px;
  padding: 0 20px;
  cursor: pointer;

  &:hover {
    background: #f5f8fa;
  }
`

const SelectOption = ({ children, ...props }) => {
  return <StyledOption {...props}>{children}</StyledOption>
}

export default SelectOption
