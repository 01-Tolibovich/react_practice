import { useState } from "react";
import persons from "./data/persons";
import "./App.css";
import RandomNum from "./components/RandomNum";
import SimpleComponent from "./components/SimpleComponent";
import Counter from "./components/counter/Counter";
import Button from "./components/counter/Button";
import Persons from "./components/Persons";

function App() {
  const [counter, setCounter] = useState(0);

  const texts = ["click me", "click", "press me", "hit me"];

  const handleCounter = () => {
    setCounter(counter + 1);
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
      {persons.map((person, id) => {
        return (
          <Persons
            key={id}
            firstName={person.first_name}
            lastName={person.last_name}
            email={person.email}
            image={person.image}
          />
        );
      })}
    </div>
  );
}

export default App;
