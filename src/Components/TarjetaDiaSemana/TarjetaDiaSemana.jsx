import '../TarjetaDiaSemana/tarjetaDiaSemana.css'
const TarjetaDiaSemana = ( {dia, maxima, minima} ) => {
  return (
    <div className='tarjetaDiaSemana'>
      <h1>{dia}</h1>
      <div className='tarjetaDiaSemana__info'>
      <img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1697497681/APP%20del%20tiempo/noticias-meteorologicas_ceazyz.png'></img>
        <div>
        <h1>{maxima}º</h1>
        <h1>{minima}º</h1>

        </div>
      </div>
    </div>
  )
}

export default TarjetaDiaSemana