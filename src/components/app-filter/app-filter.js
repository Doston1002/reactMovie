import React from 'react'
import './app-filter.css'

const AppFilter = () => {
  return (
    <div btn-group>
        <button className='btn btn-dark' type='button'>
            Barcha kinolar
        </button>
        <button className='btn btn-outline-dark' type='button'>
            Mashhur kinolar
        </button>
        <button className='btn btn-outline-dark' type='button'>
            Eng ko'p ko'rilgan kinolar
        </button>
    </div>
  )
}

export default AppFilter