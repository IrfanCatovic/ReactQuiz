function NextButton({ dispatch, answer }) {
  if (answer === null) return null; //early return, proveravamo da li korisnik odgovorio, ako nije onda se ne pojavljuje dugme
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
}

export default NextButton;
