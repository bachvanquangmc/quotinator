import { useForm } from "react-hook-form"
import styled from "styled-components"

const Form = styled.form`
  max-width:250px;
`
const FormInput = styled.input`
  width:100%;
  padding: 10px 10px;
  font-size:15px;
  margin-top:5px;
`

const FormCont = styled.div`
  display:flex;
  justify-content:center;
`
const Label = styled.label``

const Button = styled.button`
  background:#7B9582;
  border:none;
  width:100%;
  padding:15px;
  font-size:16px;
  margin-top:10px;
  color:white;
  letter-spacing:2px;
  text-transform:uppercase;
  &:hover{
    background:#92BE9E;
  }
  
`
const Error = styled.p`
  color:red;
  font-style: italic;
  font-size:13px;
`

export default function LoginForm(){
  const {register, handleSubmit, formState:{errors}, watch} = useForm()
  console.log(errors)
  console.log(watch())
  return <FormCont>
    <Form onSubmit={handleSubmit((data)=>{
      console.log(data)
    })}>
     <Label>Email Adress
        <FormInput {...register("email", {required:"Please provide a properly formated email address"})} placeholder="Email Adress"/>
      </Label>
      <Error>{errors.email?.message}</Error>
      <Label>Username
        <FormInput {...register("username", {required:"Please provide an username"})} placeholder="Username"/>
      </Label>
      <Error>{errors.username?.message}</Error>
      <Label>Password
        <FormInput {...register("password", {required:"Password is required", minLength:{
          value:6,
          message:"Minimum length is 6."
        }})} placeholder="Password"/>
      </Label>
      <Error>{errors.password?.message}</Error>
      <p>Forgot Password?</p>
      <Button>Login</Button>
      <p>Don't have an account yet? SignUp</p>
    </Form>
  </FormCont>
}