import React from 'react';
import { CurrencyProvider } from './context/CurrencyContex';
import CurrencyConverter from './component/CurrencyConverter';

const App = () => (
  <CurrencyProvider>
    <CurrencyConverter />
  </CurrencyProvider>
);

export default App;
