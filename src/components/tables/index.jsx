import React, { useContext } from 'react';
import Context from '../../context/context';
import TableBody from './TableBody';

export default function Table() {
  // Table que vai exibir os detalhes dos pacientes

  const { patients } = useContext(Context);
  const searchingMessage = 'Buscando Paciente';

  return (
    <table className="patient-table">

      <thead className="table-head">
        <tr>
          <th>Paciente</th>
          <th>Tratamento</th>
          <th>Parcelas</th>
          <th>Valor da parcela</th>
          <th>Total</th>
          <th>Status</th>
          <th>Marcar como Pago</th>
        </tr>
      </thead>
      {
        patients.length
          ? (<TableBody data={patients} />)
          : (
            <tbody><tr><th>{searchingMessage}</th></tr></tbody>
          )
      }
    </table>
  );
}
