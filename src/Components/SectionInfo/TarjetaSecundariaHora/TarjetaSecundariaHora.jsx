import '../TarjetaSecundariaHora/tarjetaSecundariaHora.css'
const TarjetaSecundariaHora = ( {diaOn, titulo, valor} ) => {
  return (
    
    <div className='container__tarjetaSecundariaHora'>
    {    
        Object.keys(diaOn).length > 0 
        ? (
        <>
        <h1 className='tarjetaSecundaria__titulo'>{titulo}</h1>
        <h1 className='tarjetaSecundaria__valor'>{valor}</h1>
        </>
        )
        : (
            <h1>Todavia no llego</h1>
        )

    }
    </div>
  )
}

export default TarjetaSecundariaHora