import React from 'react';
import styled from "styled-components";

export default function Product () {
    const prodArray = [
        {
            price: 'R$ 109,89',
            img: 'https://static.netshoes.com.br/produtos/chuteira-campo-nike-phantom-gt-academy-df/08/HZM-3949-108/HZM-3949-108_zoom1.jpg?ts=1615299275',
            
        },
        {
            price: 'R$ 352,99',
            img: 'https://carrefourbr.vtexassets.com/arquivos/ids/67241686-800-auto?v=637943549780770000&width=800&height=auto&aspect=true',
            
        },
        {
            price: 'R$ 85,99',
            img: 'https://www.bandeira1.com.br/lojas/00002028/prod/copa2022/kit-bandeiras-copa-2022.jpg',
            
        },
        {
            price: 'R$ 71,99',
            img: 'https://cdn.shopify.com/s/files/1/0626/0188/7986/products/HTB1k4ELNCzqK1RjSZFpq6ykSXXae.jpg?v=1657628669&width=1445',
            
        },
        {
            price: 'R$ 44,99',
            img: 'https://images-americanas.b2w.io/produtos/10510631/imagens/chapeu-bola-torcida-do-brasil-copa-do-mundo-qmm-005/10510626_1_large.jpg',
            
        }
    ];
    
    return (
        <>
            <ProductPage>
                {prodArray.map((produt, index) => {
                    return(
                        <div key={index}>
                            <img src={produt.img} alt=''/>
                            <span>{produt.price}</span>
                        </div>
                    )
                })};
            </ProductPage>
        </>
    )
};

const ProductPage = styled.div `
    display: flex;
    justify-content: center;
    
    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 120px;
        img {
            width: 100px;
            border-radius: 50%;
            border: 1px solid #6BB3F2;
        }
        
    }
`;