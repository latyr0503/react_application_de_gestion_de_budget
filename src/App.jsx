// import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import NoPage from "./Pages/NoPage";
import { AjoutDepense } from "./Pages/AjoutDepense";
import { AjoutRevenu } from "./Pages/AjoutRevenu";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard />} />
            {/* <Route path="blogs" element={<Blogs />} />*/}
            <Route path="ajoutdepense" element={<AjoutDepense />} />
            <Route path="ajoutrevenu" element={<AjoutRevenu />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
