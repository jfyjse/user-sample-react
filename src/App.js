import React from "react";
import Adduser from "./Components/User/AddUsers";
import UsersList from "./Components/User/UsersList";

function App() {
  return (
    <div>
      <Adduser></Adduser>
      <UsersList users ={[]}></UsersList>
    </div>
  );
}

export default App;
