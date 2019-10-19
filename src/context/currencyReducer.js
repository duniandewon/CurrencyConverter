const currencyReducer = (state, action) => {
  switch (action.type) {
    case 'GET_CURRENCIES':
      return {
        ...state,
        currencies: action.currencies,
        date: action.date
      };

    case 'GET_AMOUNT':
      return {
        ...state,
        amount: action.amount
      };

    case 'CALCULATE_CURRENCY':
      return {
        ...state,
        result: action.result
      };

    case 'SELECT_FROM':
      return {
        ...state,
        convertFrom: action.convertFrom
      };

    case 'SELECT_TO':
      return {
        ...state,
        convertTo: action.convertTo
      };

    case 'SWITCH_CURRENCIES':
      return {
        ...state,
        convertFrom: action.convertFrom,
        convertTo: action.convertTo
      };

    default:
      return state;
  }
};

export default currencyReducer;
