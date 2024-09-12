import React, { useRef, useState } from "react";
import { data } from "../assets/data";

function QuizApp() {
  const [Index, setIndex] = useState(0);
  const [Question, setQuestion] = useState(data[Index]);
  const [Lock, setLock] = useState(false);
  const [Score, setScore] = useState(0);
  const [Result, setResult] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_array = [Option1, Option2, Option3, Option4];

  const checkAns = (e, ans) => {
    if (Lock == false) {
      if (Question.ans === ans) {
        e.target.classList.add("bg-green-300", "border-2", "border-green-600");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("bg-red-200", "border-2", "border-red-500");
        option_array[Question.ans - 1].current.classList.add(
          "bg-green-300",
          "border-2",
          "border-green-600"
        );
        setLock(true);
      }
    }
  };
  const Next = () => {
    if (Lock === true) {
      if (Index + 1 >= data.length) {
        setResult(true);
        return 0;
      }
      setIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        if (newIndex < data.length) {
          setQuestion(data[newIndex]);
        }
        return newIndex;
      });
      setLock(false);
      option_array.forEach((option) => {
        option.current.classList.remove(
          "bg-green-300",
          "border-green-600",
          "bg-red-200",
          "border-red-500"
        );
      });
    }
  };

  const Reset =()=>{
    setIndex(0)
    setQuestion(data[0])
    setLock(false)
    setResult(false)
    setScore(0)
  }
  return (
    <>
      <div className="h-[auto] p-10 w-[600px] bg-white rounded-3xl place-self-center   shadow-[10px_11px_23px_0px_#1a202c]">
        <h1 className="text-3xl font-semibold mb-4">Quiz App</h1>
        <hr className="mb-4 bg-black h-[3px] border-none" />
        {Result ? (
          <></>
        ) : (
          <>
            <h1 className="text-2xl">
              {Index + 1}. {Question.question}
            </h1>
            <div>
              <ul>
                <li
                  ref={Option1}
                  className="border-2 border-slate-600 p-4 mt-3 rounded-md text-xl"
                  onClick={(e) => {
                    checkAns(e, 1);
                  }}
                >
                  {Question.option1}
                </li>
                <li
                  ref={Option2}
                  className="border-2 border-slate-600 p-4 mt-3 rounded-md text-xl"
                  onClick={(e) => {
                    checkAns(e, 2);
                  }}
                >
                  {Question.option2}
                </li>
                <li
                  ref={Option3}
                  className="border-2 border-slate-600 p-4 mt-3 rounded-md text-xl"
                  onClick={(e) => {
                    checkAns(e, 3);
                  }}
                >
                  {Question.option3}
                </li>
                <li
                  ref={Option4}
                  className="border-2 border-slate-600 p-4 mt-3 rounded-md text-xl"
                  onClick={(e) => {
                    checkAns(e, 4);
                  }}
                >
                  {Question.option4}
                </li>
              </ul>
            </div>
            <button
              onClick={Next}
              className="bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-24 text-white font-semibold relative left-[140px] py-3 text-xl my-5 rounded-md"
            >
              Next
            </button>
            <h1 className="text-center text-lg font-medium">
              {Index + 1} of {data.length}
            </h1>
          </>
        )}
        {Result ? (
          <>
            <h2 className="text-center text-2xl font-medium">
              Your Score is {Score} out of {data.length}
            </h2>
            <button onClick={Reset} className="bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-24 text-white font-semibold relative left-[140px] py-3 text-xl my-5 rounded-md">
              Reset
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default QuizApp;
