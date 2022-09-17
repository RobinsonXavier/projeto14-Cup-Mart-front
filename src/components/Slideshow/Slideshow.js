import React from 'react';
import styled from "styled-components";
import {Fade} from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';

import cheer from '../../assets/images/cheerTeam.jpg';
import wCupProgram from '../../assets/images/programWCup.jpg';

export default function Slideshow() {
    return(
        <>
            <SliderGroup>
                <Fade>
                    <SlidePage>
                        <img src={cheer} alt='' />
                        <span>Austria surpreende no jogo contra Argentina</span>
                        <DegradeDiv>
                        </DegradeDiv>
                    </SlidePage> 
                    <SlidePage>
                        <img src={wCupProgram} alt='' />
                        <span>Confira a programação da copa e não perca o jogo do seu time</span>
                        <DegradeDiv>
                        </DegradeDiv>
                    </SlidePage>         
                </Fade>
            </SliderGroup>
        </>
    )
};

const SliderGroup = styled.div `
    box-sizing: border-box;
    width: 500px;
    height: 101%;
    position: relative;
    border: 5px solid #B3C8F2;
    border-radius: 5px;
    margin: 10px;
`;

const SlidePage = styled.div `
    box-sizing: border-box;
    border-radius: 5px;
    img {
        box-sizing: border-box;
        position: relative;
        max-width: 100%;
        border-radius: 5px;
    }

    span {
        position: absolute;
        color: #ffffff;
        bottom: 10px;
        left: 5px;
        font-weight: 700;
        font-size: 22px;
        -webkit-text-stroke: 0.5px #6BB3F2;
        text-decoration: double;
        z-index: 2;
    }
    
`;

const DegradeDiv = styled.div `
    position: absolute;
    box-sizing: border-box;
    border-radius: 5px;
    width: 500px;
    height: 100%;
    top: 0px;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
    z-index: 1;

    span {
        position: absolute;
        color: #B3C8F2;
        bottom: 10px;
        left: 5px;
        font-weight: 700;
        font-size: 22px;
        -webkit-text-stroke: 0.5px #6BB3F2;
        text-decoration: double;
    }
`;
