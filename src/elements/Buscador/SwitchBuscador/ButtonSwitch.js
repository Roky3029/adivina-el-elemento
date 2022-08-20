import styled from 'styled-components'

const ButtonSwitch = styled.button`
    border: none;
    padding: 20px;
    background: ${props => props.isdisabled ? '#b9b3b3' : '#f18377'};
    border-radius: 10px;
    font-size: 16px;
    transition: all .3s;
    transform: ${props => props.isdisabled ? 'scale(0.8)' : 'none'};

    &:hover{
      ${props => props.isdisabled ? '' : 'transform: scale(1.1)'}
    }
`

export default ButtonSwitch
