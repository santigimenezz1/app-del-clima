import { TextField } from '@mui/material'
import '../Buscador/buscador.css'
import { useState } from 'react'
import { useFormik } from 'formik'
const Buscador = ({ peticion, peticionDias }) => {
  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      cuidad: ""
    },
    onSubmit: (data) => {
      peticionDias(data.cuidad)
      peticion(data.cuidad);
    },
    validateOnChange: false,
    validateOnBlur:false,
  });

  return (
    <form onSubmit={handleSubmit} className='buscador'>
      <TextField  onChange={handleChange} name='cuidad' id="outlined-basic" label="Outlined" variant="outlined" />
      <button className='buscador__button' type='submit'>Enviar</button>
    </form>
  );
}

export default Buscador