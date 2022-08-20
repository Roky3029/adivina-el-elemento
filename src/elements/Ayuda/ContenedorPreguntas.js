import styled from 'styled-components'

const ContenedorPreguntas = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 70px;

    @media screen and (max-width: 700px){
        grid-template-columns: 1fr;
        gap: 20px;
    }
`

export default ContenedorPreguntas
