import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.scss';
import ProjectsTable from "./components/common/ProjectsTable";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <ProjectsTable />
      </header>
    </div>
  );
}

export default App;
