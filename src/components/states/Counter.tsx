import React, { useReducer } from "react";

const initialState = {
  count: 10, //khởi tạo giá trị state ban đầu 
};

type CounterState = { // state nhận count 
  count: number; //  tạo kiểu dữ liệu cho count
};
type TypeAction = { // action nhận vào 1 object gồm type và payload 
  type: string;  // tạo kiểu dữ liệu cho count
  payload: number; // tạo kiểu dữ liệu cho count
};
type ResetAction = {
    type: 'RESET';
};
type CounterAction =  TypeAction | ResetAction ;
const reducer = (state: CounterState, action: CounterAction) => {//khởi tạo reducer cho useReducer
  switch (action.type) {
    case "INCREASE":
      return { count: state.count + action.payload };
    case "DECREASE":
      return { count: state.count - action.payload };
    case "RESET": 
        return initialState
    default:
      return state;
  }
};
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);// useReducer nhận vào reducer và initialState
  const handleIncrease = () => { // event handleClick Increase
    dispatch({ //truyền type và payload lên reducer
      type: "INCREASE",
      payload: 1,
    });
  };
  const handleDecrease = () => {// event handleClick Decrease
    if (state.count > 0) {
      dispatch({ //truyền type và payload lên reducer
        type: "DECREASE",
        payload: 1,
      });
    }
  };
  const handleResetCount = () => {
      dispatch({
          type: 'RESET',
        
      })
  }
  return (
    <>
      {state.count >= 0 && (
        <>
          <h2>Count : {state.count} </h2>
          <button onClick={handleResetCount}>Reset</button>
          <button onClick={handleIncrease}>Increase</button>
          {
            state.count > 0 && ( // khi count <= 0 thì hide button Decrease 
            <button onClick={handleDecrease}>Decrease</button>
          )}
         

        </>
      ) }
    </>
  );
};

export default Counter;
