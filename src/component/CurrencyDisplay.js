import React, { useContext } from 'react';
import { CurrencyContext } from '../context/CurrencyContex';
import styled from 'styled-components';

const CurrencyDisplay = () => {
  const { amount, convertFrom, convertTo, result, date } = useContext(
    CurrencyContext
  );

  return (
    <Display>
      <h4>
        {amount} {convertFrom} is equivalent to
      </h4>
      <h1>
        {amount === '' ? '0' : result === null ? 'Calculating' : result}{' '}
        {convertTo}
      </h1>
      <p>As of {date}</p>
    </Display>
  );
};

const Display = styled.div`
  display: flex;
  flex-direction: column;
`;

export default CurrencyDisplay;
