import "./App.css";
import Form from "./components/Form/Form";
import Intro from "./components/Intro/Intro";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Intro />
        <Form />
      </div>
    </div>
  );
}

export default App;
