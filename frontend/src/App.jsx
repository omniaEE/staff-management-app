import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Employees from "./pages/Employees";
import Tasks from "./pages/Tasks";
import Reports from "./pages/Reports";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Employees />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/reports" element={<Reports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
