import { useState } from "react";
import persons from "./data/persons";
import "./App.css";
import RandomNum from "./components/RandomNum";
import SimpleComponent from "./components/SimpleComponent";
import Counter from "./components/counter/Counter";
import Button from "./components/counter/Button";
import Persons from "./components/Persons";
import ResetCounter from "./components/counter/ResetCounter";

function App() {
  const [counter, setCounter] = useState(0);

  const texts = ["click me", "click", "press me", "hit me"];

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <div className="App">
      <SimpleComponent animal="cat" age="2" />
      <SimpleComponent animal="dog" age="5" />
      <SimpleComponent animal="bird" age="1" />
      <RandomNum maxnumber={10000} />
      <Counter counter={counter} />
      {texts.map((text, index) => {
        return <Button conter1={handleCounter} text={text} />;
      })}
      {counter > 0 && (
        <ResetCounter resetCounter={resetCounter} text={"Reset"} />
      )}
      {persons.map((person) => {
        return <Persons key={person.id} {...person} />;
      })}
    </div>
  );
}

export default App;
