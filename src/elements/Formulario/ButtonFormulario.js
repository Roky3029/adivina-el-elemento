import styled from 'styled-components'

const ButtonFormulario = styled.button`
    padding: 16px 48px;
    background: none;
    color: #131313;
    font-size: 20px;
    cursor: pointer;
    position: relative;
    transition: all .3s;
    border-radius: 1px;
    margin-left: 30px;
    background: #5fabb2;
    outline: none;
    border: none;

    &:hover{
        background-color: #28f7eb;
        transition-delay: .3s;
    }

    &::before, &::after{
        --offset: 2px;
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        transition: all .3s;
        opacity: 0;
    }

    &::before{
        border-top: 2px solid #28f7eb;
        border-left: 2px solid #28f7eb;
        top: var(--offset);
        left: var(--offset);
    }

    &::after{
        border-bottom: 2px solid #28f7eb;
        border-right: 2px solid #28f7eb;
        bottom: var(--offset);
        right: var(--offset);
    }

    &:hover::before, &:hover::after{
        width: calc(100% - 6px);
        height: calc(100% - 6px);
        opacity: 1;
    }

    @media screen and (max-width: 560px) {
        margin: 30px 30px;
    }
`

export default ButtonFormulario
