import SignUpForm from "../comps/SignUpForm";
import styled from "styled-components";
import NavBar from "../comps/Navbar";

const Cont = styled.div`

  background:#F2F0EE;
  display:flex;
  flex-direction:column;
  align-items:center;
  
`
const Logo = styled.img`
  width:50%;
`
const Item = styled.div`
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
