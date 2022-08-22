import styled from 'styled-components'

const ContenedorAyuda = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    margin-bottom: ${props => props.mbottom ? '100px' : '0'}
`

export default ContenedorAyuda
