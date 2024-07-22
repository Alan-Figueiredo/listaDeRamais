import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ListCity from "./pages/ListCity";
import Agenda from "./pages/Agenda";
import Admin from "./pages/Admin";
import PageAdmin from "./pages/PageAdmin";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/listCity" element={<ListCity />}></Route>
        <Route path="/agenda" element={<Agenda />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/pageAdmin" element={<PageAdmin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
