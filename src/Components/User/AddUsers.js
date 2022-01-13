import React ,{useState}from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const Adduser = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
  
    const addUserHandler = (event) => {
      event.preventDefault();
      console.log(enteredName, enteredAge);
    };
  
    const nameChangeHandler = (event) => {
      setEnteredName(event.target.value);
    };
  
    const ageChangeHandler = (event) => {
      setEnteredAge(event.target.value);
    };
  return (
    <Card className ={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="name">Name</label>
        <input onChange={nameChangeHandler} id="name" type="text"></input>
        <label htmlFor="age">Age</label>
        <input onChange={ageChangeHandler} id="age" type="number"></input>
        <Button type = "submit">Click to Add</Button>
      </form>
      </Card>
  );
};
export default Adduser;
