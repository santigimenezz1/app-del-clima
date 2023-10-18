import '../TarjetaHora/tarjetaHora.css'
const TarjetaHora = ( {dia, temperatura} ) => {
  return (
    <div className='tarjetaHora'>
    <h1>{dia}</h1>
    <img className='tarjetaHora__imagen' src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697497681/APP%20del%20tiempo/noticias-meteorologicas_ceazyz.png'></img>
    <h1>{temperatura}</h1>

      
    </div>
  )
}

export default TarjetaHora