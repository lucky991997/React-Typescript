import React from "react";
import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import PersonList from "./components/PersonList";
import Person from "./components/Preson";
import Counter from "./components/states/Counter";
import LoggedIn from "./components/states/LoggedIn";
import User from "./components/states/User";
import Status from "./components/Status";
import Title from "./components/Title";

function App() {
  const person = {
    firstName: 'Trần Quốc',
    lastName: 'Tuấn',
  }
  const personList = [
    { firstName: 'Trần Quốc', lastName: 'Tuấn', },
    { firstName: 'Huỳnh Thị ', lastName: 'Phương Linh', },
    { firstName: 'Đặng Thụy ', lastName: 'Trâm Anh', },
  ]
  const styles = {
    fontSize: "2rem",
    color: "red",
    textAlign: "center"  as const,
    // display: 'none'
  };
  return (
    <div className="App">
      <>
        {/* <Status status='success' />  
     <Heading>tutorial React - Typescript</Heading>
     <Oscar>
      <Heading>Hi guest!!! Wellcome to tutorial React - Typescript </Heading>
      <Title>Hi Trần Quốc Tuấn!!! Can you help me?</Title>
     </Oscar>
     <Button handleClick={(event) => {
       console.log("click button ", event);
     }} />
     <Input handleChange = {(event) => console.log(event.target.value)}/> */}
      </>
      {/* <Container
        styles={styles}
      />
      <Person name={person}/>
      <PersonList list={personList} /> */}
      {/* <LoggedIn name='Trần Quốc Tuấn'/> */}
      {/* <User/> */}
      <Counter/>
    </div>
  );
}

export default App;
