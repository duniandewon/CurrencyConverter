import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { CurrencyContext } from '../context/CurrencyContex';
import Input from '../styled-components/Input';
import Button from '../styled-components/Button';

const CurrencyForm = () => {
  const {
    currencies,
    amount,
    convertFrom,
    convertTo,
    result,
    getAmount,
    calculate,
    selectFrom,
    selectTo,
    switchCurrencie
  } = useContext(CurrencyContext);

  useEffect(() => {
    calculate();
  }, [amount, convertFrom, convertTo]);

  return (
    <ConverterForm>
      <div className='currency-converter'>
        <Input
          className='form-control'
          type='number'
          name='amount'
          id='amount'
          value={amount}
          onChange={e => getAmount(e.target.value)}
        />
        <select
          name='convertFrom'
          id='convertFrom'
          value={convertFrom}
          onChange={e => selectFrom(e.target.value)}
        >
          {currencies.map(currency => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
        <Input
          className='form-control'
          type='number'
          name='result'
          id='result'
          value={amount === '' ? '0' : result === null ? 'Calculating' : result}
          disabled
        />
        <select
          name='convertTo'
          id='convert-to'
          value={convertTo}
          onChange={e => selectTo(e.target.value)}
        >
          {currencies.map(currency => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div className='currency-switch'>
        <Button onClick={switchCurrencie}>
          <i className='fas fa-sync-alt' />
        </Button>
      </div>
    </ConverterForm>
  );
};

const ConverterForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  margin-top: 1.3rem;

  .currency-converter {
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    grid-gap: 5px 10px;
  }

  .currency-switch {
    display: grid;
    place-items: center;
  }
`;

export default CurrencyForm;
