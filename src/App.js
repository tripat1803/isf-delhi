import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import SpeakerInfo from "./pages/Speaker";
import NotFound from "./pages/404";

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/not-found" element={<NotFound/>}/>
        <Route path="/:id" element={<SpeakerInfo/>}/>
      </Routes>
      <Footer/>
    </Fragment>
  );
}

export default App;
