import styled from 'styled-components'

const FooterStyled = styled.footer`
    width: 105%;
    position: relative;
    top: 600px;
    right: 10px;
    background: #65f89144;
    padding-top: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;

    @media screen and (max-width: 670px){
        top: ${props => props.noTop ? '1300px' : '600px'}
    }
`

export default FooterStyled
