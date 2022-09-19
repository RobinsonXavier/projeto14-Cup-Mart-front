import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from "styled-components";
import axios from 'axios';

export default function Checkout (){
    const [checkout, setCheckout] = useState({});

    useEffect(()=> {
        getCheckoutData();
    }, []);

    function getCheckoutData () {
        const promise = axios.get(`http://localhost:4000/checkout`);

        promise.catch((error) => console.log(error.promise));

        promise.then ((response) => setCheckout(response.data));
    }


    return(
        <>
            <CheckoutPage>
                <div>
                   
                </div>
            </CheckoutPage>
            </>
    )
}

const CheckoutPage = styled.div`
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


`;