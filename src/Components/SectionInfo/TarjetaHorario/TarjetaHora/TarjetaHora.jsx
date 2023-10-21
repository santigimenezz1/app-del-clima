import { useEffect, useState } from 'react'
import '../TarjetaHora/tarjetaHora.css'
const TarjetaHora = ( {dia, temperatura, hora, clima} ) => {
  
   const [icon, setIcon] = useState()
     
     useEffect(()=>{
      let icon = hora.weather[0].icon
      let iconUrl = `https://openweathermap.org/img/w/${icon}.png`
      setIcon(iconUrl)
     },[hora])
   
   console.log({hora})

  return (
    <div className='tarjetaHora'>
    <h1>{dia}</h1>
    <img className='tarjetaHora__imagen' src={icon}></img>
    <h1>{temperatura}º</h1>

      
    </div>
  )
}

export default TarjetaHora