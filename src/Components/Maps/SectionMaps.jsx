import { useEffect } from 'react'
import './sectionMaps.css'
const Maps = ({dataMapa}) => {
  
  useEffect(()=>{},[])
  
  
  return (
   <div className='sectionMaps'>
     {
      Object.keys(dataMapa) > 0 ?(
        <h1>esta llegando</h1>
      ):
      <h1>no esta llegando</h1>
     }
   </div>
  )
}

export default Maps