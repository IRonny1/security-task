import { BrowserRouter } from "react-router-dom";

import RoutesProvider from "./client/configs/RoutesProvider/RoutesProvider";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <RoutesProvider />
      </BrowserRouter>
    </div>
  );
}

export default App;
