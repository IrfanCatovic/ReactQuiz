function Enabled({ dispatch }) {
  return (
    <div className="bankApp">
      <button onClick={() => dispatch({ type: "deposite" })}>
        Deposit 150
      </button>
      <button onClick={() => dispatch({ type: "withdraw" })}>
        Withdraw 50
      </button>
      <button>Request a loan of 5000</button>
      <button>Pay loan</button>
      <button>Close account</button>
    </div>
  );
}

export default Enabled;
