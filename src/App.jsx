import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Profile from "./pages/Profile.jsx";
import Data from "./pages/Data.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={Profile} />
        <Route path="/data" exact component={Data} />
      </BrowserRouter>
    </>
  );
}

export default App;
