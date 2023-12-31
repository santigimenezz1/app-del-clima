import '../TarjetaPrincipal/tarjetaPrincipal.css'
import TarjetaSecundaria from '../TarjetaSecundaria/TarjetaSecundaria'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import { Skeleton } from '@mui/material';
const TarjetaPrincipal = ( {data, estadoFavorito, setEstadoFavorito, heart, setHeart, existe} ) => {
  let objetoFavorito;

  if (Object.keys(data).length > 0) {
      objetoFavorito = 
        {
          nombre: data.name,
          temperatura: (data.main.temp - 273.15).toFixed(0),
          temperaturaMaxima: (data.main.temp_max - 273.15).toFixed(0),
          temperaturaMinima: (data.main.temp_min - 273.15).toFixed(0),
          clima: data.weather[0].description
       }   
    }
    
    const AgregarObjeto = (cuidad) => {
      setHeart(!heart); // Cambia el estado de heart
      if (!heart) {
        let ternario = existe(cuidad)
          if(ternario){
          }else{
            setEstadoFavorito([...estadoFavorito, objetoFavorito])
          }
           // Si el corazón no está marcado, agrega el objeto a estadoFavorito
           
      }
      const fav = ()=>{
        setHeart(false)
      }
 
    
    };

    const arregloFiltrado =  estadoFavorito.filter((objeto)=>{
      const nuevoArreglo = objeto.nombre !== data.name
      return nuevoArreglo
    })
    const eliminarObjeto = ()=>{
      setHeart(!heart)
        setEstadoFavorito(arregloFiltrado)
    }

      

    

    



     





  return (

    <div className='tarjetaPrincipal'>
    {
      Object.keys(data).length > 0 ?(
        <>
        <div className='container__textHoy'>
        <h1>HOY</h1>
        <div>
        
        {
          Object.keys(data).length > 0 &&
          !heart ?  <div style={{cursor:"pointer"}} onClick={()=>AgregarObjeto(data.name)}> <FavoriteBorderIcon  /> </div >    : <div onClick={()=>eliminarObjeto()} style={{cursor:"pointer"}}> <FavoriteIcon /> </div>   
        }
        
        </div>
        </div>
        <h1 className='tarjetaPrincipal__cuidad'>{data.name}</h1>
        <div className='container__temperaturaDescription'>
        <h1 className='tarjetaPrincipal__temperaturaActual'>{(data.main.temp - 273.15).toFixed(0)}º</h1>
        <div className='temperaturaDescription__temperaturas' >
        <h1 className='tarjetaPrincipal__maxima'>Máxima: {(data.main.temp_max - 273.15).toFixed(0)}º</h1>
        <h1 className='tarjetaPrincipal__minima'>Mínima: {(data.main.temp_min - 273.15).toFixed(0)}º</h1>
        <h1 className='sensasionTermica__titulo'>Sensasión térmica: {(data.main.temp_max - 273.15).toFixed(0)}º</h1>
        <h1 className='sensasionTermica__titulo'>Viento: {data.wind.speed}</h1>

        </div>
        </div>
        <h1 className='tarjetaPrincipal__viento'>{data.weather[0].description }</h1>
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
      : 
      <Skeleton style={{backgroundColor:"rgba(51, 80, 138, 0.209)"}} variant="rectangular" width={810} height={400} animation='wave'  />
      

    }

    </div>
  )
}

export default TarjetaPrincipal