import { TextField } from '@mui/material'
import '../Buscador/buscador.css'
import { useState } from 'react'
import { useFormik } from 'formik'
const Buscador = ({ peticion, peticionDias, peticionMapas, setHeart, existe }) => {
  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      cuidad: ""
    },
    onSubmit: (data) => {
      peticionDias(data.cuidad)
      peticion(data.cuidad);
      peticionMapas()
      const cuidadMayuscula = data.cuidad.charAt(0).toUpperCase() + data.cuidad.slice(1);
      const exist = existe(cuidadMayuscula);
      
      if (exist) {
        setHeart(true);
      } else {
        setHeart(false)
      }
    },
    validateOnChange: false,
    validateOnBlur:false,
  });


  return (
    <form onSubmit={handleSubmit} className='buscador'>
      <input className='buscador__form'  onChange={handleChange} name='cuidad' id="outlined-basic" label="Outlined" variant="outlined" />
      <button className='buscador__button' type='submit'>Buscar</button>
    </form>
  );
}

export default Buscador