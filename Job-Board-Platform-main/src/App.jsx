import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import JobForm from "./components/JobForm";
import JobDetails from "./pages/JobDetails";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutPage from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/post-job" element={<JobForm />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
