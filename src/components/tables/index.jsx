import React, { useContext } from 'react';
import Context from '../../context/context';

export default function Table() {
  const { patients } = useContext(Context);
  console.log(patients);
  return (
    <table>

      <thead className="table_head">
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
      {/* <tbody className="table_body">
        {
          patients.map(({
            id, name, treatment, total, startDate, installments,
          }, index) => (
            <tr key={id}>
              <td data-testid={`table-name-${index}`}>
                { name }
              </td>

              <td data-testid={`table-treatment-${index}`}>
                { treatment }
              </td>

              <td data-testid={`table-installments-${index}`}>
                { installments }
              </td>

              <td data-testid={`table-installment-value-${index}`}>
                valor parcela
              </td>

              <td data-testid={`table-total-${index}`}>
                { total }
              </td>

              <td data-testid={`table-status-${index}`}>
                { status }
              </td>

              <td data-testid={`table-btns-${index}`}>
                botões
              </td>
            </tr>
          ))
        }
      </tbody> */}
    </table>
  );
}
