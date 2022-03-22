import { useForm } from "react-hook-form";
import styled from "styled-components";
import ax from 'axios';

import { useState, useEffect } from 'react';

const Form = styled.form`
  max-width: 250px;
`;
const FormInput = styled.input`
  width: 100%;
  padding: 10px 10px;
  font-size: 15px;
  margin-top: 5px;
`;

const FormCont = styled.div`
  display: flex;
  justify-content: center;
`;
const Label = styled.label``;

const Button = styled.button`
  background: #7b9582;
  border: none;
  width: 100%;
  padding: 15px;
  font-size: 16px;
  margin-top: 10px;
  color: white;
  letter-spacing: 2px;
  text-transform: uppercase;
  &:hover {
    background: #92be9e;
  }
`;
const Error = styled.p`
  color: red;
  font-style: italic;
  font-size: 13px;
`;

export default function SignUpForm(){
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  console.log(errors);
  console.log(watch());


  // const [singup, setSignin] = useState({});

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [username, setUsername] = useState("");

  // const handleOnSubmit = async(e) => {
  //   e.preventDefault();
  //   const response = await ax.post(
  //     'http://localhost:3000/signup', {
  //       method: 'POST',
  //       body: JSON.stringify({email,pass}),
  //       headers: {
  //         'Content-Type': 'application/json'
  //     }
  //     })
      
  //     const result = await response.json();
  //     if(result) {
  //       alert('Data saved successfully');
  //       setEmail('');
  //       setPass('');
  //       setUsername('');
  //     }
  // }

  function newUser() {
    fetch("http://localhost:3000/signup",{
      method:"post"
    }).then(async (r) => console.log(await r.json()))
  }
  
  // useEffect(()=>{
  //   fetch("http://localhost:3000/signup")
  //   .then((response)=>response.json())
  //   .then((responseJson) => {
  //     setSignin(responseJson.data);
  //   });
  // },[]);
  
//  let newUser = () => {
//   ax.post('http://localhost:3000/signup')
//   .then((response) => response.json())
//   .then((responseJson) => {
//     setEmail("");
//     setPass("");
//     setUsername("");
//   })
//  }


  return (
    <FormCont>
      <Form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <Label>
          Email Adress
          <FormInput
            {...register("email", {
              required: "Please provide a properly formated email address",
            })}
            placeholder="Email Adress"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </Label>
        <Error>{errors.email?.message}</Error>
        <Label>
          Username
          <FormInput
            {...register("username", {
              required: "Please provide an username",
            })}
            placeholder="Username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />
        </Label>
        <Error>{errors.username?.message}</Error>
        <Label>
          Password
          <FormInput
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum length is 6.",
              },
            })}
            placeholder="Password"
            value={pass}
            onChange={(e)=>setPass(e.target.value)}
          />
        </Label>
        <Error>{errors.password?.message}</Error>
        <Button onClick={newUser}>Sign Up</Button>
      </Form>
    </FormCont>
  );
}
