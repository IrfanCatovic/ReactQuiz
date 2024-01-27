import { useReducer } from "react";
import Enabled from "./Enabled";

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

      <button>Open account</button>
      {status === "prepare" ? <Enabled /> : ""}
    </div>
  );
}
export default Bank;
