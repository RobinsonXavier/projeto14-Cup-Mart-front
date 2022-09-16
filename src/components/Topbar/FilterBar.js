import styled from "styled-components"
export default function FilterBar (){
    return(
        <Conteiner>
            <div>
                <input className="search" type="text" placeholder="Pesquisar" />
            </div>
            <div>
                <div className="button"><p>Brasil</p></div>
                <div className="button"><p>Portugal</p></div>
                <div className="button"><p>Argentina</p></div>
                <div className="button"><p>Alemanha</p></div>
            </div>
        </Conteiner>
    )
}
const Conteiner = styled.div`
position: fixed;
left: 0;
top: 40px;
z-index: 1;

width:100%;

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