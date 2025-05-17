import React, { ReactNode } from 'react'
import Navbar from '@/components/Navbar'

const layout = ({children} : {children : ReactNode}) => {
  return (
    <div>
        <Navbar></Navbar>
        {children}
    </div>
  )
}

export default layout