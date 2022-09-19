import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import axios from 'axios';

export default function ProductsPage (){
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    function getProducts () {
        
        const promise = axios.get('http://localhost:4000/products');

        promise.catch((error) => console.log(error.message));

        promise.then( response => {
            setProducts(response.data);
        })

    }

    function goToProduct (id) {
        navigate(`/products/${id}`);
    }
    return(
        <>
         <ProductsMainPage>
            <div>
                {products.map((produt, index) => 
                <div onClick={() => goToProduct(produt._id)} key={index}>
                    <img src={produt.img} alt=''/>
                        <div>  
                            <h2>{produt.price}</h2>
                            <span>{produt.name}</span>

                        </div>
                                                    
                </div>)}
            </div>
            
         </ProductsMainPage>
        </>
    )
};

const ProductsMainPage = styled.div`
    display: flex;
    margin-top: 45px;
    padding-bottom: 25px;
    width: 85vw;
    background-color: #ffffff;
    border-right: 3px solid #6BB3F2;
    border-left: 3px solid #6BB3F2;

    & > div {
        display: flex;
        flex-wrap: wrap;
        background-color: #B3C8F2;
        border-radius: 5px;  
        margin: 10px;
        margin-bottom: -15px;

        span {
            margin-top: 10px;
            margin-bottom: 25px;
            font-size: px;
            color: #6BB3F2;
            font-weight: 700;
            text-decoration: none;
        }

        h2 {
            margin-top: 10px;
            margin-bottom: 25px;
            font-size: 20px;
            color: #F23322;
            font-weight: 700;
            text-decoration: none;
        }

        & > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #ffffff;
            box-shadow: 0.5px 0.5px 4px rgba(128, 128, 128, 0.6);
            width: 205px;
            margin: 10px;
            padding-top: 20px;
            border-left: 1px solid #6BB3F2;
            border-right: 1px solid #6BB3F2;
            border-bottom: 1px solid #6BB3F2;
            border-radius: 5px;

            div {
                width: 80%;
                margin: 10px 0;
                word-wrap: break-word;
            }

            img {
                width: 170px;
                border-radius: 25px;
                border: 1px solid #6BB3F2;
            }
        }
    }

    div {
        
    }

`;
