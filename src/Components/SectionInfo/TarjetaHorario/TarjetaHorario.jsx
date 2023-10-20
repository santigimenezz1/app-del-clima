import { Skeleton } from '@mui/material'
import '../TarjetaHorario/tarjetaHorario.css'
import TarjetaHora from './TarjetaHora/TarjetaHora'
import TarjetaSecundaria from '../TarjetaSecundaria/TarjetaSecundaria'
import TarjetaSecundariaHora from '../TarjetaSecundariaHora/TarjetaSecundariaHora'
const TarjetaHorario = ( {diaOn, fechaHoras} ) => {

  console.log({diaOn})
  return (
   
    <div className='tarjetaHorario'>
{
  Object.keys(diaOn).length > 0 ?
  <div className='tarjetaHorario__container__titulo'>
  <h1 className='tarjetaHorario__titulo'>{fechaHoras}</h1>
  </div>
  : (
    <div style={{display:"flex", gap:"10px"}}>
    <Skeleton style={{backgroundColor:"rgba(51, 80, 138, 0.209)"}} variant="rectangular" width={190} height={100} animation='wave'  />
    <Skeleton style={{backgroundColor:"rgba(51, 80, 138, 0.209)"}} variant="rectangular" width={190} height={100} animation='wave'  />
    <Skeleton style={{backgroundColor:"rgba(51, 80, 138, 0.209)"}} variant="rectangular" width={190} height={100} animation='wave'  />
    <Skeleton style={{backgroundColor:"rgba(51, 80, 138, 0.209)"}} variant="rectangular" width={190} height={100} animation='wave'  />
    </div>
  )
}     
      <div style={{display:"flex"}}>
      {
           Object.keys(diaOn).length > 0 ?
           diaOn.map((hora)=>(
             <TarjetaHora key={1}  dia={hora.dt_txt.slice(11,16)} clima={hora.weather[0].description} temperatura={(hora.main.temp - 273.15).toFixed(0)} hora={hora}/>
           ))
           : 
          <div style={{display:"flex", gap:"5px", marginTop:"50px"}}>
        <Skeleton style={{backgroundColor:"rgba(51, 80, 138, 0.209)"}} variant="rectangular" width={95} height={120} animation='wave'  />
        <Skeleton style={{backgroundColor:"rgba(51, 80, 138, 0.209)"}} variant="rectangular" width={95} height={120} animation='wave'  />
        <Skeleton style={{backgroundColor:"rgba(51, 80, 138, 0.209)"}} variant="rectangular" width={95} height={120} animation='wave'  />
        <Skeleton style={{backgroundColor:"rgba(51, 80, 138, 0.209)"}} variant="rectangular" width={95} height={120} animation='wave'  />
        <Skeleton style={{backgroundColor:"rgba(51, 80, 138, 0.209)"}} variant="rectangular" width={95} height={120} animation='wave'  />
        <Skeleton style={{backgroundColor:"rgba(51, 80, 138, 0.209)"}} variant="rectangular" width={95} height={120} animation='wave'  />
        <Skeleton style={{backgroundColor:"rgba(51, 80, 138, 0.209)"}} variant="rectangular" width={95} height={120} animation='wave'  />
        <Skeleton style={{backgroundColor:"rgba(51, 80, 138, 0.209)"}} variant="rectangular" width={95} height={120} animation='wave'  />
          </div>
      }
     
      </div>

      <section className='section__SecundariasHora'>
      {
        Object.keys(diaOn).length > 0 &&
        <>
        <TarjetaSecundariaHora diaOn={diaOn} titulo={"Humedad"} valor={`${diaOn[1].main.humidity}%`} />
        <TarjetaSecundariaHora diaOn={diaOn} titulo={"Presión"} valor={`${diaOn[1].main.pressure}`} />
        <TarjetaSecundariaHora diaOn={diaOn} titulo={"Visibilidad"} valor={`${diaOn[1].visibility}`} />
        <TarjetaSecundariaHora diaOn={diaOn} titulo={"Sensasión"} valor={`${(diaOn[1].main.feels_like - 273.15).toFixed(0)}º`} />
        </>
      }
      </section>
      

 
     

    </div>
  )
}

export default TarjetaHorario