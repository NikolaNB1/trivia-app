import { Route, Routes } from "react-router-dom";
import "./App.css";
import TriviaApp from "./components/TriviaApp";
import Chuck from "./components/Chuck";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<TriviaApp />}></Route>
      <Route path="/chuck" element={<Chuck />}></Route>
    </Routes>
  );
}

export default App;
