import React from 'react';
import styled from "styled-components";
import Product from './Product';

export default function Products () {
    return (
        <>
            <MainPageProducts>
                <Product />
            </MainPageProducts>
        </>
    )
};

const MainPageProducts = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 335px;
    background-color: #B3C8F2;
    border-radius: 5px;  
    margin: 10px;
    margin-bottom: -15px;
    overflow: hidden;
    overflow-x: scroll;
    position: relative;

    ::-webkit-scrollbar {
        height: 5px;
        width: 5px;
        border: 1px solid black;
    }

    ::-webkit-scrollbar-track {
        border-radius: 0;
        background-color: #ffffff;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 0;
        background-color: #6BB3F2;    
    }
    
`;