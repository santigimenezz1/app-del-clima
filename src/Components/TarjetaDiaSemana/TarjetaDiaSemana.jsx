import { useEffect, useState } from 'react';
import '../TarjetaDiaSemana/tarjetaDiaSemana.css';

const TarjetaDiaSemana = ({ dia,  setDiaOn, dia2, dia3, dia4, dia5, setFechaHoras }) => {
  const [estadoPrueba, setEstadoPrueba] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState(""); // Agrega un estado para el día de la semana
  const [tempMaxima, setTempMaxima] = useState()
  const [tempminima, setTempminima] = useState()
  const [clima, setClima] = useState()
  const [icon, setIcon] = useState()
  const [diaEstado, setDiaEstado] = useState()
  const [maxima, setMaxima] = useState()
  const [minima, setMinima] = useState()

  


  useEffect(() => {
    if (dia && dia[0] && dia[0].dt_txt) {
      setEstadoPrueba(dia[1].dt_txt);
      let icon = dia[1].weather[0].icon
      let iconUrl = `https://openweathermap.org/img/w/${icon}.png`
      setIcon(iconUrl)
      let clima = dia[1].weather[0].description
      setClima(clima)
      setDiaEstado(dia.estado)
    }
  }, [dia]);

  useEffect(() => {
    if (diaEstado) {
      let maxima = 0;
      let minima = diaEstado[0].main.temp_min
      for (let i = 0; i < diaEstado.length; i++) {
        if (diaEstado[i].main.temp_max > maxima) {
          maxima = (diaEstado[i].main.temp_max - 273.15).toFixed(0)
        }
        if(diaEstado[i].main.temp_min < minima){
          minima = (diaEstado[i].main.temp_min)
        }
      }
      setMaxima(maxima);
      setMinima(minima)
    }
  }, [diaEstado]);



  useEffect(() => {                   //aca espera a que ya este seteado el estado con la fecha en el useEffect anterior
    if (estadoPrueba) {
      let dateString = estadoPrueba;
      let date = new Date(dateString);
      let daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
      let dayOfWeekNumber = date.getDay();
      setDayOfWeek(daysOfWeek[dayOfWeekNumber]); // Actualiza el estado con el nombre del día
    }
  }, [estadoPrueba]);

    const setDiaOn_setFechaHoras = ()=>{
      setDiaOn(dia.estado);
      setFechaHoras(dayOfWeek)
    }
  return (
    <div onClick={() => setDiaOn_setFechaHoras()} className='tarjetaDiaSemana'>
    <div className='tarjetaDiaSemana__info' style={{display:"flex", justifyContent:"space-between"}}>
    <h1>{dayOfWeek}</h1> {/* Muestra el día de la semana */}
    <div className='tarjetaDiaSemana__temperaturas'>
    <h1 className='temperatura'>Máx: {maxima}º</h1>
    <h1 className='temperatura'> Mín: {(minima - 273.15).toFixed(0)}º</h1>
  </div>
    </div>

      <div className='tarjetaDiaSemana__info'>
      <div className='iconClima'>
      <img src={icon}></img>
      <h1>{clima}</h1>
      </div>
      
      </div>
    </div>
  );
};

export default TarjetaDiaSemana;
