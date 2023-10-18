import '../TarjetaHorario/tarjetaHorario.css'
import TarjetaHora from './TarjetaHora/TarjetaHora'
const TarjetaHorario = () => {
  return (
    <div className='tarjetaHorario'>
      <div style={{display:"flex"}}>
      <TarjetaHora dia={"00:00"} temperatura={"24º"} />
      <TarjetaHora dia={"3:00"} temperatura={"20º"}  />
      <TarjetaHora dia={"6:00"} temperatura={"21º"}  />
      <TarjetaHora dia={"9:00"} temperatura={"16º"}  />
      <TarjetaHora dia={"12:00"} temperatura={"16º"}  />
      <TarjetaHora dia={"15:00"} temperatura={"14º"}  />
      <TarjetaHora dia={"18:00"} temperatura={"12º"}  />
      <TarjetaHora dia={"21:00"} temperatura={"11º"}  />
      <TarjetaHora dia={"24:00"} temperatura={"7º"}  />
      </div>

 
     

    </div>
  )
}

export default TarjetaHorario