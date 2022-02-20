import images from "../img/Images.js";

function Map() {
  return (
    <div className="text-center bg-dark">
      <div className="main-box bg-white text-center">
        <div className="scroll-box">
          <img className="bus-img img-fluid m-5" src={images['kku-bus.png']} alt="kku-bus"></img>
          <div className="main-det">
            <p>kku bus station</p>
            <p>สายสีม่วง</p>
          </div>
        </div>
      </div>
      <img className="img-fluid m-5" src={images['map.jpg']} alt="map" style={{width: "1000px",height:"100%"}}></img>
    </div>
    
  );
}

export default Map;
