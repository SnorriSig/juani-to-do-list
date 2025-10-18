import { useState } from "react";
import { Button } from "./components/Button";
import { List } from "./components/List";
import "./App.css";

let data: string[] = ["Bring Snorri a Argentine poncho", "Bring Snorri a Dulce de leche", "Bring Snorri Tango shoes" ]



function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="text-center text-4xl  py-20 pb-8">
        <h1>Juani's To-Do list</h1>
      </div>
      <div>
        <Button title="New task" />
      </div>
      <div className="p-4">
        <List data={data} />
      </div>
    </div>
  );
}

export default App;
