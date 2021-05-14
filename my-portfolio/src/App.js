import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="sidebarw">
          <Sidebar />
        </div>
        <div className="main__body">
          {/* <div className="fade"></div> */}
          <HomePage />
        </div>
        <main>
          {/* <Switch><Route exact path="/" component={}/></Switch> */}
        </main>
      </div>
    </Router>
  );
}

export default App;
