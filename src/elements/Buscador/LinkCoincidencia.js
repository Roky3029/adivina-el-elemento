import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LinkCoincidencia = styled(Link)`
    text-decoration: none;
    color: rgba(0, 0, 0, .8);
    padding: 10px;
    font-size: 35px;
    padding: 20px;
    text-align: center;
    background: linear-gradient(#d0f7f3, #d0f7f3) padding-box,
                linear-gradient(45deg, #FBEE97, #ADEDD5) border-box;
    border: 5px solid transparent;
    border-radius: 50px;
    transition: all .3s;

    &:hover{
      background: linear-gradient(#FBEE97, #ADEDD5) padding-box,
                  linear-gradient(#FBEE97, #ADEDD5) border-box;
      transform: scale(1.1);
    }

    &:focus{
      transform: translateY(-1px);
    }
`

export default LinkCoincidencia
