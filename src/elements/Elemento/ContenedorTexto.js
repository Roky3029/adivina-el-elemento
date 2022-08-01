import styled from 'styled-components'

const ContenedorTexto = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    background-color: #f7ddd2;
    border-radius: 30px;
    box-shadow: 0px 0px 19px -6px rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 890px){
        padding: 0 0 40px 0
    }
`

export default ContenedorTexto
