import styled from 'styled-components'

const ResetearButton = styled.button`

    height: 50px;
    width: 200px;
    font-size: 16px;
    border: 3px solid transparent;
    background: #00ffc5;
    border-radius: 10px;
    margin-top: 20px;
    transition: all .3s;
    z-index: 100000;

    &:hover{
        cursor: pointer;
        border: 3px solid #007cff;
    }
`

export default ResetearButton
