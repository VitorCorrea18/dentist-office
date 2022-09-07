import React, { useContext } from 'react';
import Context from './context/context';
import Header from './components/header';
import Table from './components/tables';
import months from './utils/months';
import years from './utils/years';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

function App() {
  const {
    expectedTotal,
    receivedTotal,
    monthSelect,
    setMonthSelect,
    yearSelect,
    setYearSelect,
  } = useContext(Context);

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
            <select
              className="form-select"
              id="month-select"
              value={monthSelect}
              onChange={({ target: { value } }) => setMonthSelect(value)}
            >
              {
                months.map((m, i) => (<option key={m} value={i + 1}>{m}</option>))
              }
            </select>
          </label>
          <label
            className="form-label"
            htmlFor="year-select"
          >
            Ano
            <select
              className="form-select"
              id="year-select"
              value={yearSelect}
              onChange={({ target: { value } }) => setYearSelect(value)}
            >
              {
                years.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))
              }
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
      <Table />
    </>

  );
}

export default App;
