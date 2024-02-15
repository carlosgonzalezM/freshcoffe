import { Link } from 'react-router-dom'
import React, { createRef, useState } from 'react'
import Alerta from '../components/Alerta';
import { useAuth } from '../hooks/useAuth';

function Login() {
  
  const emailRef = createRef();
  const passwordRef = createRef();

  const [errores, setErrores] = useState([]);

  const {login} = useAuth({
    middleware: 'guest',
    url: '/'
  });

  const handleSubmit = async e => {
    e.preventDefault();

    const datos = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }

    login(datos, setErrores)
    
  }
  
  return (
          <div>
            <h1 
              className='text-4xl font-black' 
            >
              Iniciar sesion
            </h1>
            
            <p>
              Para crear un pedido, debes iniciar sesion
            </p>

            <div 
              className='bg-white shadow-md rounded-md mt-10 px-5 py-10' 
            >
              <form onSubmit={handleSubmit} > 

              {errores ? errores.map(error => <Alerta key={error}>{error}</Alerta> ) : null }


                  <div className='mb-4' >
                      <label 
                        className='text-slate-800' 
                        htmlFor='email' 
                      >
                        Email:
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        className='mt-2 w-full p-3 bg-gray-50' 
                        name='email' 
                        placeholder='tu email'
                        ref={emailRef}
                      />
                  </div>

                  <div className='mb-4' >
                    <label 
                      className='text-slate-800' 
                      htmlFor='password' 
                    >
                      Password:
                    </label>
                    <input 
                      type="password" 
                      id="password" 
                      className='mt-2 w-full p-3 bg-gray-50' 
                      name='password' 
                      placeholder='tu contraseña'
                      ref={passwordRef}
                    />
                  </div>

                  <input
                    type="submit" 
                    value="Iniciar sesion" 
                    className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer' 
                  />
                
                </form>
            </div>
            <Link to="/auth/registro" > 
              no tienes cuenta? crea una
            </Link>
          </div>
  )
}

export default Login