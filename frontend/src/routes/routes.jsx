import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ListCity from "../pages/ListCity";
import Agenda from "../pages/Agenda";
import Admin from "../pages/Admin";
import PageAdmin from "../pages/PageAdmin";
import PageEditRamal from "../pages/PageEditRamal";
import PageEdit from "../pages/PageEditRamal/pageEdit";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listCity" element={<ListCity />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/pageAdmin" element={<PageAdmin />} />
        <Route path="/pageEditRamal" element={<PageEditRamal />} />
        <Route path="/pageEdit/:id" element={<PageEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
