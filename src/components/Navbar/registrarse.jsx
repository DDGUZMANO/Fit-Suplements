import React from 'react';
import { useParams } from 'react-router-dom';

const Registro = () => {
    const {registroId} = useParams()

  return 
<div>
    <p>Acá encontraremos un formulario de registro</p>
</div>
};

export default Registro;