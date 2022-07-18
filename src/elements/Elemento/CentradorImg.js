import styled from 'styled-components'

const CentradorImg = styled.div`
    display: flex;
    width: 500px;
    height: 500px;

    @media screen and (max-width: 1000px){
      width: 100%;
      align-items: center;
      justify-content: center;
    }
`

export default CentradorImg
