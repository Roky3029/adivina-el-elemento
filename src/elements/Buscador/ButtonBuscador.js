import styled from 'styled-components'

const ButtonBuscador = styled.button`
    padding: 15px;
    border: none;
    background-color: #e1a377;
    border-radius: 30px;
    margin-top: 40px;
    transition: all .3s;

    &:hover{
      transform: scale(1.1);
      -webkit-transform: scale(1.1);
    }

    &:active{
      transform: translateY(1px);
    }
`

export default ButtonBuscador
