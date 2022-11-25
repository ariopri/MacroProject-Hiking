import LandingPage from "./pages/landingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import Protected from "./protected/Protected";
import AboutUs from "./pages/about/About";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Tips from "./pages/tips/Tips";
import Community from "./pages/community/Community";
import Article from "./pages/article/Article";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/tips" element={<Tips />} />
      <Route element={<Protected />}>
        <Route path="/article" element={<Article />} />
        <Route path="/community" element={<Community />} />
      </Route>
    </Routes>

  )
}

export default App;
