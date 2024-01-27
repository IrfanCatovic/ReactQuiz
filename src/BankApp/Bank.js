import { useReducer } from "react";
import Enabled from "./Enabled";
import Disabled from "./Disabled";

const initialState = {
  loan: 0,
  balance: 0,
  isActive: false,
  status: "prepare",
};

function reducer(state, action) {
  switch (action.type) {
    case "openAccount":
      return {
        ...state,
        balance: 500,
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
    case "takeLoan":
      if (state.loan > 0)
        return {
          ...state,
        };
      return {
        ...state,
        loan: state.loan + 5000,
        balance: state.balance + 5000,
      };
    case "payLoan":
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
      };
    case "closeAcc":
      console.log(state.loan, state.balance);
      if (state.loan !== 0 || state.balance > 0)
        return {
          ...state,
          status: "obavestenje",
        };
      return initialState;

    //   return {
    //     ...state,
    //     status: "obavestenje",
    //   };
    // return {
    //   balance: 0,
    //   loan: 0,
    //   isActive: false,
    //   status: "prepare",
    // };
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
      <h2>Balance: {balance}</h2>
      <h2>Loan: {loan}</h2>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "openAccount" })}
      >
        Open account
      </button>
      {status === "prepare" ? <Disabled /> : <Enabled dispatch={dispatch} />}
      {status === "obavestenje" && <h2>Izmirite dugovanja</h2>}
    </div>
  );
}
export default Bank;
