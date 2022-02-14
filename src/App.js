import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './page/Home';



function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Home/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
