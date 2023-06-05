//libs
import React, { useState, useEffect } from 'react';
import gdp from '../../../../libs/formulae/economics/gdp';
//components
import BackBtn from '../../../buttons/BackBtn';
import CurrencySelector from '../../../calculator/CurrencySelector';
import Solution from '../../../calculator/Solution';
import Input from '../../../calculator/Input';
import ACBtn from '../../../buttons/ACBtn';
import SolveBtn from '../../../buttons/SolveBtn';

const IncomeApproach = () => {
  //state management
  const [selected, setSelected] = useState('rand');
  const [totalNationalIncome, setTotalNationalIncome] = useState('');
  const [salesTaxes, setSalesTaxes] = useState('');
  const [depreciation, setDepreciation] = useState('');
  const [netForeignFactorIncome, setNetForeignFactorIncome] = useState('');
  const [currency, setCurrency] = useState('ZAR');
  const [solution, setSolution] = useState(0);
  //variables
  const variableName1 = 'Total National Income';
  const variableName2 = 'Sales Taxes';
  const variableName3 = 'Depreciation';
  const variableName4 = 'Net Foreign Factor Income';
  const type = 'financial';
  //side effects
  useEffect(() => {
    if (selected === 'rands') {
      setCurrency('ZAR');
    }
    if (selected === 'pounds') {
      setCurrency('£');
    }
    if (selected === 'dollars') {
      setCurrency('$');
    }
    if (selected === 'euros') {
      setCurrency('€');
    }
    if (selected === 'yuan') {
      setCurrency('¥');
    }
    if (selected === 'ruble') {
      setCurrency('₽');
    }
    if (selected === 'algerianDinar') {
      setCurrency('DA');
    }
    if (selected === 'kwanza') {
      setCurrency('Kz');
    }
    if (selected === 'franc') {
      setCurrency('Fr');
    }
    if (selected === 'rupee') {
      setCurrency('₹');
    }
    if (selected === 'pula') {
      setCurrency('P');
    }
    if (selected === 'nakfa') {
      setCurrency('Nkf');
    }
    if (selected === 'emalangeni') {
      setCurrency('E');
    }
    if (selected === 'birr') {
      setCurrency('Br');
    }
    if (selected === 'dalasi') {
      setCurrency('D');
    }
    if (selected === 'cedi') {
      setCurrency('GH₵');
    }
    if (selected === 'shillings') {
      setCurrency('Shs');
    }
    if (selected === 'loti') {
      setCurrency('L');
    }
    if (selected === 'kwacha') {
      setCurrency('K');
    }
    if (selected === 'ariary') {
      setCurrency('Ar');
    }
    if (selected === 'ouguiya') {
      setCurrency('UM');
    }
    if (selected === 'mauritianRupee') {
      setCurrency('Rs');
    }
    if (selected === 'dirham') {
      setCurrency('DH');
    }
    if (selected === 'metical') {
      setCurrency('Mt');
    }
    if (selected === 'naira') {
      setCurrency('₦');
    }
    if (selected === 'sahrawiPeseta') {
      setCurrency('Pts');
    }
    if (selected === 'dobra') {
      setCurrency('Db');
    }
    if (selected === 'leone') {
      setCurrency('Le');
    }
    if (selected === 'sudanesePounds') {
      setCurrency('LS');
    }
    if (selected === 'paanga') {
      setCurrency('T$');
    }
    if (selected === 'tunisianDinar') {
      setCurrency('DT');
    }
    if (selected === 'libyanDinar') {
      setCurrency('LD');
    }
  }, [selected]);
  //handlers
  const onChangeHandler = (variableName, value) => {
    if (variableName === variableName1) {
      setTotalNationalIncome(value);
    }
    if (variableName === variableName2) {
      setSalesTaxes(value);
    }
    if (variableName === variableName3) {
      setDepreciation(value);
    }
    if (variableName === variableName4) {
      setNetForeignFactorIncome(value);
    }
  };
  const onACHandler = () => {
    setTotalNationalIncome('');
    setSalesTaxes('');
    setDepreciation('');
    setNetForeignFactorIncome('');
    setSolution(0);
  };
  const onSolveHandler = () => {
    const solution = new gdp().incomeApproach(
      totalNationalIncome,
      salesTaxes,
      depreciation,
      netForeignFactorIncome,
    );
    setSolution(solution);
  };
  const selectHandler = (e) => {
    setSelected(e.target.value);
  };
  return (
    <div className='calculator'>
      <BackBtn prevDir='/economics/gdp' />
      <CurrencySelector selectHandler={selectHandler} selected={selected} />
      <Solution solution={solution} solutionUM={currency} />
      <Input
        stateValue={totalNationalIncome}
        onChangeHandler={onChangeHandler}
        um={currency}
        name={variableName1}
        type={type}
      />
      <Input
        stateValue={salesTaxes}
        onChangeHandler={onChangeHandler}
        um={currency}
        name={variableName2}
        type={type}
      />
      <Input
        stateValue={depreciation}
        onChangeHandler={onChangeHandler}
        um={currency}
        name={variableName3}
        type={type}
      />
      <Input
        stateValue={netForeignFactorIncome}
        onChangeHandler={onChangeHandler}
        um={currency}
        name={variableName4}
        type={type}
      />
      <ACBtn onACHandler={onACHandler} />
      <SolveBtn onSolveHandler={onSolveHandler} />
    </div>
  );
};

export default IncomeApproach;
