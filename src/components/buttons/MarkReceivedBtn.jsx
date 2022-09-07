import React from 'react';
import PropTypes from 'prop-types';
import { updateInstallment } from '../../api';

export default function MarkReceivedBtn({ installmentId }) {
  const handleClick = async () => {
    updateInstallment(installmentId);
  };

  return (
    <button
      type="button"
      className="received-btn"
      onClick={handleClick}
    >
      Pago
    </button>
  );
}

MarkReceivedBtn.propTypes = {
  installmentId: PropTypes.number.isRequired,
};
