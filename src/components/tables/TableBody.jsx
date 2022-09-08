import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../../helpers';
import MarkReceivedBtn from '../buttons/MarkReceivedBtn';

export default function TableBody({ data }) {
  return (
    <tbody className="table-body">
      {
        data.map(({
          id, name, treatment, installmentsValue, installment, paymentIndex,
        }, index) => (
          <tr key={id}>
            <td data-testid={`table-name-${index}`}>
              {name}
            </td>

            <td data-testid={`table-treatment-${index}`}>
              {treatment.name}
            </td>

            <td data-testid={`table-installments-${index}`}>
              {`${paymentIndex} ${formatDate(installment.date)}`}
            </td>

            <td data-testid={`table-installment-value-${index}`}>
              {`R$ ${installmentsValue}`}
            </td>

            <td data-testid={`table-total-${index}`}>
              {`R$ ${treatment.price}`}
            </td>

            <td data-testid={`table-status-${index}`}>
              {installment.status}
            </td>

            <td data-testid={`table-btns-${index}`}>
              <MarkReceivedBtn
                installmentId={installment.id}
              />
            </td>
          </tr>
        ))
      }
    </tbody>
  );
}

TableBody.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};
