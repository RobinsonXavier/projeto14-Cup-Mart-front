import { Link } from "react-router-dom";
import styled from "styled-components";
import "./style.css"

export default function Topbar (){

    // const { personData } = useContext(PersonContext)
    // const [userNotLoggedIn, setUserNotLoggedIn] = useState(true);
    // const [userName, setUserName] = useState("");

    // useEffect(()=>{
    //     async function userIsLoggedIn(){
    //         try {
    //             const requisition = await axios.get('http://localhost:4000/checkout', {
    //                 headers: {
    //                     "authorization": `Bearer ${personData.token}`
    //                 }
    //             });
    //             setUserName(requisition.data.name)
    //         } catch (error) {
    //             setUserNotLoggedIn(!userNotLoggedIn)
    //         }
    //     }
    //     userIsLoggedIn();
    // }, [])

    // function RenderNameUser(){
    //     if(!userNotLoggedIn){
    //         return(
    //             <div>
    //                 <Link to={"/login"}>
    //                     <div>
    //                         <p>Fazer Login</p>
    //                     </div>
    //                 </Link>
    //             </div>
    //         )
    //     }
    //     return(
    //         <div>
    //             <p>Olá, {userName}</p>
    //         </div>
    //     )
    // };


    return(
            <Conteiner> 
                <div>
                    <Link to={"/"}>
                        <div className="Logo">
                            <h1>W-Cup Store</h1>   
                        </div>
                    </Link>
                    {/* <RenderNameUser/> */}
                    <Link to={"/login"}>
                        <div>
                            <p>Fazer Login</p>
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
z-index: 2;

width:100%;
heigth: 40px;

display:flex;
flex-direction: column;
align-items: center;
padding-top:10px;

background-color:#84D904;



    div{
        height:40px;
        width: 100%;
        max-width:1100px;
        display:flex;
        align-content: center;
        align-items: center;
        justify-content: space-between;

        div {
            color: #ffffff;

            p{
                font-size:18px;
            }
        }
    }


`