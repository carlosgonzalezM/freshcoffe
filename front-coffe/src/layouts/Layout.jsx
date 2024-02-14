import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Resumen from '../components/Resumen'
import useQuiosco from '../hooks/useQuiosco'
import Modal from 'react-modal'
import ModalProducto from '../components/ModalProducto'
// import ToastContainer from 'react-toastify'
// import "react-toastify/dist/ReactToastify.css"


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement('#root')

function Layout() {
  
  const {modal, handleClickModal} = useQuiosco();

  return (
    <div>
        <div className='md:flex' >
          
          <Sidebar/>
          
          <main className='flex-1 h-screen overflow-y-scroll bg-gray-100' >
              <Outlet/>
          </main>


          <Resumen/>

        </div>

      
        <Modal isOpen={modal} style={customStyles}  >
            <ModalProducto/>
        </Modal>
    
      {/* <ToastContainer/> */}
    </div>

  )
}

export default Layout