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
                <span className="product">{object.name}</span>
                <span className="value">{object.price}</span>
                <div className="button" onClick={removeProduct(index)}>
                    <ion-icon name="trash-outline"></ion-icon>
                </div>
            </div>
        ))
    };


    return(
        <Conteiner>
            <div>Carrinho de compras</div>
            <div>
            <RenderProducts/>
            </div>
            <Link to ={"/checkout"}>
            <div>
                Finalizar a compra
            </div>
            </Link>
        </Conteiner>
    )
}

const Conteiner = styled.div`
    margin-top:60px;

    height: 100%;
    width:100%;
    padding: 15px;

`