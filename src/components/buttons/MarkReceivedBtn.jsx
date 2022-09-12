import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { updateInstallment } from '../../api';
import './MarkReceivedBtn.css';

export default function MarkReceivedBtn({ installmentId, installmentStatus }) {
  const [buttonText, setButtonText] = useState('Marcar como Pago');

  const handleClick = async () => {
    updateInstallment(installmentId);
    setButtonText('Pago');
  };

  return (installmentStatus === 'Pendente')
    ? (
      <button
        type="button"
        disabled={buttonText === 'Pago'}
        className="btn btn-success received-btn"
        onClick={handleClick}
      >
        {buttonText}
      </button>
    )
    : (<p>Pago</p>);
}

MarkReceivedBtn.propTypes = {
  installmentStatus: PropTypes.string.isRequired,
  installmentId: PropTypes.number.isRequired,
};
