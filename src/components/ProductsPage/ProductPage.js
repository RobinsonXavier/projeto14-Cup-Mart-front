import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from "styled-components";
import axios from 'axios';

export default function ProductPage (){
    const navigate = useNavigate();
    const {productId} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        getProduct();
    }, []);

    function getProduct () {

        const promise = axios.get(`http://localhost:4000/products/${productId}`);

        promise.catch ( error => console.log(error.message));

        promise.then ( response => setProduct(response.data));
    }

    function goBackToProducts () {
        navigate('/products');
    }
    console.log(product);
    return(
        <>
         <SingleProductPage>
            <div>
                <img src={product.img} />
                <div>
                    <div>
                        <h1>{product.name}</h1>
                        <span>{product.description}</span>
                    </div>
                    <div>
                        <button>
                            Adicione ao carrinho
                            <ion-icon name="cart-outline"></ion-icon>    
                        </button>
                        <h2>{product.price}</h2>
                    </div>
                   
                </div>
                <div>
                    <p onClick={goBackToProducts}>Voltar para a lista</p>
                </div>
            </div>
         </SingleProductPage>
        </>
    )
};

const SingleProductPage = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 75px;
    width: 85vw;
    background-color: #ffffff;
    border-radius: 5px;

    & > div {
        display: flex;
        justify-content: space-around;
        margin: 25px;

        & > div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 50px;
            word-wrap: break-word;
        }

        h1 {
            text-decoration: none;
            margin-bottom: 10px;
        }

        h2 {
            margin-top: 10px;
            margin-bottom: 25px;
            font-size: 20px;
            color: #F23322;
            font-weight: 700;
            text-decoration: none;
        }

        p{  
            text-align: center;
            box-shadow: 0.5px 0.5px 4px rgba(128, 128, 128, 0.6);
            border-radius: 5px;
            padding: 5px;
        }
    }

    img {
        width: 400px;
        box-shadow: 0.5px 0.5px 4px rgba(128, 128, 128, 0.6);
        border-radius: 10px;
    }

`;