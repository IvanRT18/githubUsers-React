import { useState } from "react";

const UseStateObject = () => {
  // const [age, setAge] = useState(22);
  // const [name, setName] = useState("Ivan");
  // const [hobby, setHobby] = useState("play videogames");

  const [person, setPerson] = useState({
    age: 22,
    name: "Ivan",
    hobby: "play videogames",
  });

  const changeStates = () => {
    // setAge(30);
    // setName("John");
    // setHobby("Program");
    setPerson({ age: 30, name: "John", hobby: "program" });
  };

  return (
    <>
      <h3>{person.age}</h3>
      <h4>{person.name}</h4>
      <h4>Enjoys to: {person.hobby}</h4>
      <button className="btn" onClick={changeStates}>
        Show other
      </button>
    </>
  );
};

export default UseStateObject;
