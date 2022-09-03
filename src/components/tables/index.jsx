import React, { useContext } from 'react';
import Context from '../../context/context';

export default function Table() {
  const { patients } = useContext(Context);
  const data = patients.map((patient) => {
    const { installments: allMonthsI, ...patientWithoutI } = patient;
    const crrMonthI = patient.installments.filter((i) => (i.date.split('-')[1] === '09'));
    return { patientWithoutI, installment };
  });
  console.log(data);
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
      <tbody className="table_body">
        {
          patients.map(({
            id, name, treatment, total, installments,
          }, index) => {
            const monthValue = (total / installments.lenght).toFixed(2);

            return (
              <tr key={id}>
                <td data-testid={`table-name-${index}`}>
                  { name }
                </td>

                <td data-testid={`table-treatment-${index}`}>
                  { treatment }
                </td>

                <td data-testid={`table-installments-${index}`}>
                  { installments[0].date }
                </td>

                <td data-testid={`table-installment-value-${index}`}>
                  {monthValue}
                </td>

                <td data-testid={`table-total-${index}`}>
                  { total }
                </td>

                <td data-testid={`table-status-${index}`}>
                  { installments[0].status }
                </td>

                <td data-testid={`table-btns-${index}`}>
                  botões
                </td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
}
