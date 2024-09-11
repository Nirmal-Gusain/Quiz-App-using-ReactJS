import React from "react";

function QuizApp() {
  return (
    <>
      <div className="h-[auto] p-10 w-[600px] bg-white rounded-3xl place-self-center   shadow-[10px_11px_23px_0px_#1a202c]">
        <h1 className="text-3xl font-semibold mb-4">Quiz App</h1>
        <hr className="mb-4 bg-black h-[3px] border-none"/>
        <h1 className="text-2xl">1. Which device is required for the internet connection?</h1>
        <div>
          <ul>
            <li className="border-2 border-slate-600 p-4 mt-3 rounded-md text-xl">Modem</li>
            <li className="border-2 border-slate-600 p-4 mt-3 rounded-md text-xl">Router</li>
            <li className="border-2 border-slate-600 p-4 mt-3 rounded-md text-xl">LAN Cable</li>
            <li className="border-2 border-slate-600 p-4 mt-3 rounded-md text-xl">Pen Drive</li>
          </ul>
        </div>
        <button className="bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-24 text-white font-semibold relative left-[140px] py-3 text-xl my-5 rounded-md">Next</button>
        <h1 className="text-center text-lg font-medium">1 of 5</h1>
      </div>
    </>
  );
}

export default QuizApp;
