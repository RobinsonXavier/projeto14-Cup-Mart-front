import React from 'react';
import styled from "styled-components";

export default function MainContent () {
    return (
        <>
            <Content>
                <ContentTitle>
                    <span>Qual é o seu time do coração?</span>
                    <p>Adquira a camisa do seu time, e esteja preparado pra torcer nessa copa</p>
                </ContentTitle>
                <ContentItens>
                    <Shirts>
                        <img src={'https://cdn.shopify.com/s/files/1/0577/1247/6321/products/Brasil-Away-1.png?v=1625785811'} />
                        <span>Camisa do Brasil</span>
                    </Shirts>
                    <Shirts>
                        <img src={'https://images.tcdn.com.br/img/img_prod/638286/camisa_manga_longa_selecao_da_espanha_2020_uniforme_titular_torcedor_climalite_3639_1_20201213204905.jpg'} />
                        <span>Camisa da Espanha</span>
                    </Shirts>
                </ContentItens>
                
            </Content>

        </>
    )
};

const Content = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 338px;
    background-color: #B3C8F2;
    border-radius: 5px;  
    margin: 10px;
    
`;

const ContentTitle = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center !important;
    align-items: center;
    height: 80px;
    border-bottom: 3px solid #6BB3F2;
    span {
        font-size: 26px;
        color: #ffffff;
        -webkit-text-stroke: 0.5px #6BB3F2;
        font-weight: 700;
        text-decoration: none;
    }

    p {
        color: #ffffff;
        margin-top: 5px;
    }
`;

const Shirts = styled.div `
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        width: 200px;
        border-radius: 25px;
        border: 2px solid #6BB3F2;
    }

    span {
        color: #ffffff;
        bottom: 10px;
        left: 5px;
        font-weight: 700;
        text-decoration: double;
    }
`
const ContentItens = styled.div `
    display: flex;
    justify-content: space-around;
    width: 100%;
`;