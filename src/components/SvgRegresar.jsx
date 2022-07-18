import React from 'react'
import BtnRegresar from './../elements/Elemento/BtnRegresar'

const SvgComponent = () => {
  return (
    <BtnRegresar
      clipRule="evenodd"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.012 2c5.518 0 9.997 4.48 9.997 9.998 0 5.517-4.479 9.997-9.997 9.997s-9.998-4.48-9.998-9.997C2.014 6.48 6.494 2 12.012 2zm-1.523 6.21l-3.255 3.259a.748.748 0 000 1.061l3.254 3.258a.74.74 0 00.526.217.753.753 0 00.531-.221.748.748 0 00.003-1.057L9.571 12.75h6.693a.75.75 0 000-1.5H9.571l1.978-1.979a.754.754 0 00-.536-1.276c-.19 0-.38.071-.524.215z"
        fillRule="nonzero"
      />
    </BtnRegresar>
  )
}

export default SvgComponent
