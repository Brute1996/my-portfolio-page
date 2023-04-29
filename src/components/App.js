import { Route, Routes } from "react-router-dom";
import Skills from "../pages/Skills";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import { MainLayout } from "./MainLayout/MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
