import styled from 'styled-components'

const Centrador = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    @media screen and (max-width: 1480px){
        flex-direction: column;
    }
`

export default Centrador
