import React, { useContext } from 'react';
import Context from '../../context/context';

export default function Table() {
  // Table que vai exibir os detalhes dos pacientes

  const { patients } = useContext(Context);

  const data = patients.map((patient) => {
    // Retira o array contendo todas as parcelas
    const { installments: allMonthsI, ...patientWithoutI } = patient;

    const [crrMonthI] = allMonthsI
      .filter((installment) => (installment.date.split('-')[1] === '09')); // filtra para encontrar a parcela do mês atual

    // Retorno um objeto com os dados do paciente contendo
    // parcela atual e o index do pagamento que indica quantas parcelas ainda restam.
    return {
      ...patientWithoutI,
      installment: crrMonthI,
      paymentIndex: `${allMonthsI.indexOf(crrMonthI) + 1}/${allMonthsI.length}`,
    };
  });

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
      <tbody className="table-body">
        {
          data.map(({
            id, name, treatment, total, installment, paymentIndex,
          }, index) => {
            const monthValue = (total / patients[index].installments.length).toFixed(2);

            return (
              <tr key={id}>
                <td data-testid={`table-name-${index}`}>
                  {name}
                </td>

                <td data-testid={`table-treatment-${index}`}>
                  {treatment}
                </td>

                <td data-testid={`table-installments-${index}`}>
                  {`${paymentIndex} ${installment.date}`}
                </td>

                <td data-testid={`table-installment-value-${index}`}>
                  {monthValue}
                </td>

                <td data-testid={`table-total-${index}`}>
                  {total}
                </td>

                <td data-testid={`table-status-${index}`}>
                  {installment.status}
                </td>

                <td data-testid={`table-btns-${index}`}>
                  { /* implementar os botões que marcam o pagamento */}
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
