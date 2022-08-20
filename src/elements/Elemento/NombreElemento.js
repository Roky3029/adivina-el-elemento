import styled from 'styled-components'

const NombreElemento = styled.h2`
    font-weight: normal;
    width: fit-content;
    height: 50px;
    padding-bottom: 5px;
    margin-top: 100px;
    border-bottom: 2px solid #847d7d;

    @media screen and (max-width: 660px){
        margin-top: 0;
    }
`

export default NombreElemento
