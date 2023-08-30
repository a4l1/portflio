import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./Companets/Header/Header";
import { About } from "./Pages/About/About";
import { Contact } from "./Pages/Contact/Contact";
import { Services } from "./Pages/Services/Services";
import Modal from "./Companets/Modal/Modal";
import { useState } from "react";


function App() {
  const [modal, setModal] = useState(false);


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Modal modal={modal} setModal={setModal} />

        <Routes>
          <Route path="/" element={<About modal={modal} setModal={setModal} />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
