import BusStationPhotosphere from "../component/BusStationPhotosphere";


function Home() {
  return (
    <div className="bg-dark">
      <div className="panorama-pic-box" style={{width:"100%",height:"100%"}}>
        <div className="container-fluid text-light p-5 text-center" style={{width:"80%"}}>
          <BusStationPhotosphere/>
        </div>
      </div>
    </div>
  );
}

export default Home;
