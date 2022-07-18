import styled from 'styled-components'

const Enlace404 = styled.a`
    text-decoration: none;
    color: #636666;

    &::after{
        display: block;
        content: '';
        border-bottom: solid 5px #1ca4a8;
        transform: scaleX(0);
        transition: transform 300ms ease-in-out;
    }

    &:hover::after{
        transform: scaleX(1);
    }
`

export default Enlace404
