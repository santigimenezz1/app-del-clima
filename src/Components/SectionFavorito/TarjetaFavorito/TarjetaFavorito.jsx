import '../TarjetaFavorito/tarjetaFavorito.css'
const TarjetaFavorito = ( {setHeart, existe, peticion,peticionDias, nombre, temperatura, temperaturaMaxima, temperaturaMinima, clima } ) => {
   const actualizacionPeticiones = async (nombre)=>{
    let name = await nombre
    peticion(nombre)
    peticionDias(nombre)
    setHeart(true)
   
   }
  return (
    <div onClick={()=>actualizacionPeticiones(nombre)} className='tarjetaFavorito'>
   <div className='tarjetaFavorito__info'>
     <div className='tarjetaFvorito__info__cuidad-horario'>
     <div>
       <h1 className='titulo__cuidad'>{nombre}</h1>
       <h4 className='hora__tarjetaFavorito'>23:12</h4>
     </div>
     <h1 className='temperatura__tarjetaFavorito'>{temperatura}º</h1>
     </div>
     <div className='tarjetaFvorito__info__maxima-minima'>
      <h4>{clima}</h4>
      <h4>Maxima: {temperaturaMaxima}º minima: {temperaturaMinima}º</h4>
     </div>
   </div>
     
  </div>
  )
}

export default TarjetaFavorito