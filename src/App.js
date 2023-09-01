
import { useState } from 'react';
import './App.css';
// import { HelloWorld, Welcome } from './components/HelloWord';
// import * as Components from './components/HelloWord';
import Components from "./components/HelloWord"
import Props from './components/Props';

function App() {

  let arrayOfNames = ["sandeep", "nayab"];
  const [arrayName, setArrayNames] = useState(arrayOfNames);
  function addNewName() {
    setArrayNames(oldNames=>([...oldNames, "raju"]))
  }
  return (
    <>
    {/* <Components.HelloWorld />
    <Components.Welcome /> */}
    {/* <Props name="sandeep" />   */}
    {/* <Props name="nayab" /> */}
    {
      arrayName.map((name, i)=><Props key={i} name={name} />)
    }
    <button onClick={addNewName}>Add another one</button>
    </>
  );
}

export default App;
