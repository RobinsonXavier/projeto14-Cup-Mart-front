import React from 'react';
import axios from "axios";

import styled from "styled-components";

import Slideshow from '../Slideshow/Slideshow';

export default function MainPage (){
    return(
        <>
         <MainPageApp>
            <Slideshow />
         </MainPageApp>
        </>
    )
}

const MainPageApp = styled.div `
    margin-top: 50px;
    width: 85vw;
    background-color: blue;
`;

const slides = styled.div `

`;