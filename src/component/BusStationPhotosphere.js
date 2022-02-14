import React, { useRef, useEffect } from "react";
import { Viewer } from "photo-sphere-viewer";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";
import { MarkersPlugin } from "photo-sphere-viewer/dist/plugins/markers";
import "photo-sphere-viewer/dist/plugins/markers.css";
import { VirtualTourPlugin } from "photo-sphere-viewer/dist/plugins/virtual-tour";
import "photo-sphere-viewer/dist/plugins/virtual-tour.css";
import images from "../img/Images.js";

function BusStationPhotosphere() {
  const sphereElementRef = useRef();

  useEffect(() => {
    new Viewer({
      container: sphereElementRef.current,
      caption: "pani and pun <b>&copy; MaskedRiderDouble</b>",
      plugins: [
        MarkersPlugin,
        [
          VirtualTourPlugin,
          {
            positionMode: "gps",
            renderMode: "3d",
            dataMode: "client",
            nodes: [
              {
                id: "1",
                panorama: images["P1.jpg"],
                name: "P1",
                position: [102.81532, 16.469671666666667],
                links: [{ nodeId: "2" }, { nodeId: "3" }],
              },
              {
                id: "2",
                panorama: images["P2.jpg"],
                name: "P2",
                position: [102.81639888888888, 16.469959999999997],
                links: [{ nodeId: "1" }, { nodeId: "16" }, { nodeId: "3" }],
              },
              {
                id: "3",
                panorama: images["P3.jpg"],
                name: "P3",
                position: [102.81606277777777, 16.469038055555554],
                links: [{ nodeId: "1" }, { nodeId: "2" }],
              },
              {
                id: "7",
                panorama: images["P7.JPG"],
                name: "P7",
                position: [102.827994, 16.472422],
                links: [{ nodeId: "8" }, { nodeId: "10" }],
                markers: [
                  {
                    id: "P7-marker-1",
                    image: "https://photo-sphere-viewer.js.org/assets/pin-red.png",
                    tooltip: "ตึก GL",
                    width: 32,
                    height: 32,
                    anchor: "bottom center",
                    longitude: 0.856,
                    latitude: 0.212,
                  },
                  {
                    id: "P7-marker-2",
                    image: "https://photo-sphere-viewer.js.org/assets/pin-red.png",
                    tooltip: "ที่รอรถบัส",
                    width: 32,
                    height: 32,
                    anchor: "bottom center",
                    longitude: 1.368,
                    latitude: 0.131,
                  },
                  {
                    id: "P7-marker-3",
                    image: "https://photo-sphere-viewer.js.org/assets/pin-red.png",
                    tooltip: "ที่รอรถบัส",
                    width: 32,
                    height: 32,
                    anchor: "bottom center",
                    longitude: 4.321,
                    latitude: 0.303,
                  },
                  {
                    id: "P7-marker-4",
                    image: "https://photo-sphere-viewer.js.org/assets/pin-red.png",
                    tooltip: "คณะสถาปัตยกรรมศาสตร์",
                    width: 32,
                    height: 32,
                    anchor: "bottom center",
                    longitude: 3.628,
                    latitude: 0.154,
                  },
                  {
                    id: "P7-marker-5",
                    image: "https://photo-sphere-viewer.js.org/assets/pin-red.png",
                    tooltip: "ที่จอดรถ",
                    width: 32,
                    height: 32,
                    anchor: "bottom center",
                    longitude: 1.86,
                    latitude: 0.048,
                  }
                ],
              },
              {
                id: "8",
                panorama: images["P8.JPG"],
                name: "P8",
                position: [102.826542, 16.4743],
                links: [{ nodeId: "7" }, {nodeId: "9"} ,{ nodeId: "10" }],
              },
              {
                id: "9",
                panorama: images["P9.JPG"],
                name: "P9",
                position: [102.82529722222222, 16.474502777777776],
                links: [{ nodeId: "8" }, { nodeId: "10" }],
              },
              {
                id: "10",
                panorama: images["P10.JPG"],
                name: "P10",
                position: [102.82826666666666, 16.47458611111111],
                links: [{ nodeId: "7" }, { nodeId: "8" }, { nodeId: "11" }],
              },
              {
                id: "11",
                panorama: images["P11.JPG"],
                name: "P11",
                position: [102.82633333333332, 16.47677222222222],
                links: [{ nodeId: "10" }, { nodeId: "12" }],
              },
              {
                id: "12",
                panorama: images["P12.JPG"],
                name: "P12",
                position: [102.8229861111111, 16.47712222222222],
                links: [{ nodeId: "11" }, { nodeId: "13" }],
              },
              {
                id: "13",
                panorama: images["P13.JPG"],
                name: "P13",
                position: [102.82086388888888, 16.47748611111111],
                links: [{ nodeId: "12" }, { nodeId: "14" }],
              },
              {
                id: "14",
                panorama: images["P14.JPG"],
                name: "P14",
                position: [102.81878611111111, 16.477641666666663],
                links: [{ nodeId: "13" }, { nodeId: "15" }],
              },
              {
                id: "15",
                panorama: images["P15.jpg"],
                name: "P15",
                position: [102.81607444444444, 16.47636972222222],
                links: [{ nodeId: "14" }, { nodeId: "16" }],
              },
              {
                id: "16",
                panorama: images["P16.jpg"],
                name: "P16",
                position: [102.81648055555556, 16.473229166666666],
                links: [{ nodeId: "15" }, { nodeId: "2" }],
              },
            ],
            startNodeId: "9",
          },
        ],
      ],
    });
  }, [sphereElementRef]);

  return (
    <div
      className="ratio ratio-16x9 m-auto p-auto"
      ref={sphereElementRef}
    ></div>
  );
}

export default BusStationPhotosphere;
