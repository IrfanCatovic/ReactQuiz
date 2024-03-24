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
import { QuizProvider, useQuiz } from "./QuizContext";

export default function App() {
  const { status } = useQuiz();
  return (
    <>
      <div className="app">
        {/* <DateCounter /> */}

        <Header />

        <Main className="main">
          {status === "loading" && <Loader />}
          {status === "error" && <Error />}
          {status === "ready" && <StartScreen />}
          {status === "active" && (
            <>
              <Progress />
              <Question />
              <NextButton />
            </>
          )}
          {status === "finished" && <FinishScreen />}
        </Main>

        {/* <Bank /> */}
      </div>
    </>
  );
}
