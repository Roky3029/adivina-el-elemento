import { useEffect, useState } from 'react'
import ListaInformacion from '../components/arraysDatos/ListaInformacion'
import { useParams } from 'react-router-dom'
import Error404 from './Error404'
import { Helmet } from 'react-helmet'
import useObtenerGrupo from '../hooks/useObtenerGrupo'
import Information from '../components/Information'
import Loader from '../components/Loader'
import { useTransformarEstado, useTransformarYearAntiguo } from '../hooks/useTransformarDatos'

const Elemento = () => {
  const [datos, setDatos] = useState({})
  const [cargando, setCargando] = useState(false)
  // obtenemos el numero atomico de la URL y le decimos que el objecto que coincida con el numeroAtomico - 1 (para poder acceder a su posicion del array) lo guardemos en una const para poder acceder a todas sus propiedades

  const { numeroAtomico } = useParams()
  const objectoCoincidente = ListaInformacion[numeroAtomico - 1] || {}

  useEffect(() => {
    const fetchElements = async () => {
      setCargando(true)
      const url = `https://neelpatel05.pythonanywhere.com/element/atomicnumber?atomicnumber=${numeroAtomico}`

      const request = await fetch(url)
      const respuesta = await request.json()

      setDatos(respuesta)
      setCargando(false)
    }

    fetchElements()
  }, [])

  const [colorFondo, grupoPerteneciente] = useObtenerGrupo(objectoCoincidente.grupo)

  return (
    <div className=''>
      <Helmet>
        <title>{objectoCoincidente.nombre || 'Error'} | AEE</title>
      </Helmet>

      <div className=''>
        {numeroAtomico <= 118
          ? <div className='w-full min-h-screen flex flex-col justify-center items-center mt-32 gap-10 md:mt-0 text-center'>
            {/* Seccion del titulo y foto */}
            <div className='flex items-center gap-20 flex-col md:flex-row'>
              <div className={`${colorFondo} w-[100px] h-[100px] grid place-content-center`}>
                <p className='absolute text-right w-[100px] pr-2'>{objectoCoincidente.numeroAtomico}</p>
                <h3 className='relative text-2xl text-white font-bold'>{objectoCoincidente.simbolo}</h3>
              </div>

              <div className='space-y-10'>
                <h2 className='text-3xl font-bold'>{objectoCoincidente.nombre}</h2>
              </div>

              <img src={`/img/elementos/${objectoCoincidente.nombre}.jpg`} alt={`Foto del ${objectoCoincidente.nombre}`} className="md:w-[500px] md:h-[500px] rounded-xl shadow-md w-[200px] h-[200px]" loading='lazy' />

            </div>
            {/* Seccion de la informacion */}
            {!cargando ? (
              <>
                <h3 className='text-3xl font-bold border-b-2 border-b-slate-500'>Datos del {objectoCoincidente.nombre}</h3>
                <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
                  <Information text='Grupo' value={grupoPerteneciente} />
                  <Information text='Masa atómica' value={datos.atomicMass} />
                  <Information text='Punto de ebullición' value={`${datos.boilingPoint}ºC`} />
                  <Information text='Afinidad electrónica' value={datos.electronAffinity} />
                  <Information text='Configuración electrónica' value={datos.electronicConfiguration} />
                  <Information text='Punto de derretimiento' value={`${datos.meltingPoint}ºC`} />
                  <Information text='Estados de oxidación' value={datos.oxidationStates} />
                  <Information text='Estado natural' value={useTransformarEstado(datos.standardState)} />
                  <Information text='Año de descubrimiento' value={useTransformarYearAntiguo(datos.yearDiscovered)} />
                </div>


                <p className='text-gray-400 text-center'>
                  Datos extraidos de <a href="https://github.com/neelpatel05/periodic-table-api" className='underline transition-all hover:text-gray-500'>esta API</a>
                </p>
              </>
            ) :

              <Loader />
            }
          </div>
          : <Error404 />
        }
      </div>
    </div>
  )
}

export default Elemento
