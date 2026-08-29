import { useState } from "react";

function App() {
  const [fruits] = useState([
    "Apple",
    "Mango",
    "Banana",
    "Orange"
  ]);

  return (
    <div>
      <h2>Fruit List</h2>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;