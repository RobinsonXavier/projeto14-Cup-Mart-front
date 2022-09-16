import { Link } from "react-router-dom";
import styled from "styled-components";
import "./style.css"
export default function Topbar (){
    return(
            <Conteiner> 
                <div>
                    <Link to={"/"}>
                        <div className="Logo">
                            <h1>W-Cup Store</h1>   
                        </div>
                    </Link>
                    <Link to={"/login"}>
                        <div>
                            <p>Usuario/Login</p>
                        </div>
                    </Link>
                    <Link to ={"/cart"}>
                        <div>
                            <ion-icon name="cart-outline"></ion-icon>    
                        </div>      
                    </Link>
                </div>
            </Conteiner>
    )
}

const Conteiner = styled.div`
position: fixed;
left: 0;
top: 0;
z-index: 1;

width:100%;
heigth: 40px;

display:flex;
flex-direction: column;
align-items: center
padding-top:10px;

background-color:#84D904;

    div{
        height:40px;
        width: 100%;
        max-width:800px;
        display:flex;
        align-content: center;
        align-items: center;
        justify-content: space-evenly;
    }

`