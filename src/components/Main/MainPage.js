import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

import Slideshow from '../Slideshow/Slideshow';
import MainContent from '../MainContent/MainContent';
import Products from '../Products/Products';

export default function MainPage (){
    const navigate = useNavigate();

    function toProducts() {
        navigate('/products');
    }
    return(
        <>
         <MainPageApp>
            <MainPageLayer>
                <Slideshow />
                <MainContent />
            </MainPageLayer>
            <MainPageLayer2>
                <ProductLayer>
                    <span>Conheça nossos produtos</span>
                    <div onClick={toProducts}>
                        <span>Loja</span>
                        <ion-icon name="bag-outline"></ion-icon>
                    </div>
                </ProductLayer>
                <Products />
            </MainPageLayer2>
         </MainPageApp>
        </>
    )
}

const MainPageApp = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 75px;
    margin-bottom: 15px;
    border-radius: 5px;
    width: 85vw;
    background-color: #ffffff;
    box-shadow: 0.5px 0.5px 4px rgba(128, 128, 128, 0.6);
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

const ProductLayer = styled.div `
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 45px;
        margin-bottom: 25px;
        background-color: #B3C8F2;
        border-radius: 5px;
        margin:0 10px;

        & > div {
            position: absolute;
            display: flex;
            align-items: center;
            right: 25px;
            border-radius: 5px;
            background-color: #F2E205;
            box-shadow: 0.5px 0.5px 4px rgba(128, 128, 128, 0.6);

        }

        span {
            font-size: 26px;
            color: #ffffff;
            -webkit-text-stroke: 0.5px #6BB3F2;
            font-weight: 700;
            text-decoration: none;
        }

        ion-icon {
            color: #ffffff;
        }
`;