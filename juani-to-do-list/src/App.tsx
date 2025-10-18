import { useState } from "react";
import { MyButton } from "./components/Button";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-md mx-auto px-4">
      <div className="text-center text-2xl  py-20 pb-8">
        <h1>Juani's To-Do list</h1>
      </div>
      <div>
        <MyButton title="New task" />
      </div>
      <div className="p-4">
        <ul>1</ul>
        <ul>2</ul>
        <ul>3</ul>
      </div>
    </div>
  );
}

export default App;
