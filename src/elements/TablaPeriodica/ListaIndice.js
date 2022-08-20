import styled from 'styled-components'

const ListaIndice = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    list-style-type: none;

    @media screen and (max-width: 1480px){
        flex-direction: row;
        margin-top: 130px;
        gap: 20px;
    }
`

export default ListaIndice
