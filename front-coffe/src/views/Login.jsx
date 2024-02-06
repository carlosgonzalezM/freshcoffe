import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
    <h1 className='text-4xl font-black' >Iniciar sesion</h1>
    <p>Para crear un pedido, debes iniciar sesion</p>

    <div className='bg-white shadow-md rounded-md mt-10 px-5 py-10' >
        <form>
          
          <div className='mb-4' >
            <label className=' text-slate-800' htmlFor='email' >
                Email:
            </label>
            <input type="email" id="email" className='mt-2 w-full p-3 bg-gray-50' name='email' placeholder='tu email'/>
          </div>

          <div className='mb-4' >
            <label className=' text-slate-800' htmlFor='password' >
                Password:
            </label>
            <input type="password" id="password" className='mt-2 w-full p-3 bg-gray-50' name='password' placeholder='tu contraseña'/>
          </div>

          <input type="submit" value="Iniciar sesion" className=' bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer' />
        
        </form>
    </div>
    <Link to="/auth/registro" > no tienes cuenta? crea una</Link>
</div>
  )
}

export default Login