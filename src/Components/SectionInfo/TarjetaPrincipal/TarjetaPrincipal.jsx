import '../TarjetaPrincipal/tarjetaPrincipal.css'
import TarjetaSecundaria from '../TarjetaSecundaria/TarjetaSecundaria'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
const TarjetaPrincipal = ( {data} ) => {
  const [heart, setHeart] = useState(false)
  return (

    <div className='tarjetaPrincipal'>
    {
      Object.keys(data).length > 0 ?(
        <>
        <div className='container__textHoy'>
        <h1>HOY</h1>
        <div>
        
        {
          !heart ?  <div style={{cursor:"pointer"}} onClick={()=>setHeart(!heart)}> <FavoriteBorderIcon  /> </div >    : <div  style={{cursor:"pointer"}} onClick={()=>setHeart(!heart)}> <FavoriteIcon /> </div>   


        }
        
       
        
      
     

        </div>
        </div>
        <h1 className='tarjetaPrincipal__cuidad'>{data.name}</h1>
        <div className='container__temperaturaDescription'>
        <h1 className='tarjetaPrincipal__temperaturaActual'>{(data.main.temp - 273.15).toFixed(0)}º</h1>
        <div style={{display:"flex", flexDirection:"column", justifyContent:"start", alignItems:"start"}}>
        <h1 className='tarjetaPrincipal__viento'>{data.weather[0].description }</h1>
        <h1 className='tarjetaPrincipal__maxima'>Máxima: {(data.main.temp_max - 273.15).toFixed(0)}º</h1>
        <h1 className='tarjetaPrincipal__minima'>Mínima: {(data.main.temp_min - 273.15).toFixed(0)}º</h1>
        <h1 className='sensasionTermica__titulo'>Sensasión térmica: {(data.main.temp_max - 273.15).toFixed(0)}º</h1>
        </div>
        </div>
        <div className='container__maximaMinima'>
        
        </div>
        <div className='tarjetasSecundarias'>
        <TarjetaSecundaria nombre={"Humedad"} valor={`${data.main.humidity}%`}/>
        <TarjetaSecundaria nombre={"Presión"} valor={`${data.main.pressure}`}/>
        <TarjetaSecundaria nombre={"Visibilidad"} valor={data.visibility} />
        <TarjetaSecundaria nombre={"Sensasión"} valor={`${(data.main.temp_max - 273.15).toFixed(0)}º`}/>
        </div>
        </>
      )
      : <h1>asd</h1>
    }

    </div>
  )
}

export default TarjetaPrincipal