import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageAbout from "./pages/PageAbout";
import PageHome from "./pages/PageHome";
import PageProfile from "./pages/PageProfile";

export default function ExampleV05() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageHome />} />

          <Route path="/about" element={<PageAbout />} />

          <Route path="/profile/:username"
            element={<PageProfile/>} />

          <Route path="*" element={<div>Error 404</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
