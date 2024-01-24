// import DateCounter from "./DateCounter";
import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import Question from "./Question";
import StartScreen from "./StartScreen";

const initialState = {
  questions: [],

  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading", //handling statuses of aplication
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
      };

    default:
      throw new Error("Action uknown");
  }
}

export default function App() {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);

  const numQuestions = questions.length; // ovo je question is REDUCERA

  useEffect(function () {
    fetch("http://localhost:8000/questions") //run it on mount
      .then((res) => res.json()) //we get response we need to convert in json
      .then((data) => dispatch({ type: "dataReceived", payload: data })) //will return another promise and we need to chain another then and this gives us another data and we use that data

      .catch((err) => dispatch({ type: "dataFailed" })); //we catch errors
  }, []);

  return (
    <div className="app">
      {/* <DateCounter /> */}
      <Header />

      <Main className="main">
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && <Question />}
      </Main>
    </div>
  );
}
