import React from 'react';
import axios from "axios";

import styled from "styled-components";

import Slideshow from '../Slideshow/Slideshow';
import MainContent from '../MainContent/MainContent';
import Products from '../Products/Products';

export default function MainPage (){
    return(
        <>
         <MainPageApp>
            <MainPageLayer>
                <Slideshow />
                <MainContent />
            </MainPageLayer>
            <MainPageLayer2>
                <ProductSpan>Conheça nossos produtos.</ProductSpan>
                <Products />
            </MainPageLayer2>

         </MainPageApp>
        </>
    )
}

const MainPageApp = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 45px;
    width: 85vw;
    background-color: #ffffff;
    border-right: 3px solid #6BB3F2;
    border-left: 3px solid #6BB3F2;
`;

const MainPageLayer = styled.div `
    display: flex;
    width: 100%;
    justify-content: space-between;
    box-sizing: border-box;
    height: 335px;
    margin-bottom: 30px;
`;

const MainPageLayer2 = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    box-sizing: border-box;
    height: 335px;
    margin-bottom: 30px;
`;

const ProductSpan = styled.span `
        display: flex;
        justify-content: center;
        align-items: center;
        height: 45px;
        margin: 10px;
        margin-bottom: 25px;
        font-size: 26px;
        color: #ffffff;
        -webkit-text-stroke: 0.5px #6BB3F2;
        font-weight: 700;
        text-decoration: none;
        background-color: #B3C8F2;
        border-radius: 5px;  
`;