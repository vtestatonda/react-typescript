import { useState, useRef, useEffect } from "react";
import "./App.css";
import List from "./components/list";
import Form from "./components/form";
import { Sub } from "./types";

interface AppState {
  subs: Array<Sub>;
  newSubsNumber: number;
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
  //this functions calls hooks. the type is an "array of sub", another form is puting "Sub[]"

  const divRef = useRef<HTMLDivElement>(null);
  //hook donde puedes guardar un valor que se queda guardado entre renderizados pero no cauza un renderizado

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

  const handleNewSub = (newSub: Sub): void =>
    setSubs((subs) => [...subs, newSub]);

  return (
    <div className="App" ref={divRef}>
      <h1>midu subs</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
