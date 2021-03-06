import React from 'react'
import { Helmet } from 'react-helmet'
import ContenedorIconos from '../elements/CommingSoon/ContenedorIconos'
import ContenedorSoon from '../elements/CommingSoon/ContenedorSoon'
import TituloSoon from '../elements/CommingSoon/TituloSoon'

const CommingSoon = () => {
  return (
    <>
      <Helmet>
        <title>Trabajando en ello... | AEE</title>
      </Helmet>

      <ContenedorSoon>
        <TituloSoon>Trabajando en ello...</TituloSoon>
        <ContenedorIconos>
          {/* <lord-icon
                    src="https://cdn.lordicon.com/pndvzexs.json"
                    trigger="loop"
                    delay="1000"
                    colors="primary:#121331,secondary:#66d7ee"
                    style="width:150px;height:150px">
                </lord-icon>
                <lord-icon
                    src="https://cdn.lordicon.com/pndvzexs.json"
                    trigger="loop"
                    delay="1000"
                    style={{ width: "175px", height: "175px" }}>
                </lord-icon> */}
        </ContenedorIconos>
      </ContenedorSoon>
    </>
  )
}

export default CommingSoon
