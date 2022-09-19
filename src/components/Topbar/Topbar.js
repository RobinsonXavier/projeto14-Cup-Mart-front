import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import axios from "axios";
import "./style.css";

export default function Topbar (){

     const { user } = useContext(UserContext)
     const [userNotLoggedIn, setUserNotLoggedIn] = useState(true);
     const [userName, setUserName] = useState("");

     useEffect(()=>{
        async function userIsLoggedIn(){

            if (user){

            try {
                const requisition = await axios.get('https://git.heroku.com/cup-market.git/checkout', {
                   headers: {
                       "authorization": `Bearer ${user.token}`
                   }
               });
               
               setUserName(requisition.data.name)
               setUserNotLoggedIn(false)
               console.log(userName)
            } catch (error) {
                setUserNotLoggedIn(true)
            }};
        }

        userIsLoggedIn();
    }, [user])

    return(
            <Conteiner> 
                <div>
                    <Link to={"/"}>
                        <div className="Logo">
                            <h1>W-Cup Store</h1>   
                        </div>
                    </Link>
                    {userNotLoggedIn ? 
                        <div>
                            <Link to={"/login"}>
                                <div>
                                    <p>Fazer Login</p>
                                </div>
                            </Link>
                        </div>
                    :
                        <div>
                            <p>Olá, {userName}</p>
                        </div>

                    }
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
align-items: center;
padding-top:10px;    
align-items: center;
background-color:#84D904;

    div {
        height:40px;
        width: 100%;
        max-width:800px;
        display:flex;
        align-content: center;
        align-items: center;
        justify-content: space-evenly;
    }

`