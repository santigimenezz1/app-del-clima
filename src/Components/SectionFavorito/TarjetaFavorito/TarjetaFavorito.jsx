import '../TarjetaFavorito/tarjetaFavorito.css'
const TarjetaFavorito = ( {urlVideo, cuidad, grados } ) => {
  return (
    <div className='tarjetaFavorito'>
   <div className='tarjetaFavorito__info'>
     <div className='tarjetaFvorito__info__cuidad-horario'>
     <div>
       <h1 className='titulo__cuidad'>{cuidad}</h1>
       <h4>23:12</h4>
     </div>
     <h1>{grados}</h1>
     </div>
     <div className='tarjetaFvorito__info__maxima-minima'>
      <h4>Mayormente nublado</h4>
      <h4>Maxima: 27 minima: 12</h4>
     </div>
   </div>
     
  </div>
  )
}

export default TarjetaFavorito