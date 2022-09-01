import React from 'react';

export default function NewPacientBtn() {
  function handleClick() {
    console.log('Implementar');
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="new-btn btn btn-success"
    >
      Novo Paciente
    </button>
  );
}
