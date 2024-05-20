import React from 'react'

const Navbaritem = ({label}) => {
  return (
    <div className=' text-white cursor-pointer hover:text-gray-400 transition '>
        {label}
    </div>
  )
}

export default Navbaritem