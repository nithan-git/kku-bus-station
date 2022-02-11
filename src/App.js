import Photo from './component/Photo';
import img360 from "./img/360.jpeg";
import img_P8 from "./img/P8.JPG";

function App() {
  return (
    <div className="container-fluid bg-dark text-light p-5 text-center">
      <h1>hello</h1>
      <Photo src={img_P8} />
    </div>
  );
}

export default App;
