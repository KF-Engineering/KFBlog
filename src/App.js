import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Global} from "./styles/themeHandler";
import { ThemeLookup } from "./styles/themeLookup";
import Home from "./views/Home";
import Article from "./views/Article";
import EditArticle from "./views/EditArticle";
import StrippedNewArticle from "./views/StrippedNewArticle";
import Footer from "./components/Footer";
import Social from "./components/Socials";
import Login from "./views/Login";
import Register from "./views/Register";

function App() {
  const [rerender] = useState(false);
  useEffect(() => {
    Global();
  }, [rerender]);

  window.apiUrl = "http://3.74.43.69/api/";

  return (
    <div id="App" className="KF">
      <Router>
        <Routes>
          <Route path="/*" element={<ThemeLookup />} />
          <Route path="/" element={<Home />} />
          <Route path="/Articles/:params" element={<Article />} />
          <Route path="/editArticle/:id" element={<StrippedNewArticle />} />
          <Route path="/Nope/:params" element={<EditArticle />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
        <Social />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
