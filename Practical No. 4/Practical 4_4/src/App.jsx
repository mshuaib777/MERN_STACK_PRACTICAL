import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Student Form</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Your Name: {name}</h3>
    </div>
  );
}

export default App;