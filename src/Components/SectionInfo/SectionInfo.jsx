import { useEffect, useState } from "react"
import Buscador from "../SectionFavorito/Buscador/Buscador"
import '../SectionInfo/sectionInfo.css'
import TarjetaFavorito from "../SectionFavorito/TarjetaFavorito/TarjetaFavorito"
import TarjetaPrincipal from "./TarjetaPrincipal/TarjetaPrincipal"
import TarjetaDiaSemana from "../TarjetaDiaSemana/TarjetaDiaSemana"
import TarjetaSecundaria from "./TarjetaSecundaria/TarjetaSecundaria"
import TarjetaHorario from "./TarjetaHorario/TarjetaHorario"




const SectionInfo = () => {
   const [data, setData] = useState([])
   const [dataDias, setDataDias] = useState([])

   const peticion = (data)=>{
       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=56fb42e6cafbcdee72360410ea42141c&lang=es`)
       
       .then((response)=>response.json())
       .then((response)=>setData(response))
       console.log(data)
   }
 

   const peticionDias = (data)=>{
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${data}&appid=56fb42e6cafbcdee72360410ea42141c&lang=es`)
    .then((response)=>response.json())
    .then((response)=>setDataDias(response))
     console.log(data)
} 
   
   
console.log(data)
console.log(dataDias)
  return (
    <div className="SectionInfo">
    <section className="favorito">
    <div className="buscador">
    <Buscador peticion={peticion} peticionDias={peticionDias} />
    </div>
    <div className="favorito__tarjetas">
    <TarjetaFavorito urlVideo={"https://res.cloudinary.com/dcf9eqqgt/video/upload/v1697403666/APP%20del%20tiempo/production_id_4562023_720p_pejcs1.mp4"} cuidad={"Valencia"} grados={24} />
    <TarjetaFavorito urlVideo={"https://res.cloudinary.com/dcf9eqqgt/video/upload/v1697406318/APP%20del%20tiempo/video_360p_mgvcqh.mp4"} cuidad={"Barcelona"} grados={20} />
    <TarjetaFavorito urlVideo={"https://res.cloudinary.com/dcf9eqqgt/video/upload/v1697406590/APP%20del%20tiempo/soleado_nkqpac.mp4"} cuidad={"Rosario"} grados={11} />
    <TarjetaFavorito urlVideo={"https://res.cloudinary.com/dcf9eqqgt/video/upload/v1697403666/APP%20del%20tiempo/production_id_4562023_720p_pejcs1.mp4"} cuidad={"Valencia"} grados={24} />
    <TarjetaFavorito urlVideo={"https://res.cloudinary.com/dcf9eqqgt/video/upload/v1697406318/APP%20del%20tiempo/video_360p_mgvcqh.mp4"} cuidad={"Barcelona"} grados={20} />
    <TarjetaFavorito urlVideo={"https://res.cloudinary.com/dcf9eqqgt/video/upload/v1697406590/APP%20del%20tiempo/soleado_nkqpac.mp4"} cuidad={"Rosario"} grados={11} />
    </div>
    </section>

    <section className="infoCuidad">
       <TarjetaPrincipal data={data} />
       <div className="infoCuidad__diaSemana">
       {
        Object.keys(data).length > 0 && (
          <>
          <TarjetaDiaSemana dia={"hoy"} maxima={`${(data.main.temp_max - 273.15).toFixed(0)}`} minima={`${(data.main.temp_min - 273.15).toFixed(0)}`}/>
          <TarjetaDiaSemana dia={"Jueves"} maxima={26} minima={17} />
          <TarjetaDiaSemana dia={"Viernes"} maxima={26} minima={17} />
          <TarjetaDiaSemana dia={"Sabado"} maxima={26} minima={17} />
          <TarjetaDiaSemana dia={"Domingo"} maxima={26} minima={17} />
          </>
        )
       }
     
       </div>

       <section className="tarjetasHorario">
        <TarjetaHorario />
       </section>

       

    </section>
    
    </div>
  )
}

export default SectionInfo