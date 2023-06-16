import { Route, Routes } from "react-router-dom";
import "./App.css";
import TriviaApp from "./components/TriviaApp";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<TriviaApp />}></Route>
    </Routes>
  );
}

export default App;
