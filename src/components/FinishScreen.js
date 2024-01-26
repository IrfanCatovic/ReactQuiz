function FinishScreen({ points, maxPosiblePoints, highScore }) {
  const precentage = (points / maxPosiblePoints) * 100;

  let emoji;
  if (precentage === 100) emoji = "🥇";
  if (precentage >= 80 && precentage < 100) emoji = "🥈";
  if (precentage >= 50 && precentage < 80) emoji = "🥉";
  if (precentage >= 30 && precentage < 50) emoji = "🤔";
  if (precentage >= 0 && precentage < 30) emoji = "😢";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points} </strong> out of{" "}
        {maxPosiblePoints} ({Math.ceil(precentage)}%)
      </p>
      <p className="highscore">
        (Highscore: <strong> {highScore} </strong> points)
      </p>
    </>
  );
}

export default FinishScreen;
