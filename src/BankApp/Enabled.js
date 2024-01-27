function Enabled({ dispatch }) {
  return (
    <div className="bankApp">
      <button onClick={() => dispatch({ type: "deposite" })}>
        Deposit 150
      </button>
      <button onClick={() => dispatch({ type: "withdraw" })}>
        Withdraw 50
      </button>
      <button onClick={() => dispatch({ type: "takeLoan" })}>
        Request a loan of 5000
      </button>
      <button onClick={() => dispatch({ type: "payLoan" })}>Pay loan</button>
      <button onClick={() => dispatch({ type: "closeAcc" })}>
        Close account
      </button>
    </div>
  );
}

export default Enabled;
