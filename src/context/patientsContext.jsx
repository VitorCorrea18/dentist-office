import React, {
  useState, useMemo, useEffect, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import Context from './context';
import {
  calcExpectedTotal, calcReceived, fetchPatients,
} from '../helpers';

function Provider({ children }) {
  const [monthSelect, setMonthSelect] = useState('');
  const [yearSelect, setYearSelect] = useState('2022');
  const [patients, setPatients] = useState([]);
  const [expectedTotal, setExpectedTotal] = useState('0,00');
  const [receivedTotal, setReceivedTotal] = useState('0,00');

  const getDate = useCallback(
    () => {
      const d = new Date();
      const month = d.getMonth() + 1; // returns the month from 0 to 11
      const year = d.getFullYear();
      setMonthSelect(month); // add 1 to get the actual month number
      setYearSelect(year.toString());
    },
    [],
  );

  const getPatients = useCallback(
    async () => {
      const data = await fetchPatients(monthSelect, yearSelect);
      setPatients(data);
    },
    [monthSelect, yearSelect],
  );

  const calcTotal = useCallback(
    () => {
      if (patients.length > 0) {
        const total = calcExpectedTotal(patients);
        const received = calcReceived(patients);
        setReceivedTotal(received);
        setExpectedTotal(total);
      }
    },
    [patients],
  );

  useEffect(() => {
    getDate();
  }, []);

  useEffect(() => {
    getPatients();
  }, [getPatients]);

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
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Provider;
