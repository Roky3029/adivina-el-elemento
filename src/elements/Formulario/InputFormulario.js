import styled from 'styled-components'

const InputFormulario = styled.input`
    outline: none;
    border-radius: 10px;
    border: 3px solid transparent;
    transition: all .3s ease;
    font-size: 24px;
    padding: 10px;

    @media screen and (max-width: 560px) {
        width: 300px;
        height: 50px;
    }
`

export default InputFormulario
