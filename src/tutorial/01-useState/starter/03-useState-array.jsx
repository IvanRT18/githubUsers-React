import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removePeople = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
    console.log(newPeople);
  };

  const clearPeople = () => {
    setPeople([]);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button
              type="button"
              className="btn"
              onClick={() => {
                removePeople(id);
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
      <button
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={() => setPeople([])}
      >
        Clear all
      </button>
    </>
  );
};

export default UseStateArray;
