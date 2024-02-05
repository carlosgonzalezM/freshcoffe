import React from 'react'
import { Outlet } from 'react-router-dom'

function AuthLayout() {
  return (
    <main>
        <img src="" alt="" />
        <div>
            <Outlet/>
        </div>
   
    </main>
  )
}

export default AuthLayout