import React from 'react'

const Modal = ({children}) => {
  return (
    <div className='absolute top-0 left-0 h-screen w-screen bg-gray/40 flex items-center justify-center'>
      <div className=''>
        {children}
      </div>
    </div>
  )
}

export default Modal