import SignUpForm from "../comps/SignUpForm";
import styled from "styled-components";
import NavBar from "../comps/Navbar";

const Cont = styled.div`
  max-width:390px;
  min-height:844px;
  background:#F2F0EE;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  
`
const Logo = styled.img`
  width:50%;
`
const Item = styled.div`
  // background:red;
  // flex-grow:1;
  width:100%;
` 

export default function SignUp() {
  return (

      <Cont>
        <Item>

        <NavBar/>
        </Item>
        <Item>

        <Logo src={"/logo.svg"}/>
        </Item>
        <Item>

      <SignUpForm/>
        </Item>

      </Cont>
  )
}
