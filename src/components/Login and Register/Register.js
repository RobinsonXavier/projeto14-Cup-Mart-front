import styled from "styled-components"
import { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import "./style.css"

export default function Register () {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [endress, setEndress] = useState("");
    const [city, setCity] = useState("");
    const [endressNumber, setEndressNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    async function registerValidation (event){
        event.preventDefault();

        if(confirmPassword !== password){
            return alert('As senhas não são iguais. Tente novamente.')

        }

        const editedName = name.toLowerCase().replace(/(?:^|\s)\S/g, function(a) {
            return a.toUpperCase();
        })

        const validation={
            email: email,
            password: password,
            name: editedName,
            endress: endress,
            city: city,
            endressNumber: endressNumber
        }

        if (validation){
            navigate('/login')
        }
    }

    return(

        <Container>
            <div className="areaForms">
                <form onSubmit={registerValidation}>
                    <input type="text" placeholder="Nome" required onChange={e => setName(e.target.value)}/>
                    <input type="email" placeholder="Email" required onChange={e => setEmail(e.target.value)}/>
                    <input type="text" placeholder="Endereço" required onChange={e => setEndress(e.target.value)}/>
                    <div className="infoEndress">
                        <input className="cityInput" type="text" placeholder="Cidade" required onChange={e => setCity(e.target.value)}/>
                        <input className="endressNumberInput" type="text" placeholder="Número" required onChange={e => setEndressNumber(e.target.value)}/>
                    </div>
                    <input type="password" placeholder="Senha" required onChange={e => setPassword(e.target.value)}/>
                    <input type="password" placeholder="Confirme a Senha" required onChange={e => setConfirmPassword(e.target.value)}/>
                    <button type="submit">Cadastrar</button>
                </form>
                <Link to={'/'}>
                    <p>Já tem uma conta? Entre agora!</p>
                </Link>
            </div>
        </Container>
    )
}

const Container = styled.div`
    height:100vh;
    padding:15px;
    display:flex;
    `