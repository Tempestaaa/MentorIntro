import "./App.css";
import Form from "./components/Form/Form";
import Intro from "./components/Intro/Intro";

function App() {
  return (
    <div className="app grid">
      <div className="container grid">
        <Intro />
        <Form />
      </div>
    </div>
  );
}

export default App;
