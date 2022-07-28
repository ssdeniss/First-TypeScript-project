import React from 'react'
import { Circles } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div style={{ position: 'fixed', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Circles
      height="80"
      width="80"
      color='blue'
      ariaLabel='three-dots-loading'
    /></div>
  )
}

export default Loader