import React from 'react'
import styled from 'styled-components'


const Cont = styled.div`
width:100%;

display:flex;
flex-direction:column;
justify-content:center;
// align-items:center;
flex-wrap: wrap;
gap:3rem;

`
const Item = styled.div`
background:red;
padding:3rem;

flex-basis:20%;
`
export const test = () => {
  return (
    <Cont>
      <Item>e 1500s, when an unknown p</Item>
      <Item>nly five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</Item>
      <Item>traset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Item>
      <Item>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Item>
      <Item></Item>
    </Cont>
  )
}

export default test
