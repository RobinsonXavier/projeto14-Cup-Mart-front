import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import axios from "axios";
import "./style.css"

export default function Topbar (){

     const { User } = useContext(UserContext)
     const [userNotLoggedIn, setUserNotLoggedIn] = useState(true);
     const [userName, setUserName] = useState("");

     useEffect(()=>{
         async function userIsLoggedIn(){
             try {
                 const requisition = await axios.get('http://localhost:4000/checkout', {
                    headers: {
                        "authorization": `Bearer ${User.token}`
                    }
                });
                setUserName(requisition.data.name)
            } catch (error) {
                setUserNotLoggedIn(!userNotLoggedIn)
            }
        }
        userIsLoggedIn();
    }, [])

    function RenderNameUser(){
        if(!userNotLoggedIn){
            return(
                <div>
                    <Link to={"/login"}>
                        <div>
                            <p>Fazer Login</p>
                        </div>
                    </Link>
                </div>
            )
        }
        return(
            <div>
                <p>Olá, {userName}</p>
            </div>
        )
    };


    return(
            <Conteiner> 
                <div>
                    <Link to={"/"}>
                        <div className="Logo">
                            <h1>W-Cup Store</h1>   
                        </div>
                    </Link>
                    <RenderNameUser/> 
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
z-index: 2;

width:100%;
heigth: 40px;

display:flex;
flex-direction: column;
align-items: center
padding-top:10px;    
align-items: center;


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