function Progress({ index, numQuestions, points, maxPosiblePoints }) {
  return (
    <header className="progress">
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPosiblePoints}
      </p>
    </header>
  );
}

export default Progress;
