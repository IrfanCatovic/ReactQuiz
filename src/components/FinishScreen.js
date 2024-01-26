function FinishScreen({ points, maxPosiblePoints }) {
  const precentage = (points / maxPosiblePoints) * 100;
  return (
    <p className="result">
      You scored <strong>{points} </strong> out of {maxPosiblePoints} (
      {Math.ceil(precentage)}%)
    </p>
  );
}

export default FinishScreen;
