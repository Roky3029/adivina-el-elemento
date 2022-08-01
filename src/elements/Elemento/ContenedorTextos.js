import styled from 'styled-components'

const ContenedorTextos = styled.div`
    margin-top: 200px;
    margin-bottom: 50px;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 400px;
    gap: 30px;

    @media screen and (max-width: 890px){
        grid-template-columns: 1fr;
        margin-top: 40px;
    }
`

export default ContenedorTextos
