function App() {

  const today = new Date();

  return (

    <div>

      <h2>Current Date and Time</h2>

      <h3>{today.toLocaleDateString()}</h3>

      <h3>{today.toLocaleTimeString()}</h3>

    </div>

  );
}

export default App;