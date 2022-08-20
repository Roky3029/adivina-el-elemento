import styled from 'styled-components'

const ContenedorElementos = styled.div`
    display: grid;
    grid-template-columns: repeat(18, 70px);
    grid-template-rows: repeat(10, 70px);
    gap: 2px;

    @media screen and (max-width: 1480px){
        grid-template-columns: repeat(18, 50px);
        grid-template-rows: repeat(10, 50px);
    }
    
    @media screen and (max-width: 960px){
        grid-template-columns: repeat(18, 40px);
        grid-template-rows: repeat(10, 40px);
        font-size: 12px;
    }

    @media screen and (max-width: 760px){
        grid-template-columns: repeat(18, 20px);
        grid-template-rows: repeat(10, 20px);
        font-size: 12px;
    }

    @media screen and (max-width: 415px){
        grid-template-columns: repeat(18, 15px);
        grid-template-rows: repeat(10, 15px); 
        font-size: 8px;
    }
`

export default ContenedorElementos
