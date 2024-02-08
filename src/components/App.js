// import DateCounter from "./DateCounter";
import { useEffect, useReducer } from "react";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";

import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import Question from "./Question";
import StartScreen from "./StartScreen";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";

import Bank from "../BankApp/Bank";

const initialState = {
  questions: [],

  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading", //handling statuses of aplication
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
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
    case "newAnswer":
      const question = state.questions.at(state.index); //na osnovu ovoga znamo koje je pitanje selektovano
      //ovaj index dobijamo kada u OPTIONS cliknemo i onClick salje type: newAnswer, payload: index

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };

    case "finish":
      return {
        ...state,
        status: "finished",
        highScore:
          state.points > state.highScore ? state.points : state.highScore, //dodajemo novi high score
      };
    case "restart":
      return {
        ...state,
        index: 0,
        answer: null,
        points: 0,
        status: "active",
      };

    default:
      throw new Error("Action uknown");
  }
}

export default function App() {
  const [{ questions, status, index, answer, points, highScore }, dispatch] =
    useReducer(reducer, initialState);

  const numQuestions = questions.length; // ovo je question is REDUCERA
  const maxPosiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points, //istrazi na chatGPT kako radi tacno
    0
    //reduce prolazi kroz ceo niz i razlaze ga
    //imamo pocetnu vrednost, prethodnu vrednost i trenutnu
    // pocetna nam je 0, prethodna je 0 + cur
  );

  useEffect(function () {
    fetch("http://localhost:8000/questions") //run it on mount
      .then((res) => res.json()) //we get response we need to convert in json
      .then((data) => dispatch({ type: "dataReceived", payload: data })) //will return another promise and we need to chain another then and this gives us another data and we use that data

      .catch((err) => dispatch({ type: "dataFailed" })); //we catch errors
  }, []);

  return (
    <>
      <div className="app">
        {/* <DateCounter /> */}
        <Header />

        <Main className="main">
          {status === "loading" && <Loader />}
          {status === "error" && <Error />}
          {status === "ready" && (
            <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
          )}
          {status === "active" && (
            <>
              <Progress
                index={index}
                numQuestions={numQuestions}
                points={points}
                maxPosiblePoints={maxPosiblePoints}
                answer={answer}
              />
              <Question
                questions={questions[index]}
                dispatch={dispatch}
                answer={answer}
              />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numQuestions={numQuestions}
              />
            </>
          )}
          {status === "finished" && (
            <FinishScreen
              points={points}
              maxPosiblePoints={maxPosiblePoints}
              highScore={highScore}
              dispatch={dispatch}
            />
          )}
        </Main>

        {/* <Bank /> */}
      </div>
    </>
  );
}
