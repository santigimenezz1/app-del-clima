import { TextField } from '@mui/material'
import '../Buscador/buscador.css'
import { useState } from 'react'
import { useFormik } from 'formik'
// ... (resto de tu código)

const Buscador = ({ peticion, peticionDias, peticionMapas, setHeart, existe }) => {
  const { handleSubmit, handleChange, resetForm, values } = useFormik({
    initialValues: {
      cuidad: ""
    },
    onSubmit: (data) => {
      peticionDias(data.cuidad);
      peticion(data.cuidad);
      peticionMapas();
      const cuidadMayuscula = data.cuidad.charAt(0).toUpperCase() + data.cuidad.slice(1);
      const exist = existe(cuidadMayuscula);

      if (exist) {
        setHeart(true);
      } else {
        setHeart(false);
      }

      // Resetear el formulario
      resetForm();
    },
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <form onSubmit={handleSubmit} className='buscador'>
      <input
        className='buscador__form'
        onChange={handleChange}
        name='cuidad'
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        placeholder='Buscar...'
        value={values.cuidad}  // Asegúrate de establecer el valor del input correctamente
      />
      <button className='buscador__button' type='submit'>Buscar</button>
    </form>
  );
}

export default Buscador;
