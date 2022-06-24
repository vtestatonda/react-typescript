import { useState, useEffect } from "react";
import "./App.css";
import List from "./components/list";
import Form from "./components/form";

interface Sub {
  nick: string;
  avatar: string;
  subMonths: number;
  description?: string;
}
//setting types in array

interface AppState {
  subs: Array<Sub>;
}

const INITIAL_STATE = [
  {
    nick: "dapelu",
    subMonths: 3,
    avatar: "http://i.pravatar.cc/150?u=dapelu",
    description: "Dapelu hace de moderador a veces",
  },
  {
    nick: "sergio_serrano",
    subMonths: 7,
    avatar: "http://i.pravatar.cc/150?u=sergio_serrano",
  },
];
//initial information

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  //the type is a array of sub, another form is puting "Sub[]"

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);
  //first time rendering use the initial_state

  /*
   const [subs, setSubs] = useState([
    {
      nick: "dapelu",
      subMonths: 3,
      avatar: "http://i.pravatar.cc/150?u=dapelu",
      description: "Dapelu hace de moderador a veces",
    },
    {
      nick: "sergio_serrano",
      subMonths: 7,
      avatar: "http://i.pravatar.cc/150?u=sergio_serrano",
    },
 // This was another form to do  previous coding, this form is not used!!
    */

  return (
    <div className="App">
      <h1>midu subs</h1>
      <List subs={subs} />
      <Form />
    </div>
  );
}

export default App;
