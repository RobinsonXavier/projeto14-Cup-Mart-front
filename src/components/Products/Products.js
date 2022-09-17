import React from 'react';
import styled from "styled-components";
import Product from './Product';

export default function Products () {
    return (
        <>
            <MainPageProducts>
                <span>Destaques</span>
                <Product />
            </MainPageProducts>
        </>
    )
};

const MainPageProducts = styled.div `
    display: flex;
    justify-content: center;
    height: 335px;
    background-color: #B3C8F2;
    border-radius: 5px;  
    margin: 30px;
    margin-bottom: -15px;

    span {
        margin-top: 10px;
        font-size: 26px;
        color: #ffffff;
        -webkit-text-stroke: 0.5px #6BB3F2;
        font-weight: 700;
        text-decoration: none;
    }
    
`;