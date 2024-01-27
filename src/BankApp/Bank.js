import { useReducer } from "react";
import Enabled from "./Enabled";
import Disabled from "./Disabled";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
  status: "prepare",
};

function reducer(state, action) {
  switch (action.type) {
    case "openAccount":
      return {
        ...state,
        status: "created",
      };
    case "deposite":
      return {
        ...state,
        balance: state.balance + 150,
      };
    case "withdraw":
      return {
        ...state,
        balance: state.balance - 50,
      };
    default:
      throw new Error("Action uknown");
  }
}

function Bank() {
  const [{ balance, status, loan }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <div className="app">
      <h1>useReducer Bank Account</h1>
      <h2>Balance: X</h2>
      <h2>Loan: X</h2>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "openAccount" })}
      >
        Open account
      </button>
      {status === "prepare" ? <Disabled /> : <Enabled dispatch={dispatch} />}
    </div>
  );
}
export default Bank;