import React from 'react'
import ReactDOM from 'react-dom'
import HaloComponent from './ora/halo'

ReactDOM.render(
  <div className='smoke-test-halo'>
  <h1>Hello, world!</h1>
    <HaloComponent endpoint="http://iq.ora.me/api" id="10120888" size={250} />
  </div>,

  document.getElementById('app')
);