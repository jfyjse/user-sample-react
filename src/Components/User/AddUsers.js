import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const Adduser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      console.log("empty name or age");
      return;
    }

    if (+enteredAge < 1) {
      console.log("neg val for age not allowed");
      return;
    }
    console.log(enteredName, enteredAge);
    setEnteredName("");
    setEnteredAge("");
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="name">Name</label>
        <input
          value={enteredName}
          onChange={nameChangeHandler}
          id="name"
          type="text"
        ></input>
        <label htmlFor="age">Age</label>
        <input
          value={enteredAge}
          onChange={ageChangeHandler}
          id="age"
          type="number"
        ></input>
        <Button type="submit">Click to Add</Button>
      </form>
    </Card>
  );
};
export default Adduser;
