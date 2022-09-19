import { Link } from "react-router-dom";
import { useContext } from "react";
import styled from "styled-components";
import ProductsSelectedContext from "../../contexts/ProductsSelectedContext";



export default function Cart (){

    const { productsSelected, setProductsSelected } = useContext(ProductsSelectedContext)


    function removeProduct(index){
        const removeItem = productsSelected.filter(value => value[index] !== index)
        setProductsSelected(removeItem)
    }



    function RenderProducts(){
        return productsSelected.map((object, index) => (
            <div key={index}>
                <span className="product"><p>{object.name}</p></span>
                <span className="value"><p>{object.price}</p></span>
                <div className="button" onClick={removeProduct(index)}>
                    <ion-icon name="trash-outline"></ion-icon>
                </div>
            </div>
        ))
    };


    return(
        <Conteiner>
            <div>
                <h1>Carrinho de compras</h1>
            </div>
            <div>
                <RenderProducts/>
            </div>
            <Link to ={"/checkout"}>
                <div>
                    <h2>Finalizar a compra</h2>
                </div>
            </Link>
        </Conteiner>
    )
}

const Conteiner = styled.div`
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
`