import styled from "styled-components"
import { useContext, useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import "./style.css"
import UserContext from "../../contexts/UserContext";
import axios from "axios";

export default function Login(){

    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

    const { setUser }  = useContext(UserContext)

    const navigate = useNavigate();

    async function loginValidation (event) {
        event.preventDefault();

        const validation ={
			email: email,
			password: password
		};
        
        try {
            
            const requisition = await axios.post('http://localhost:4000/login', validation);

            if(requisition.error){
                return console.log(requisition.error.response.data)
            }
            
            setUser(requisition.data)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    };

    return(
        <Conteiner>
            <div className="areaForms">
                <form onSubmit={loginValidation}>
                    <input type="email" value={email} placeholder="Email" required onChange={e => setEmail(e.target.value)}/>
		            <input type="password" value={password} placeholder="Senha" required onChange={e => setPassword(e.target.value)}/>
		            <button type="submit">Entrar</button>
                </form>
                <Link to={'/register'}>
                    <p>Primeira vez? Cadastre-se!</p>
                </Link>
            </div>
        </Conteiner>
    )
}

const Conteiner = styled.div`
    height:100vh;
    padding:15px;
    display:flex;

`