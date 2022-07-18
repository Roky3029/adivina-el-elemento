import styled from 'styled-components'

const ElementoStyled = styled.h3`

    width: 150px;
    height: 150px;
    margin: 100px 100px 100px 100px;
    padding: 0;
    background-color: ${props => props.colorfondo};
    font-size: 50px;
    text-decoration: none;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 660px){
        margin: 100px 100px 0 100px;
    }
`

export default ElementoStyled
