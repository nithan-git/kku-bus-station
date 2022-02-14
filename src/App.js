import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './page/Home';
import Map from './page/Map';
import Contact from './page/Contact';



function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/Map" element={<Map/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
