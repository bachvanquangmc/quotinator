import LoginForm from "../comps/LoginForm";
import styled from "styled-components";
import NavBar from "../comps/Navbar";

const Cont = styled.div`
  height:100vh;
  background:#F2F0EE;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  
`
const Logo = styled.img`
  width:200px;
`
const Item = styled.div`
  width:100%;
  height:100%;
  // background:red;
  display:flex;
  justify-content:center;
  margin-bottom:80px;
` 

export default function login() {
  return (

      <Cont>
        <Item>

        <NavBar/>
        </Item>
        <Item>

        <Logo src={"/logo.svg"}/>
        </Item>
        <Item>

      <LoginForm/>
        </Item>

      </Cont>
  )
}
