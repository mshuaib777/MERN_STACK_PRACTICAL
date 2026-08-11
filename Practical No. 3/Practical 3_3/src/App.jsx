function App() {

  const num1 = 18;
  const num2 = 7;

  function add(a, b) {
    return a + b;
  }

  return (
    <div>

      <h2>Sum of Two Numbers</h2>

      <p>First Number: {num1}</p>

      <p>Second Number: {num2}</p>

      <h3>Sum = {add(num1, num2)}</h3>

    </div>
  );
}

export default App;