import { Helmet } from 'react-helmet'
import { BsArrowReturnLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className='w-full min-h-screen'>
      <Helmet>
        <title>No encontrado | AEE</title>
      </Helmet>

      <div className='text-center text-2xl flex flex-col items-center justify-center'>
        <img className="w-96" src="/img/broken-flask.png" alt='Matraz roto' />
        <h2>¡Oh, vaya!</h2>
        <p>Parece que la página que has buscado no existe</p>
        <Link className="mt-36 flex items-center space-x-5 p-5 rounded bg-teal-200 transition-all hover:bg-teal-300 hover:scale-105" to='/'>
          <BsArrowReturnLeft />
          <span>Volver al inicio</span>
        </Link>
      </div>
    </div>
  )
}

export default Error404
