function Question({ questions }) {
  return (
    <div>
      <h4>{questions.question}</h4>

      <div className="options">
        {questions.options.map((option) => (
          <button className="btn btn-option">{option}</button>
        ))}
      </div>
    </div>
  );
}

export default Question;
