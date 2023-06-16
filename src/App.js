import { Route, Routes } from "react-router-dom";
import "./App.css";
import TriviaApp from "./components/TriviaApp";
import Chuck from "./components/Chuck";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route index path="/" element={<TriviaApp />}></Route>
        <Route path="/chuck" element={<Chuck />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
