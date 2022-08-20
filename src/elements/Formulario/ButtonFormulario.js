import styled from 'styled-components'

const ButtonFormulario = styled.button`
    padding: 16px 48px;
    background: none;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 10px;
    color: #131313;
    font-size: 20px;
    cursor: pointer;
    position: relative;
    transition: all .3s ease;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

    &::before, &::after{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #f7d47e;
        top: 0;
        left: 0;
        transition: clip-path .3s;
        z-index: -1;
        border-radius: 10px;
    }

    &::before{
        clip-path: circle(0 at 0 0);
    }

    &::after{
        clip-path: circle(0 at 100% 100%);
    }

    &:hover::before{
        clip-path: circle(100% at 0 0);
    }

    &:hover::after{
        clip-path: circle(100% at 100% 100%);
    }

    @media screen and (max-width: 560px) {
        margin: 30px 30px;
    }
`

export default ButtonFormulario
