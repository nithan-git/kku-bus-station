import React, { useRef, useEffect } from "react";
import { Viewer } from "photo-sphere-viewer";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";

function Photo(props) {
  const sphereElementRef = useRef();
  const { src } = props;

  useEffect(() => {
    const shperePlayerInstance = new Viewer({
      container: sphereElementRef.current,
      panorama: src
    });

    // unmount component instructions
    return () => {
      shperePlayerInstance.destroy();
    };
  }, [src, sphereElementRef]); // will only be called when the src prop gets updated

  return <div className="photosphere" ref={sphereElementRef} />;
}

export default Photo;