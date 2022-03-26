import React from 'react'
import styled from 'styled-components'

const ButCont = styled.button`
  background-color: #EBD1D1;
  border: none;
  color: black;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: ${props=>props.display};
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 10px;
`

function PollAleart({
  onClick,
  display="none"
}) {
  return (
    <ButCont display={display} onClick={onClick}>Join the poll</ButCont>
  )
}

export default PollAleart