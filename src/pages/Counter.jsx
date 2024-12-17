// import { useReducer } from "react";

// function Counter() {
//   // dispatch replaces setCount when we move to reducer rather than state
//   // we also need to pass in the reducer function -
//   //      the reducer function tells us how to update the state
//   const [count, dispatch] = useReducer(reducer, 0);

//   // define the reducer
//   // normally, we would do this in a different module and import it
//   // for this first example, because it is pretty straightforward, we'll define it here
//   function reducer(state, action) {
//     switch (action.type) {
//       case "increment": {
//         return state + 1;
//       }
//       case "decrement": {
//         return state - 1;
//       }
//       default: {
//         throw Error("Unknown Action: " + action.type);
//       }
//     }
//   }

//   return (
//     <div>
//       <h1>{count}</h1>
//       <ActionButton type="increment" dispatch={dispatch}>
//         Increment
//       </ActionButton>
//       <br />
//       <ActionButton type="decrement" dispatch={dispatch}>
//         Decrement
//       </ActionButton>
//     </div>
//   );
// }

// function ActionButton({ children, dispatch, type, payload }) {
//   return (
//     <button onClick={() => dispatch({ type: type, payload: payload })}>
//       {children}
//     </button>
//   );
// }

// export default Counter;

import { useReducer } from "react";
function Counter() {
  //dispach replaces setCount whe we move to reducer rather than state
  //we also need to pass in the reducer function
  //the reducer function tell us how to update the state
  const [count, dispatch] = useReducer(reducer, 0);
  //define the reducer
  //normally we woulod do this in a different module and then import it
  //for this example becaus eit s straight forward, we'll define it
  function reducer(state, action) {
    switch (action.type) {
      case "increment": {
        return state + 1;
      }
      case "decrement": {
        return state - 1;
      }
      default: {
        throw Error("Unknown Action:" + action.type);
      }
    }
  }
  return (
    <div>
      <h1>{count}</h1>
      <ActionButton type="increment" dispatch={dispatch}>
        Increment
      </ActionButton>
      <br />
      <ActionButton type="decrement" dispatch={dispatch}>
        Decrement
      </ActionButton>
    </div>
  );
}

function ActionButton({ children, dispatch, type, payload }) {
  return (
    <button onClick={() => dispatch({ type: type, payload: payload })}>
      {children}
    </button>
  );
}
export default Counter;
