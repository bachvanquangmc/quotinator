import SignUpForm from "../comps/SignUpForm";
import styled from "styled-components";
import logo from "../public/logo.svg"

const Cont = styled.div`
  max-width:320px;
  min-height:630px;
  background:#F2F0EE;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  
`
const Logo = styled.img`
  width:50%;
`

export default function SignUp() {
  return (
    <Cont>
      <Logo src={"/logo.svg"}/>
     <SignUpForm/>

    </Cont>
  )
}
