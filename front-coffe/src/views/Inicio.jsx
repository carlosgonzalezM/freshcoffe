import React from 'react'
import Producto from '../components/Producto'
import useQuiosco from '../hooks/useQuiosco'
import useSWR from 'swr'
import clienteAxios from '../config/axios'

function Inicio() {

  const {categoriaActual, productosObtenidos} = useQuiosco();
  
  
  // const fetcher = () => clienteAxios('/api/productos').then( data=> data.data)
  // const {data, error, isLoading} = useSWR('/api/productos', fetcher)

  // if (error) return <div>Error al cargar los datos</div>;
  // if (!data) return <div>Cargando...</div>;
  
  // if (!Array.isArray(data)) {
  //   return <div>No hay datos disponibles</div>;
  // }

  const productos = productosObtenidos.filter(producto => producto.categoria_id === categoriaActual.id)


  return (
    <div>
          <h1 className='text-4xl font-black'> {categoriaActual.nombre} </h1>
          <p className='text-2xl my-10' >
              Elige y personaliza tu pedido a continuacion
          </p>

          <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3' >

              {productos.map(producto=>(
                <Producto
                  key={producto.imagen}
                  producto = {producto}
                />
              ))
              }

          </div>

    </div>
  )
}

export default Inicio