import '../TarjetaHorario/tarjetaHorario.css'
import TarjetaHora from './TarjetaHora/TarjetaHora'
const TarjetaHorario = ( {diaOn, fechaHoras} ) => {



  return (
   
    <div className='tarjetaHorario'>
{
  Object.keys(diaOn).length > 0 ?
  <div className='tarjetaHorario__container__titulo'>
  <h1 className='tarjetaHorario__titulo'>{fechaHoras}</h1>
  </div>
  : <h1>kjasdjkas</h1>
}     
      <div style={{display:"flex"}}>
      {
           Object.keys(diaOn).length > 0 ?
           diaOn.map((hora)=>(
             <TarjetaHora key={1}  dia={hora.dt_txt.slice(11,16)} temperatura={(hora.main.temp - 273.15).toFixed(0)} hora={hora}/>
           ))
           : 
           <h1 style={{color:"white"}}>no llega</h1>
      }
     
      </div>

 
     

    </div>
  )
}

export default TarjetaHorario