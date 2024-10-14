import React from "react";
import Counter from "./components/Counter";

function App() {
  const testText = () => {
    console.log('this is text');
    return 'this is text';
  }
  return (
    <div className="App">
      <h2>Mini React Project</h2>
      {/* Inner function */}
      <span>{testText()}</span>

      {/* imported function/component */}
      <Counter />
    </div>
  );
};

export default App;
