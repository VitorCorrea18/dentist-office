import React, {
  useState, useMemo, useEffect, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import Context from './context';
import patientsMock from '../__tests__/mocks/patientsMock';
import calcExpectedTotal from '../helpers';

function Provider({ children }) {
  const [monthSelect, setMonthSelect] = useState(1);
  const [yearSelect, setYearSelect] = useState();
  const [patients, setPatients] = useState([]);
  const [expectedTotal, setExpectedTotal] = useState('0,00');
  const [receivedTotal, setReceivedTotal] = useState('0,00');

  const getDate = useCallback(
    () => {
      const d = new Date();
      const month = d.getMonth(); // returns the month from 0 to 11
      const year = d.getFullYear();
      setMonthSelect(month + 1); // add 1 to get the actual month number
      setYearSelect(year.toString());
    },
    [],
  );

  const getPatients = useCallback(
    () => {
      setPatients(patientsMock);
    },
    [],
  );

  const calcTotal = useCallback(
    () => {
      const total = calcExpectedTotal(patients);
      setExpectedTotal(total);
    },
    [patients],
  );

  useEffect(() => {
    getDate();
    getPatients();
  }, []);

  useEffect(() => {
    calcTotal();
  }, [calcTotal]);

  const defaultContext = useMemo(() => (
    {
      monthSelect,
      setMonthSelect,
      yearSelect,
      setYearSelect,
      patients,
      setPatients,
      expectedTotal,
      setExpectedTotal,
      receivedTotal,
      setReceivedTotal,
    }
  ), [patients, expectedTotal, receivedTotal, monthSelect]);

  return (
    <Context.Provider value={defaultContext}>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Provider;
