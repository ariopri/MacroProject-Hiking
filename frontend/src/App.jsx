import LandingPage from "./pages/landingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import Protected from "./protected/Protected";
import AboutUs from "./pages/about/About";
import Login from "./pages/login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route element={<Protected />}>
        <Route path="/about" element={<AboutUs />} />
      </Route>
    </Routes>

  )
}

export default App;
