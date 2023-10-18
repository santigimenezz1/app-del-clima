import '../TarjetaSecundaria/tarjetaSecundaria.css'
const TarjetaSecundaria = ( {nombre, valor} ) => {
  return (
    <div className='tarjetaSecundaria'>
      <h1 className='tarjetaSecundaria__nombre'>{nombre}</h1>
      <h1 className='tarjetaSecundaria__valor'>{valor}</h1>
    </div>
  )
}

export default TarjetaSecundaria