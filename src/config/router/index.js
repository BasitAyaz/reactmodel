import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./router";

export default function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
