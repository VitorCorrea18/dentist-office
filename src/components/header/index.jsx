import React from 'react';
import { Logo } from '../../images';
import NewPatientBtn from './NewPatientBtn';

export default function Header() {
  return (
    <header className="page-header">
      <div className="div-logo">
        <img src={Logo} alt="Logo" className="img-logo" />
      </div>
      <h1 className="page-title">Dr.a Érica</h1>
      <NewPatientBtn />
    </header>
  );
}
