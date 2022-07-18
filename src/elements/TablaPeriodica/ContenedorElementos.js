import styled from 'styled-components'

const ContenedorElementos = styled.div`
    margin-top: 5px;
    width: 1260px;
    padding: 0;
    max-height: 630px;
    gap: 2px;
    display: grid;
    grid-template-columns: repeat(19, 70px);

    @media screen and (max-width: 1480px){
        grid-template-columns: repeat(19, 50px);
        width: 950px
    }

    @media screen and (max-width: 960px){
        grid-template-columns: repeat(19, 40px);
        width: 760px;
    } 
    
    @media screen and (max-width: 830px){
        grid-template-columns: repeat(8, 40px)
    } 
`

export default ContenedorElementos
