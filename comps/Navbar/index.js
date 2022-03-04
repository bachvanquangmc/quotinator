import styled from "styled-components";
import { useState } from "react";
import { useTheme } from "../../utils/provider"
import { global_theme } from "../../utils/variables";
import {router, useRouter} from 'next/router'
import { v4 as uuidv4 } from "uuid";


const NavCont = styled.nav`
  width:100%;
  height:4.5rem;
  display:flex;
  justify-content:space-between;
  padding:20px 0px 20px 20px;
  background-color:${props => props.navcolor};
`
const Ul = styled.ul`
  list-style:none;
  background:white;
  min-height:170px;
  max-width:13em;
  display:flex;
  align-items:center;
  flex-wrap:wrap;
  position:fixed;
  top:0;
  right:0px;
  transform: ${({open}) => open ? 'translateX(0%)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
`
const Li = styled.li`
  padding:10px 10px;
  transition: all 0.1s ease-in-out;
  opacity:${({open}) => open ? 1 : 0};
  color:black;
  cursor:pointer;
  // background:red;
  flex-basis:100%;
&:nth-child(1){
      margin-top:20px;
    }
&:nth-child(4){
      margin-bottom:20px;
    }
`

const Burger = styled.div`
  width:2rem;
  height:2rem;
  top:0px;
  left:350px;
  display:flex;
  justify-content:space-around;
  flex-flow:column nowrap;
  z-index:20;

  div{
    width:2rem;
    height:0.25rem;
    // background:${({open}) => open ? '#ccc' : '#333'};
    background:${props => props.menucolor};
    border-radius:10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1){
      transform:${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2){
      transform:${({open}) => open ? 'translateX(100%)' : 'translateX(0%)'};
      opacity:${({open}) => open ? 0 : 1}
    }
    &:nth-child(3){
      transform:${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`
const Icon = styled.img`
  width:20px;
  height:20px;
  margin-right:10px;
`

export default function NavBar({
  goBack
}){
  const [open, setOpen] = useState(false)
    const {theme, setTheme} = useTheme()
    const router = useRouter()
  return <NavCont navcolor={global_theme[theme].nav}>
    <div onClick={goBack}>
      Back
    </div>
    <div style={{cursor:"pointer"}} onClick={()=>{router.push('/')}}>
      Quotinator
    </div>

    <Burger menucolor={open ? 'black' :  global_theme[theme].menu} open={open} onClick={()=>setOpen(!open)}>
      <div></div>
      <div></div>
      <div></div>
    </Burger>

    <Ul open={open}>
      <Li onClick={()=>{router.push('/')}} open={open}><Icon src="/home.svg"/>  HOME</Li>
      <Li onClick={()=>router.push(`/saved/${uuidv4()}`)} open={open}><Icon src="/saved.svg"/> SAVED</Li>
      <Li onClick={()=>{router.push('/settings')}} open={open}><Icon src="/settings.svg"/> SETTINGS</Li>
      <Li onClick={()=>{router.push('/')}} open={open}><Icon src="/logout.svg"/> LOG OUT</Li>
    </Ul>
  </NavCont>
}