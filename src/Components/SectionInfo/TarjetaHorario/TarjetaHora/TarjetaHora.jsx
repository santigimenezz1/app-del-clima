import { useState } from 'react'
import '../TarjetaHora/tarjetaHora.css'
const TarjetaHora = ( {dia, temperatura, hora, clima} ) => {
  
   const [icon, setIcon] = useState(`https://openweathermap.org/img/w/${hora.weather[0].icon}.png`)



  return (
    <div className='tarjetaHora'>
    <h1>{dia}</h1>
    <img className='tarjetaHora__imagen' src={icon}></img>
    <h1>{temperatura}º</h1>

      
    </div>
  )
}

export default TarjetaHora