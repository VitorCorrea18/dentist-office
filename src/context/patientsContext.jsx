import React, {
  useState, useMemo, useEffect, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import Context from './context';
import patientsMock from '../__tests__/mocks/patientsMock';
import calcExpectedTotal from '../helpers';

function Provider({ children }) {
  const [patients, setPatients] = useState([]);
  const [expectedTotal, setExpectedTotal] = useState('0,00');
  const [receivedTotal, setReceivedTotal] = useState('0,00');

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
    getPatients();
  }, []);

  useEffect(() => {
    calcTotal();
  }, [calcTotal]);

  const defaultContext = useMemo(() => (
    {
      patients,
      setPatients,
      expectedTotal,
      setExpectedTotal,
      receivedTotal,
      setReceivedTotal,
    }
  ), [patients, expectedTotal, receivedTotal]);

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
