import { useEffect, useState } from "react"
import Buscador from "../SectionFavorito/Buscador/Buscador"
import '../SectionInfo/sectionInfo.css'
import TarjetaFavorito from "../SectionFavorito/TarjetaFavorito/TarjetaFavorito"
import TarjetaPrincipal from "./TarjetaPrincipal/TarjetaPrincipal"
import TarjetaDiaSemana from "../TarjetaDiaSemana/TarjetaDiaSemana"
import TarjetaSecundaria from "./TarjetaSecundaria/TarjetaSecundaria"
import TarjetaHorario from "./TarjetaHorario/TarjetaHorario"
import SectionMaps from "../Maps/SectionMaps"
import Maps from "../Maps/SectionMaps"
import Background from "../Particles/BackgroundParticle"




const SectionInfo = () => {
   const [data, setData] = useState([])             
   const [dataDias, setDataDias] = useState([])    // Estados de las 3 peticiones
   const [dataMapa, setDataMapa] = useState([])
//-----------------------------------------------------------------------------------------
   const [diaActual, setDiaActual] = useState([]);
   const [diaOn, setDiaOn] = useState(diaActual)
   const [dia2, setDia2] = useState([])            // Estados para la peticion de Data dias
   const [dia3, setDia3] = useState([])
   const [dia4, setDia4] = useState([])
   const [dia5, setDia5] = useState([])
   const [diasSemana, setDiasSemana] = useState([dia2, dia3, dia4, dia5])
   const [fechaHoras, setFechaHoras] = useState("")
//-------------------------------------------------------------------------------------------
   const [estadoFavorito, setEstadoFavorito] = useState([])
   const [heart, setHeart] = useState(false)

//-------------------------------------------------------------------------------------------

   const peticion = (data)=>{
       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=56fb42e6cafbcdee72360410ea42141c&lang=es`)
       .then((response)=>response.json())
       .then((response)=>setData(response))
   }
   const peticionDias = (data) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${data}&appid=56fb42e6cafbcdee72360410ea42141c&lang=es`)
    .then((response) => response.json())
    .then((response) => {
        setDataDias(response);
        // Obtener los primeros 5 objetos de dataDias.list
        if (response.list ) {
            const diaActual = response.list.slice(0, 3);
            const dia2 = response.list.slice(3, 11);
            const dia3 = response.list.slice(11, 19);
            const dia4 = response.list.slice(19, 27);
            const dia5 = response.list.slice(27, 35);
            setDiaActual(dia2);
            setDia2(dia2);
            setDia3(dia3);
            setDia4(dia4);
            setDia5(dia5);
            setDiasSemana([{...diaActual, id:"diaActual", estado: diaActual} ,{...dia2, id:"dia2" , estado: dia2}, {...dia3, id:"dia3", estado: dia3}, {...dia4, id:"dia4",estado: dia4}, {...dia5, id:"dia5", estado: dia5}])
        }
    });
}                       //Funciones de logica
   const peticionMapas = () => {
  fetch('https://tile.openweathermap.org/map/wind_new/15/100/100.png?appid=56fb42e6cafbcdee72360410ea42141c&lang=es')
    .then((response) => response) // Obtener la URL directamente
    .then((response) => {
      // Aquí puedes hacer lo que necesites con la URL del mapa
      setDataMapa({ response});
    })
    .catch((error) => {
      console.error('Error en la solicitud del mapa:', error);
    });
}

  const eliminarFavoritos = ()=>{
    setEstadoFavorito([])
    setHeart(false)
  }

  const existe = (cuidad) => {
    const exist = estadoFavorito.some((favorito) => favorito.nombre === cuidad);
    return exist
  };

  const AgregarObjeto = (cuidad) => {
    setHeart(!heart); // Cambia el estado de heart
    if (!heart) {
      let ternario = existe(cuidad)
        if(ternario){
        }else{
          setEstadoFavorito([...estadoFavorito, objetoFavorito])
        }
         // Si el corazón no está marcado, agrega el objeto a estadoFavorito
         
    }
    const fav = ()=>{
      setHeart(false)
    }

  
  };

useEffect(() => {
  setDiaOn(diaActual);
}, [diaActual]);

useEffect(() => {                   //aca espera a que ya este seteado el estado con la fecha en el useEffect anterior
  if (Object.keys(dia2).length > 0) {
    let dateString = dia2[0].dt_txt;
    let date = new Date(dateString);
    let daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    let dayOfWeekNumber = date.getDay();
    setFechaHoras(daysOfWeek[dayOfWeekNumber]); // Actualiza el estado con el nombre del día
  }
}, [dia2]);

   useEffect(()=>{
    peticionDias("Valencia")
    peticion("Valencia");
   },[])
//-------------------------------------------------------------------------------------------



  return (
    <div className="SectionInfo">
    <div style={{zIndex:"-1"}}>
    <Background />
    </div>
    <section className="favorito">
    <div className="buscador">
    <Buscador  existe={existe} setHeart={setHeart}  peticion={peticion} peticionDias={peticionDias} peticionMapas={peticionMapas} />
    </div>
    <div className="favorito__tarjetas">
    <div className="container__button__vaciarFavoritos">
    <button onClick={()=>eliminarFavoritos()} className="button__vaciarFavoritos">Vaciar favoritos</button>
    </div>
    {
      estadoFavorito.length > 0 ?
      estadoFavorito.map((favorito)=>(
     <TarjetaFavorito setHeart={setHeart} existe={existe} peticion={peticion} peticionDias={peticionDias}  nombre={favorito.nombre} temperatura={favorito.temperatura} temperaturaMaxima={favorito.temperaturaMaxima} temperaturaMinima={favorito.temperaturaMinima} clima={favorito.clima} />
      ))
      :
      <div className="container__sinFavoritos">
      <h1>Agregá un favorito</h1>
    </div>
    }
   
    </div>
    </section>
    <section className="infoCuidad">
    {
      data.cod == 200 ?(

        <>
        <TarjetaPrincipal existe={existe} heart={heart} setHeart={setHeart}  data={data} estadoFavorito={estadoFavorito} setEstadoFavorito={setEstadoFavorito} />
        <div className="infoCuidad__diaSemana"> 
        {
         Object.keys(data).length > 0 && (
           diasSemana.slice(1,5).map((dia)=>(
             <div key={dia.dt} >
             <TarjetaDiaSemana setFechaHoras={setFechaHoras} setDiaOn={setDiaOn} dia={dia} dia2={dia2} dia3={dia3} dia4={dia4} dia5={dia5}/>
             </div>
           ))
         )    
        }
        </div>
        <section className="tarjetasHorario">
         <TarjetaHorario diaOn={diaOn} fechaHoras={fechaHoras}  />
        </section>
        </>
      )
      : 
      
      <div className="container__error">
        <h1>La cuidad no fue encontrada</h1>
      </div>
    }
    </section>

    </div>
  )
}

export default SectionInfo