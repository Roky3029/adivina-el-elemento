import styled from 'styled-components'

const ContenedorRegresar = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    gap: 10px;
    width: 250px;
    max-height: auto;
    margin: 0 150px;
    position: relative;
    z-index: 100;
    transition: all .3s;
    text-decoration: none;
    top: 15px;
    border-radius: 10px;
    
    p{
      transition: all .3s;
      transform: translateX(-30px);
      opacity: 0;
    }

    &:hover{
      background: #F5CCB0
    }
    
    &:hover p{
      transform: translateX(30px);
      opacity: 1;
    }

    @media screen and (max-width: 450px){
      margin: 0 100px;
      width: 230px;

      &:hover p {
        transform: translateX(15px);
      }
    }
`

export default ContenedorRegresar
