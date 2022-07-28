import { useState, createContext } from "react";

const ResultContext = createContext();


function ResultProvider(props) {
  const [result,setResult] = useState({})
  const data = {
    result: result,
    setResultData: setResultData
  };

  function setResultData(props){
    setResult(props);
  }


  return (
    <ResultContext.Provider value={data}>
      {props.children}
    </ResultContext.Provider>
  );
};

export {ResultContext, ResultProvider}