import React from 'react';
import { useParams } from 'react-router-dom';

const Estadisticas = () => {
    const {estadisticaId} = useParams()

  return (<div>
      <p>Acá hablaremos de estadisticas</p>
  </div>)

};

export default Estadisticas;