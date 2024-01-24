// import DateCounter from "./DateCounter";
import { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import { useReducer } from "react";

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

    default:
      throw new Error("Action uknown");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch("http://localhost:8000/questions") //run it on mount
      .then((res) => res.json()) //we get response we need to convert in json
      .then((data) => dispatch({ type: "dataReceived", payload: data })) //will return another promise and we need to chain another then
      //and this gives us another data and we use that data
      .catch((err) => dispatch({ type: "dataFailed" })); //we catch errors
  });

  return (
    <div className="app">
      {/* <DateCounter /> */}
      <Header />

      <Main className="main">
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}
