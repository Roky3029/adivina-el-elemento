import styled from 'styled-components'

const TextoConfiguracion = styled.p`
    font-size: 32px;
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 100px 0 0 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: ${props => props.nogap ? '0' : '30px'};

    @media screen and (max-width: 370px){
        flex-direction: column;
    }
`

export default TextoConfiguracion
