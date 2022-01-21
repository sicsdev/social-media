import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Social from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assests/css/style.css";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <div className="main-wrapper">
            <Routes>
              <Route path="/" element={<Social />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
