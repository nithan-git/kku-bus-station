import images from "../img/Images.js";

function Map() {
  return (
    <div className="container-fluid text-center bg-dark">
      <img className="img-fluid m-5" src={images['map.jpg']} alt="map" style={{width: "1000px",height:"100%"}}></img>
    </div>
    
  );
}

export default Map;
