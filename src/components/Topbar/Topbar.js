import styled from "styled-components";
import { Link } from "react-router-dom";
import "./style.css"

export default function Topbar (){
    return(
        <Container>  
            <div>
                <h1>W-Cup Store</h1>
            </div>
            <div class="pesquisa">
                <input type="text" placeholder="Pesquisar" />
            </div>
            <div>
                <p>Usuario/Login</p>
            </div>
            <div>
                <ion-icon name="cart-outline"></ion-icon>    
            </div>         
        </Container>
    )
}
const Container = styled.div`
    width:100%;
    height:60px;

    display:flex;
    align-content: center;
    align-items: center;
    justify-content: space-evenly;


    background-color:#84D904;

`
