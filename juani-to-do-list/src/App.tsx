import { useState } from "react";
import { Button } from "./components/Button";
import { List } from "./components/List";
import "./App.css";

function App() {
  const [data, setData] = useState<string[]>([
    "Bring Snorri a Argentine poncho",
    "Bring Snorri a Dulce de leche",
    "Bring Snorri Tango shoes",
  ]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      setData([...data, input]);
      setInput("");
    }
  };

  const handleDelete = (index: number) => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="text-center text-4xl  py-20 pb-8">
        <h1>Juani's To-Do list</h1>
      </div>

      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          placeholder="Add new task..."
          className="border-2 px-4 py-2 rounded-lg mr-2"
        ></input>
        <Button type="add" onClick={handleAdd} />
      </div>
      <div className="p-4">
        <List data={data} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
