import React from 'react';
import { useParams } from 'react-router-dom';

const Ingresar = () => {
    const {ingresarId} = useParams()

  return (
  <div>
    <p>Acá encontraremos un formulario de ingreso</p>
</div>)

};

export default Ingresar;