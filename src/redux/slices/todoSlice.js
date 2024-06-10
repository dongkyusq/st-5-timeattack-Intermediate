// TODO: todoSlice 를 작성하세요.
const ADD_BUY = "ADD_BUY";

export const addBuy = (payload) => {
  return {
    type: ADD_BUY,
    payload: payload,
  };
};

const initialState = [{}];

const todoSlice = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUY:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default todoSlice;
