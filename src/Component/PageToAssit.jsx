import React from 'react'
import MotherRouting from '../Routing/MotherRouting'
import { ToastContainer } from 'react-toastify'

function PageToAssit() {
  return (
    <div>
      <MotherRouting/>
      <ToastContainer position="top-center" autoClose={1000} />

    </div>
  )
}

export default PageToAssit
