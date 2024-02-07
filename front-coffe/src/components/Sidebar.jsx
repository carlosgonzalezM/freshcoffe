import React from 'react'
import Categoria from './Categoria'
import useQuiosco from '../hooks/useQuiosco'

function Sidebar() {

    const {categorias} = useQuiosco()

  return (
    <aside className='md:w-72'>
        <div className='p-4' >
            <img className='w-40' src="../../public/img/logo.svg" alt="" />
        </div>

        <div className='mt-10' >
            {categorias.map(categoria => (
                // <p>{categoria.nombre}</p>
                <Categoria
                    key={categoria.id}
                    categoria={categoria}
                />
            ))}
        </div>

        <div className='my-5 py-5' >

            <button type='button' className=' text-center bg-red-500 w-full p-3 font-bold text-white truncate'>
                    cancelar orden
            </button>

        </div>

    </aside>
  )
}

export default Sidebar