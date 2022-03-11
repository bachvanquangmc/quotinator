import React, { useState } from 'react';
import styled from 'styled-components';

const MainCont = styled.div`
    display: flex;
    flex-direction: column;
    background: #F8F8F8; 
    border: 1px solid #000;
    border-radius: 10px;
    padding: 25px;
    margin: 15px;

    /* width: 100%;
    position: absolute;
    top: 20px;
    left: 0px;
    z-index: 1; */
`;

const ChatContRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;

`;

const ChatContLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

`;

const ChatBox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center ;
    width: 45%;
    min-height: 50px;
    background: ${props => props.bgColor};
    font-size: 16px;
    line-height: 25px;
    border-radius: 10px;
    padding: 18px;
    margin-bottom: 15px;
    
`;

const FormCont = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 50px;

`;

const Input = styled.input`
    display: flex;
    width: 100%;
    height: 40px;
    background: #FFF;
    border: 1px solid #000;
    border-radius: 20px;
    padding: 10px;
`;

const Chat = ({
    bgColor = "#ACBF98",
    text = "something",
    onClick = () => {}
}) => {
    return (
        <MainCont>
            <ChatContRight>
                <ChatBox bgColor={bgColor}>
                    {text}
                </ChatBox>
            </ChatContRight>
            <ChatContLeft>
                <ChatBox bgColor="#9CA6C9">
                    {text}
                </ChatBox>
            </ChatContLeft>

            <FormCont>
                <Input type='text' placeholder='Start a chat' />
            </FormCont>
        </MainCont>
    )
}

export default Chat;