import { Route, Routes } from "react-router-dom";

// views
import HomeView from "./views/Home";
import Navbar from "./components/navbar";
import LocationView from "./views/Location";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/location" element={<LocationView />} />
      </Routes>
      <Footer />
    </>
  );
}
