import React from 'react'
import HaloComponent from './ora/halo'

const HelloWorld = () => {
  return (
    <div className='smoke-test-halo'>
      <HaloComponent endpoint="http://iq.ora.me/api" id="10120888" size={250} />
    </div>
  )
}
export default HelloWorld