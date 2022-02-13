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
    const shperePlayerInstance = new Viewer({
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
                id: "7",
                panorama: images["P7.JPG"],
                name: "P7",
                position: [102.827994, 16.472422],
                links: [{ nodeId: "8" }],
              },
              {
                id: "8",
                panorama: images["P8.JPG"],
                name: "P8",
                position: [102.826542, 16.4743],
                links: [{ nodeId: "7" }],
              },
            ],
            startNodeId: "7",
          },
        ],
      ],
    });

    return () => {
      shperePlayerInstance.destroy();
    };
  }, [sphereElementRef]);

  return (
    <div
      className="ratio ratio-16x9 m-auto p-auto"
      ref={sphereElementRef}
    ></div>
  );
}

export default BusStationPhotosphere;
