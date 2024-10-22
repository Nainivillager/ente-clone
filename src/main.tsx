import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";

import "./index.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <div>
        <Navbar />
      </div>
    </Router>
    <App />
    <Footer />
  </StrictMode>
);
