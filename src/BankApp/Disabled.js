function Disabled() {
  return (
    <div className="bankApp">
      <button disabled={true}>Deposit 150</button>
      <button disabled={true}>Withdraw 50</button>
      <button disabled={true}>Request a loan of 5000</button>
      <button disabled={true}>Pay loan</button>
      <button disabled={true}>Close account</button>
    </div>
  );
}

export default Disabled;
