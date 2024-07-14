import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ListCity from "./pages/ListCity";
import Agenda from "./pages/Agenda";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/listCity" element={<ListCity />}></Route>
        <Route path="/agenda" element={<Agenda />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
