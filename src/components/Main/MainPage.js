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
            <TopMainPage>
                <Slideshow />
                <MainContent />
            </TopMainPage>
            <Products />
         </MainPageApp>
        </>
    )
}

const MainPageApp = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    width: 85vw;
    background-color: #ffffff;
    border-right: 3px solid #6BB3F2;
    border-left: 3px solid #6BB3F2;
`;

const TopMainPage = styled.div `
    display: flex;
    width: 100%;
    justify-content: space-between;
    box-sizing: border-box;
    height: 335px;
`;