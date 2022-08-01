import styled from 'styled-components'

const ButtonSwitch = styled.button`
    border: none;
    padding: 20px;
    background: #f18377;
    border-radius: 10px;
    font-size: 16px;
    transition: all .3s;

    &:hover{
      transform: scale(1.05);
      font-size: 18px;
    }

    &:focus{
      transform: translateY(-1px);
    }
`

export default ButtonSwitch
