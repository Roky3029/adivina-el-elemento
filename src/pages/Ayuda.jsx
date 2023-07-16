import { Helmet } from 'react-helmet'
import PreguntasAyuda from '../components/arraysDatos/PreguntasAyuda'

const Ayuda = () => {
  return (
    <>
      <Helmet>
        <title>Ayuda - AEE</title>
      </Helmet>
      <div className='flex flex-col items-center justify-center pt-24 md:pt-0'>
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-2xl font-extrabold'>Ayuda</h2>

          <div className='w-4/5 grid grid-cols-1 md:grid-cols-2 gap-10 m-10'>
            {PreguntasAyuda.map((pregunta, index) => {
              return <div key={index} className='bg-amber-200 py-4 px-7 space-y-5 rounded-lg shadow-md'>
                <h2 className='text-center font-bold'>{pregunta.pregunta}</h2>
                <p>{pregunta.respuesta}</p>
              </div>
            })}
          </div>
        </div>
        <p className='text-gray-400 text-center'>
          Para mas informacion <a href="https://github.com/Roky3029/adivina-el-elemento/blob/main/README.md" className='block underline transition-all hover:text-gray-500'>visita el repositorio de github</a>
        </p>
      </div>
    </>
  )
}

export default Ayuda
