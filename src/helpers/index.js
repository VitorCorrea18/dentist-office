export const calcExpectedTotal = (patients) => {
  if (patients.length > 0) {
    let total = 0;
    patients.forEach((patient) => {
      const monthValue = (patient.treatment.price / patient.numOfInstallments).toFixed(2);
      total = Number(total) + Number(monthValue);
    });
    return total.toFixed(2).replace('.', ',');
  }
  return '00,00';
};

export const filterPatient = (month, year, patients) => {
  if (patients) {
    const result = patients.filter(
      (patient) => (patient.installments.find(({ date }) => (date.split('-')[0] === year && date.split('-')[1] === month))),
    );
    return result;
  }
  return [];
};

export const recoverActualMonth = (patients, month, year) => {
  const data = patients.map((patient) => {
    // Retira o array contendo todas as parcelas
    const { installments: allMonthsI, ...patientWithoutI } = patient;

    const [crrMonthI] = allMonthsI
      .filter((installment) => (installment.date.split('-')[1] === month) && (installment.date.split('-')[0]) === year);
    // filtra para encontrar a parcela do mês atual

    // Retorna um objeto com os dados do paciente contendo
    // parcela atual e o index do pagamento que indica quantas parcelas ainda restam,
    // a quantidade e o valor das parcelas
    return {
      ...patientWithoutI,
      installment: crrMonthI,
      numOfInstallments: allMonthsI.length,
      installmentsValue: (patient.treatment.price / allMonthsI.length).toFixed(2),
      paymentIndex: `${allMonthsI.indexOf(crrMonthI) + 1}/${allMonthsI.length}`,
    };
  });
  return data;
};

export const formatDate = (date) => {
  const splitedDate = date.split('-');
  const formated = `${splitedDate[2]}/${splitedDate[1]}/${splitedDate[0]}`;
  return formated;
};

export const calcReceived = (patients) => {
  let received = 0;
  patients.forEach(({ installment, installmentsValue }) => {
    if (installment.status === 'Pago') received += Number(installmentsValue);
  });
  return received.toFixed(2);
};
