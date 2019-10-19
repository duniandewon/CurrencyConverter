import React, { createContext, useReducer, useEffect } from 'react';
import currencyReducer from '../context/currencyReducer';

export const CurrencyContext = createContext();

export const CurrencyProvider = props => {
  const initialState = {
    currencies: [],
    amount: 1,
    convertFrom: 'USD',
    convertTo: 'IDR',
    result: null,
    date: ''
  };

  const [state, dispatch] = useReducer(currencyReducer, initialState);

  // Get currencies
  const getCurrencies = async () => {
    const res = await fetch('https://api.exchangeratesapi.io/latest');

    const data = await res.json();
    const currencies = [];
    for (const curreny in data.rates) {
      if (data.rates.hasOwnProperty(curreny)) {
        currencies.push(curreny);
      }
    }

    dispatch({
      type: 'GET_CURRENCIES',
      currencies: currencies,
      date: data.date
    });
  };

  // Amount
  const getAmount = amount => {
    dispatch({
      type: 'GET_AMOUNT',
      amount
    });
  };

  // Calculate currency
  const calculate = async () => {
    const { convertFrom, convertTo, amount } = state;
    const res = await fetch(
      `https://api.exchangeratesapi.io/latest?symbols=${convertFrom},${convertTo}`
    );

    const data = await res.json();

    const result = (
      (data.rates[convertTo] / data.rates[convertFrom]) *
      amount
    ).toFixed(2);

    dispatch({
      type: 'CALCULATE_CURRENCY',
      result
    });
  };

  // Select Currency

  // Select From
  const selectFrom = from => {
    dispatch({
      type: 'SELECT_FROM',
      convertFrom: from
    });
  };

  // Select To
  const selectTo = to => {
    dispatch({
      type: 'SELECT_TO',
      convertTo: to
    });
  };

  // Switch currencies
  const switchCurrencie = () => {
    const ConvertFrom = state.convertFrom;
    const ConvertTo = state.convertTo;

    dispatch({
      type: 'SWITCH_CURRENCIES',
      convertFrom: ConvertTo,
      convertTo: ConvertFrom
    });
  };

  useEffect(() => {
    getCurrencies();
  }, []);

  return (
    <CurrencyContext.Provider
      value={{
        currencies: state.currencies,
        amount: state.amount,
        convertFrom: state.convertFrom,
        convertTo: state.convertTo,
        result: state.result,
        date: state.date,
        getAmount,
        calculate,
        selectFrom,
        selectTo,
        switchCurrencie
      }}
    >
      {props.children}
    </CurrencyContext.Provider>
  );
};
