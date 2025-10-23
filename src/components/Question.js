import Options from "./Options";
import { useQuiz } from "./QuizContext";

function Question() {
  const { questions, index } = useQuiz();
  const question = questions.at(index);
  return (
    <div>
      <h4>{question.question}</h4>
      {console.log(question.question)}
      <Options question={question} />
    </div>
  );
}

export default Question;
