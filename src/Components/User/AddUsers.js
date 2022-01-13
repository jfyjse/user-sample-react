import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const Adduser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className ={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text"></input>
        <label htmlFor="age">Age</label>
        <input id="age" type="number"></input>
        <Button type = "submit">Click to Add</Button>
      </form>
      </Card>
  );
};
export default Adduser;
