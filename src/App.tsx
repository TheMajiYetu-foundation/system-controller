import { BrowserRouter, Route, Routes } from "react-router-dom";
import ControlBoard from "./pages/ControlBoard";
import Home from "./pages/Home";
import HomeWrapper from "./ui/HomeWrapper";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeWrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/control" element = {<ControlBoard/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
