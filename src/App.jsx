import React, { useContext } from 'react';
import Context from './context/context';
import Header from './components/header';
import months from './utils/months';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

function App() {
  const {
    patients,
    // setPatients,
    expectedTotal,
    // setExpectedTotal,
    receivedTotal,
  } = useContext(Context);

  console.log(patients, expectedTotal, receivedTotal);

  return (
    <>
      <Header />
      <section className="main-section">
        <div className="period-div">
          <label
            className="form-label"
            htmlFor="month-select"
          >
            Mês
            <select className="form-select" id="month-select">
              {
                months.map((m) => (<option key={m}>{m}</option>))
              }
            </select>
          </label>
          <label
            className="form-label"
            htmlFor="year-select"
          >
            Ano
            <select className="form-select" id="year-select">
              <option>2022</option>
              <option>2021</option>
            </select>
          </label>
        </div>
        <div className="value-div">
          <span className="span-total">
            Total recebido:
          </span>
          <span className="span-total">
            {`R$ ${receivedTotal}`}
          </span>
        </div>
        <div className="value-div">
          <span className="span-total">
            Total esperado:
          </span>
          <span className="span-total">
            {`R$ ${expectedTotal}`}
          </span>
        </div>
      </section>
      <h1>Hello World</h1>
    </>

  );
}

export default App;
