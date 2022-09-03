const calcExpectedTotal = (patients) => {
  let total = 0;
  patients.forEach((patient) => {
    const monthValue = (patient.total / patient.installments.length).toFixed(2);
    total = Number(total) + Number(monthValue);
  });
  return total.toFixed(2).replace('.', ',');
};

export default calcExpectedTotal;
