import BusStationPhotosphere from "../component/BusStationPhotosphere";
import images from "../img/Images.js";

function Home() {
  return (
    <div className="bg-dark">
      <div className="main-box bg-white text-center">
        <div className="scroll-box">
          <img className="img-fluid m-5" src={images['kku-bus.png']} alt="kku-bus"></img>
          <div className="main-det">
            <p>kku bus station</p>
            <p>สายสีม่วง</p>
          </div>
        </div>
      </div>
      <div className="panorama-pic-box" style={{width:"100%",height:"100%"}}>
        <div className="container-fluid text-light p-5 text-center" style={{width:"80%"}}>
          <BusStationPhotosphere/>
        </div>
      </div>
    </div>
  );
}

export default Home;
