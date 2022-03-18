import LoginForm from "../comps/LoginForm";
import styled from "styled-components";
import NavBar from "../comps/Navbar";
import Header from "../comps/Header";
import { useTheme } from "../utils/provider"
import {global_theme } from '../utils/variables'
import { useState, useEffect } from 'react';

const Cont = styled.div`
  height:100vh;
  // background:#F2F0EE;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  
`
const Logo = styled.img`
  width:200px;
   filter: ${props => props.filter};
`
const Item = styled.div`
  width:100%;
  height:100%;
  // background:red;
  display:flex;
  justify-content:center;
  margin-bottom:10px;
` 

export default function Login() {
    const {theme, setTheme} = useTheme()

    const [user, setUser] = useState({});

    useEffect(()=>{
      fetch("http://localhost:3000/login")
      .then((response) => response.json())
      .then((responseJson) => {
        setUser(responseJson.data);
      });
    },[])

    let showUser = () => {
      
    }
  return (

      <Cont>
        <Item>

        <NavBar/>
        </Item>
        <Item>

        <Logo filter={
            global_theme[theme].filter
          } src={"/logo.svg"}/>
        </Item>
        <Item>
          <Header header="“Quotinator”"/>
        </Item>
        <Item>

      <LoginForm 
        onClick={showUser}
      />
        </Item>

      </Cont>
  )
}
