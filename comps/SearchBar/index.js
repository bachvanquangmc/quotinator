import React from 'react';
import styled from 'styled-components';

const MainCont = styled.div`
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
`;

const Form = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    background-color: #ffffff;
    border: 1px solid black;
    height: 30px;
    border-radius: 15px;
    padding: 10px;
    width: 100%;
`;

const SearchIcon = styled.img`
    display: flex;
    width: 15px;
    height: 15px;
    margin-right: 5px;
`;

const Input = styled.input`
    display: flex;
    border: none;
    border-radius: 15px;
    width: 100%;
    color: #777777;

    ::placeholder {
        color: #777777;
    }

    &:focus{
        outline: none;
        width: 100%;
    }
`;

const SearchBar = ({
    onChange=()=>{}
}) => {
    return <MainCont onChange={onChange}>
        <Form>
            <SearchIcon src="/search-black.png"></SearchIcon>
            <Input type="search" placeholder="Search"></Input>
        </Form>
    </MainCont>
}

export default SearchBar;