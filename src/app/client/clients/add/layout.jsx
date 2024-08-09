import React from 'react'
import Sidebar from './sidebar'

export default function layout({children}) {
  return (
    <div className='flex'>
        <Sidebar />
        <div>{children}</div>
    </div>
  )
}
