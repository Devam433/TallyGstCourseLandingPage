import React from 'react'

function Circle({className='',...props}) {
  return (
    <div className={`border  z-10 ${className}  bg-gradient-to-b from-sky-800 via-blue-800 to-blue-900 `} {...props} >
      <img src="dotPattern.png" alt="" className=' object-cover  w-full h-[20%] md:h-[25%]'/>
    </div>
  )
}

export default Circle