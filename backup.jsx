import React, { useEffect, useState } from 'react'
import ListaInformacion from './arraysDatos/ListaInformacion'
import { useParams } from 'react-router-dom'
import Error404 from './Error404'
import { Helmet } from 'react-helmet'
import useObtenerGrupo from '../hooks/useObtenerGrupo'

const Elemento = () => {
  const [datos, setDatos] = useState([])
  // obtenemos el numero atomico de la URL y le decimos que el objecto que coincida con el numeroAtomico - 1 (para poder acceder a su posicion del array) lo guardemos en una const para poder acceder a todas sus propiedades

  const { numeroAtomico } = useParams()
  const objectoCoincidente = ListaInformacion[numeroAtomico - 1] || { nombre: '', simbolo: '', grupo: '', informacion: '', estado_inicial: '', estados_oxidacion: '', peso_atomico: '' }

  // const estadosAgregacion = ['Sólido', 'Líquido', 'Gaseoso', 'Sintético']
  // const seccionesTabla = ['s', 'p', 'd', 'f']

  useEffect(() => {
    const fetchElements = async () => {
      const url = 'https://neelpatel05.pythonanywhere.com/'

      const request = await fetch(url)
      const respuesta = await request.json()

      setDatos(respuesta)
    }

    fetchElements()
  }, [])

  const [colorFondo, grupoPerteneciente] = useObtenerGrupo(objectoCoincidente.grupo)

  const noDataStyles = 'md:w-1/2 bg-amber-200 rounded-lg shadow-md flex flex-col items-center'

  console.log(datos)
  return (
    <div className=''>
      <Helmet>
        <title>{objectoCoincidente.nombre} | AEE</title>
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
            {/* <div className='flex mx-10 flex-col md:flex-row md:justify-between gap-10'>

              <div className={noDataStyles}>
                <h3 className='font-semibold pt-4 text-2xl border-b border-b-amber-300'>Información del elemento</h3>
                <p className='p-10'>{objectoCoincidente.informacion.length === 0 ? `¡Ups! No hemos encontrado información del elemento ${objectoCoincidente.nombre}. Pero pronto la habrá.` : objectoCoincidente.informacion}</p>

                {objectoCoincidente.informacion.length === 0
                  ? <lord-icon
                    src="https://cdn.lordicon.com/pvbutfdk.json"
                    trigger="loop"
                    delay="1000"
                    style={{ width: '150px', height: '150px', textAlign: 'center', position: 'relative', zIndex: '1' }}>
                  </lord-icon>
                  : ''}
              </div>

              <div className='md:w-1/2 bg-amber-200 rounded-lg shadow-md flex flex-col items-center'>
                <h3 className='font-semibold pt-4 text-2xl border-b border-b-amber-300'>Propiedades y datos del elemento</h3>
                {objectoCoincidente.estado_inicial.length === 0 && objectoCoincidente.estados_oxidacion.length === 0
                  ? <p>¡Vaya! No hemos sido capaces de encontrar datos del {objectoCoincidente.nombre}, pero no te preocupes, muy pronto habrá información al respecto.</p>
                  : <div className='w-full h-full grid grid-cols-2 place-content-center '>
                    <p className='w-full px-3 py-5'>Número atómico: <span className='font-semibold'>{objectoCoincidente.numeroAtomico}</span></p>
                    <p className='w-full px-3 py-5'>Grupo: <span className='font-semibold'>{grupoPerteneciente}</span></p>
                    <p className='w-full px-3 py-5'>Estado de agregacion: <span className='font-semibold'>{estadosAgregacion[objectoCoincidente.estado_inicial]}</span></p>
                    <p className='w-full px-3 py-5'>Estados de oxidación: <span className='font-semibold'>{objectoCoincidente.estados_oxidacion}</span></p>
                    <p className='w-full px-3 py-5'>Peso atómico: <span className='font-semibold'>{objectoCoincidente.peso_atomico}</span> g/mol</p>
                    <p className='w-full px-3 py-5'>Seccion de la tabla: Grupo <span className='font-semibold'>{seccionesTabla[objectoCoincidente.seccion]}</span></p>

                  </div>
                }

                {objectoCoincidente.estado_inicial.length === 0 && objectoCoincidente.estados_oxidacion.length === 0
                  ? <lord-icon
                    src="https://cdn.lordicon.com/fpuyuudi.json"
                    trigger="loop"
                    delay="1000"
                    style={{ width: '150px', height: '150px', textAlign: 'center' }}>
                  </lord-icon>
                  : ''}
              </div>

            </div> */}
          </div>
          : <Error404 />
        }
      </div>

      {/* {objectoCoincidente.informacion.length !== 0 ? <p className='text-center pt-9 text-gray-400'>Información extraida del libro &quot;Los Elementos: La nueva guía de los componentes básicos del universo&quot; de &quot;Jack Challoner&quot;. Edición del 2018</p> : ''} */}
    </div>
  )
}

export default Elemento
