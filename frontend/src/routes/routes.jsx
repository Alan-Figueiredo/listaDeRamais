import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ListCity from "../pages/ListCity";
import Agenda from "../pages/Agenda";
import Admin from "../pages/Admin";
import PageAdmin from "../pages/PageAdmin";
import PageNewRamal from "../pages/pageNewRamal";
import PageEdit from "../pages/pageNewRamal/pageEdit";

function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list-city" element={<ListCity />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/page-admin" element={<PageAdmin />} />
        <Route path="/page-new-ramal" element={<PageNewRamal />} />
        <Route path="/page-edit/:id" element={<PageEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
