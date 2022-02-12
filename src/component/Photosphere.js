import React, { useRef, useEffect } from "react";
import { Viewer } from "photo-sphere-viewer";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";
import { MarkersPlugin } from 'photo-sphere-viewer/dist/plugins/markers';
import "photo-sphere-viewer/dist/plugins/markers.css";
import { VirtualTourPlugin } from 'photo-sphere-viewer/dist/plugins/virtual-tour';
import "photo-sphere-viewer/dist/plugins/virtual-tour.css";

function Photosphere(props) {
  const sphereElementRef = useRef();
  const { src } = props;

  useEffect(() => {
    const shperePlayerInstance = new Viewer({
      container: sphereElementRef.current,
      panorama: src,
      plugins: [MarkersPlugin,VirtualTourPlugin]
    });

    // unmount component instructions
    return () => {
      shperePlayerInstance.destroy();
    };
  }, [src, sphereElementRef]); // will only be called when the src prop gets updated

  return <div className="ratio ratio-16x9 m-auto p-auto" ref={sphereElementRef} ></div>
}

export default Photosphere;
