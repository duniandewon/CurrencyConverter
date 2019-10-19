import React from 'react';
import CurrencyDisplay from './CurrencyDisplay';
import CurrencyForm from './CurrencyForm';

import Container from '../styled-components/Container';

const CurrencyConverter = () => {
  return (
    <Container>
      <CurrencyDisplay />
      <CurrencyForm />
    </Container>
  );
};

export default CurrencyConverter;
