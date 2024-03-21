import React from 'react'
import{motion} from "framer-motion"
import { useState } from 'react'


const App = () => {
  const [a,b] = useState(false)
  return (
  <>
  <div className='w-full h-[100] bg-black text-white flex justify-center items-center'>
    <div onClick={()=> b(!a)} style={{ display: "flex", alignItems: "center", justifyContent:a?"start":"end"}} className='handle w-[17vw] h-[15vh] bg-purple-700 rounded-full p-5}'>
      <motion.div layout data-kuchbhai={a} className='w-[5vw] h-[5vw] bg-purple-500 rounded-full'></motion.div>
    </div>
  </div>
  
  </>
  )
}

export default App