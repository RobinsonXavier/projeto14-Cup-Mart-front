import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import axios from 'axios';


export default function Product () {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    function getProducts () {
        
        const promise = axios.get('http://localhost:4000/products');

        promise.catch((error) => console.log(error.message));

        promise.then( response => {
            showSomeProducts(response)
        })

    }

    function showSomeProducts (response) {
        const arr= [];
        for (let i = 0; i < 9; i++) {
            arr.push(response.data[i])      
        }
        setProducts(arr)
    }

    function goToProduct (id) {
        navigate('/products');
    }

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
            
        },
        {
            price: 'R$ 109,89',
            img: 'https://static.netshoes.com.br/produtos/chuteira-campo-nike-phantom-gt-academy-df/08/HZM-3949-108/HZM-3949-108_zoom1.jpg?ts=1615299275',
            
        },
        {
            price: 'R$ 109,89',
            img: 'https://static.netshoes.com.br/produtos/chuteira-campo-nike-phantom-gt-academy-df/08/HZM-3949-108/HZM-3949-108_zoom1.jpg?ts=1615299275',
            
        },
        {
            price: 'R$ 109,89',
            img: 'https://static.netshoes.com.br/produtos/chuteira-campo-nike-phantom-gt-academy-df/08/HZM-3949-108/HZM-3949-108_zoom1.jpg?ts=1615299275',
            
        },
        {
            price: 'R$ 109,89',
            img: 'https://static.netshoes.com.br/produtos/chuteira-campo-nike-phantom-gt-academy-df/08/HZM-3949-108/HZM-3949-108_zoom1.jpg?ts=1615299275',
            
        }
    ];
    
    return (
        <>
            <ProductPage>
                {products.map((produt, index) => {
                    return <div onClick={() => goToProduct(produt._id)} key={index}>
                                <img src={produt.img} alt=''/>
                                <span>{produt.price}</span>
                            </div>
                })}
            </ProductPage>
        </>
    )
};

const ProductPage = styled.div `
    display: flex;
    margin-left: 120px;

    span {
        margin-top: 10px;
        margin-bottom: 25px;
        font-size: 26px;
        color: #ffffff;
        -webkit-text-stroke: 0.5px #6BB3F2;
        font-weight: 700;
        text-decoration: none;
    }
    
    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 120px;
        margin: 10px;
        padding-top: 20px;
        border-left: 1px solid #6BB3F2;
        border-right: 1px solid #6BB3F2;

        img {
            width: 100px;
            border-radius: 25px;
            border: 1px solid #6BB3F2;
        }
        
    }
`;