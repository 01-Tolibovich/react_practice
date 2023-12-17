import { useState } from "react";
import { generateRandomNum } from "../utils/generateRandomNum";

function RandomNum({ maxnumber }) {
  const [randomNum, setRandomNum] = useState(generateRandomNum(maxnumber));

  const handleRandomNum = () => {
    setRandomNum(generateRandomNum(maxnumber));
  };

  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={handleRandomNum}>Generate random number</button>
    </div>
  );
}

export default RandomNum;
