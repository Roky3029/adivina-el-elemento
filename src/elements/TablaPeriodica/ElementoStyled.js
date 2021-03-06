import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ElementoStyled = styled(Link)`
    width: 70px;
    height: 70px;
    margin: 0;
    padding: 0;
    background-color: ${props => props.colorfondo};
    font-size: 20px;
    text-decoration: none;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${props => props.margintop};
    cursor: ${props => props.cursor};

    @media screen and (max-width: 1480px){
        width: 50px;
        height: 50px;
    }
    
    @media screen and (max-width: 960px){
        width: 40px;
        height: 40px;  
        font-size: 12px;
    }
`

export default ElementoStyled
