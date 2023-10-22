import '../TarjetaSecundaria/tarjetaSecundaria.css'
const TarjetaSecundaria = ( {nombre, valor} ) => {
  return (
    <div className='tarjetaSecundaria'>
      <h2 className='tarjetaSecundaria__nombre'>{nombre}</h2>
      <h1 className='tarjetaSecundaria__valor'>{valor}</h1>
    </div>
  )
}

export default TarjetaSecundaria