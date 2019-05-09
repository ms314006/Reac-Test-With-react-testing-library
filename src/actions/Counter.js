export const ADD_COUNTER = 'ADD_COUNTER';

export const addCounter = addQuantity => ({
  type: ADD_COUNTER,
  payload: { addQuantity, },
});
