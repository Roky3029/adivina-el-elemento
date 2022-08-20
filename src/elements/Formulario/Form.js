import styled from 'styled-components'

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    height: ${props => props.altura ?? 'auto'}
`

export default Form
