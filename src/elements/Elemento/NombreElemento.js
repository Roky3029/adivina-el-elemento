import styled from 'styled-components'

const NombreElemento = styled.h2`
    font-weight: normal;
    width: 300px;
    height: 50px;
    margin-top: 100px;

    @media screen and (max-width: 660px){
        margin-top: 0;
    }
`

export default NombreElemento
