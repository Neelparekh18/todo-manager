import { useState } from "react";

import "./App.css";
import TodoComponent from "./Components/TodoComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1 className='text-center text-blue-600 bg-pink-400'>Neel</h1> */}
      <TodoComponent />
    </>
  );
}

export default App;
