import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Index from "./Components/Index";
import Menu from "./Components/Menu";
import Problem1 from "./Components/Problem-1";
import Problem2 from "./Components/Problem-2";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/" element={<Menu />}>
        <Route path="problem-1" element={<Problem1 />} />
        <Route path="problem-2" element={<Problem2 />} />
      </Route>
    </Routes>
  );
}

export default App;
