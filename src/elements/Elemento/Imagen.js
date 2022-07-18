import styled from 'styled-components'

const Imagen = styled.img`
    box-shadow: 0px 0px 19px -6px rgba(0,0,0,0.5);
    width: 500px;
    height: 500px;
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 20px;

    @media screen and (max-width: 1000px) {
        margin-left: 0;
    }
`

export default Imagen
