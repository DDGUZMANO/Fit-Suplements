import React from 'react';
import { useParams } from 'react-router-dom';

const Investigacion = () => {
    const {investigacion} = useParams()

  return 
<div>
    <p>Acá encontraremos investigaciones relacionadas a los suplementos deportivos</p>
</div>
};

export default Investigacion;