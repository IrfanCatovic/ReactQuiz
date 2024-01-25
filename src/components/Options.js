function Options({ questions, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {questions.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            //proveravamo koji je odg selektovan i samo na njega dodajemo css
            hasAnswered //proveravamo da li ima odgovora
              ? index === questions.correctOption //proveravamo da li je selektovani odg tacan
                ? "correct" // ako je tacan njega farbamo
                : "wrong" //ostale farmabamo u zuto
              : "" //ako nema odgovora nema dodavanja klase
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })} //pomocu ovoga utvrdjujemo koji je button pritisnut
          //index mozemo da dobijamo iz MAP metode jer prvi parametar kreira opcije kao objekte, a drugi indexe, broj pod kojim se nalaze odgovori
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
