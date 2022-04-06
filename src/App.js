import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.scss';
import ProjectsTable from "./components/common/ProjectsTable";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/projectTable" element={<ProjectsTable />}></Route>
      <Route path="/" element={<App />}>
      
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
