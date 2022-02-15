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
      loadingImg: images["loading.gif"],
      navbar: [
        "zoom",
        "caption",
        "markers",
        "markersList",
        "nodesList",
        "fullscreen",
      ],
      plugins: [
        MarkersPlugin,
        [
          VirtualTourPlugin,
          {
            positionMode: "gps",
            renderMode: "3d",
            dataMode: "client",
            arrowStyle: {
              color: 0x30a7fc,
              hoverColor: 0x30fc48,
              opacity: 0.8,
              scale: [0.5, 2],
            },
            arrowPosition: "bottom",
            nodes: [
              {
                id: "1",
                panorama: images["P1.jpg"],
                name: "P1",
                position: [102.81532, 16.469671666666667],
                links: [{ nodeId: "2" }, { nodeId: "3" }],
                markers: [
                  {
                    id: "P1-marker-1",
                    image: images["pin-red.png"],
                    longitude: 6.041,
                    latitude: 0.262,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "อาคาร สิริ คุณากร",
                      position: "top center",
                    },
                    content: `<h1>อาคาร สิริ คุณากร</h1>
                    <img class="img-fluid my-3" src="img/P1-marker-1.png" alt="อาคาร สิริ คุณากร">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">อาคารสิริคุณากรเป็นอาคารสำนักงานอธิการบดี มหาวิทยาลัยขอนแก่น  
                    ซึ่งได้รับพระมหากรุณาธิคุณ  
                    สมเด็จพระเทพรัตนราชสุดาฯ สยามบรมราชกุมารี  
                    เสด็จพระราชดำเนินทรงประกอบพิธีวางศิลาฤกษ์ 
                    เมื่อวันที่ ๒๒ ธันวาคม พ.ศ. ๒๕๔๘  
                    และพระราชทานชื่ออาคารนามว่า 
                    “อาคารสิริคุณากร(อาคารที่มีความดีงามและเป็นสิริมงคล) 
                    และพระราชทานพระราชานุญาตให้เชิญอักษรพระนามาภิไธย “ส.ธ.” 
                    ประดิษฐานเหนือชื่ออาคาร  
                    เมื่อวันที่ ๒๓ ธันวาคม พ.ศ. ๒๕๕๓ 
                    สมเด็จพระเทพรัตนราชสุดาฯ 
                    สยามบรมราชกุมารี  
                    เสด็จพระราชดำเนินทรงประกอบพิธีเปิดอาคารสิริคุณากร 
                    นับเป็นพระมหากรุณาธิคุณแก่มหาวิทยาลัยขอนแก่น</p>`,
                  },
                  {
                    id: "P1-marker-2",
                    image: images["pin-red.png"],
                    longitude: 4.977,
                    latitude: 0.08,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "อุทยานแปลงเกษตร มข",
                      position: "top center",
                    },
                  },
                  {
                    id: "P1-marker-3",
                    image: images["pin-red.png"],
                    longitude: 1.661,
                    latitude: 0.067,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "หอศิลป์ คณะศิลปกรรมศาสตร์",
                      position: "top center",
                    },
                  },
                  {
                    id: "P1-marker-4",
                    image: images["pin-red.png"],
                    longitude: 2.264,
                    latitude: -0.116,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "ที่จอดรถบัส",
                      position: "top center",
                    },
                  },
                  {
                    id: "P1-marker-5",
                    image: images["pin-red.png"],
                    longitude: 0.705,
                    latitude: 0.135,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "การสื่อสารองค์กร มหาวิทยาลัยขอนแก่น",
                      position: "top center",
                    },
                  },
                ],
              },
              {
                id: "2",
                panorama: images["P2.jpg"],
                name: "P2",
                position: [102.81639888888888, 16.469959999999997],
                links: [{ nodeId: "1" }, { nodeId: "16" }, { nodeId: "3" }],
                markers: [
                  {
                    id: "P2-marker-1",
                    image: images["pin-red.png"],
                    longitude: 5.708,
                    latitude: 0.096,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "ที่รอรสบัส",
                      position: "top center",
                    },
                  },
                  {
                    id: "P2-marker-2",
                    image: images["pin-red.png"],
                    longitude: 2.104,
                    latitude: 0.074,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "คณะศิลปกรรมศาสตร์",
                      position: "top center",
                    },
                  },
                  {
                    id: "P2-marker-3",
                    image: images["pin-red.png"],
                    longitude: 3.604,
                    latitude: 0.035,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "วงเวียน",
                      position: "top center",
                    },
                  },
                  {
                    id: "P2-marker-4",
                    image: images["pin-red.png"],
                    longitude: 2.575,
                    latitude: 0.029,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "หอศิลป์ คณะศิลปกรรมศาสตร์",
                      position: "top center",
                    },
                  },
                ],
              },
              {
                id: "3",
                panorama: images["P3.jpg"],
                name: "P3",
                position: [102.81606277777777, 16.469038055555554],
                links: [{ nodeId: "1" }, { nodeId: "2" }],
                markers: [
                  {
                    id: "P3-marker-1",
                    image: images["pin-red.png"],
                    longitude: 3.646,
                    latitude: 0.465,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "ที่รอรถบัส",
                      position: "top center",
                    },
                  },
                  {
                    id: "P3-marker-2",
                    image: images["pin-red.png"],
                    longitude: 2.201,
                    latitude: -0.078,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "ที่จอดรถ",
                      position: "top center",
                    },
                  },
                  {
                    id: "P3-marker-3",
                    image: images["pin-red.png"],
                    longitude: 5.928,
                    latitude: 0.164,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "อาคาร สิริ คุณากร",
                      position: "top center",
                    },
                  },
                  {
                    id: "P3-marker-4",
                    image: images["pin-red.png"],
                    longitude: 6.283,
                    latitude: 0.092,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "การสื่อสารองค์กร มหาวิทยาลัยขอนแก่น",
                      position: "top center",
                    },
                  },
                  {
                    id: "P3-marker-5",
                    image: images["pin-red.png"],
                    longitude: 0.472,
                    latitude: 0.082,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "ที่รอรถบัส",
                      position: "top center",
                    },
                  },
                ],
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
                    image: images["pin-red.png"],
                    tooltip: "ตึก GL",
                    width: 32,
                    height: 32,
                    anchor: "bottom center",
                    longitude: 0.856,
                    latitude: 0.212,
                  },
                  {
                    id: "P7-marker-2",
                    image: images["pin-red.png"],
                    tooltip: "ที่รอรถบัส",
                    width: 32,
                    height: 32,
                    anchor: "bottom center",
                    longitude: 1.368,
                    latitude: 0.131,
                  },
                  {
                    id: "P7-marker-3",
                    image: images["pin-red.png"],
                    tooltip: "ที่รอรถบัส",
                    width: 32,
                    height: 32,
                    anchor: "bottom center",
                    longitude: 4.321,
                    latitude: 0.303,
                  },
                  {
                    id: "P7-marker-4",
                    image: images["pin-red.png"],
                    tooltip: "คณะสถาปัตยกรรมศาสตร์",
                    width: 32,
                    height: 32,
                    anchor: "bottom center",
                    longitude: 3.628,
                    latitude: 0.154,
                  },
                  {
                    id: "P7-marker-5",
                    image: images["pin-red.png"],
                    tooltip: "ที่จอดรถ",
                    width: 32,
                    height: 32,
                    anchor: "bottom center",
                    longitude: 1.86,
                    latitude: 0.048,
                  },
                ],
              },
              {
                id: "8",
                panorama: images["P8.JPG"],
                name: "P8",
                position: [102.826542, 16.4743],
                links: [{ nodeId: "7" }, { nodeId: "9" }],
                markers: [
                  {
                    id: "P8-marker-1",
                    image: images["pin-red.png"],
                    longitude: 3.551,
                    latitude: 0.323,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "ที่รอรถบัส",
                      position: "top center",
                    },
                  },
                  {
                    id: "P8-marker-2",
                    image: images["pin-red.png"],
                    longitude: 5.944,
                    latitude: 0.35,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "อาคารวิจัยและบริการวิชาการ",
                      position: "top center",
                    },
                  },
                  {
                    id: "P8-marker-3",
                    image: images["pin-red.png"],
                    longitude: 5.287,
                    latitude: 0.381,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "อาคารรัตนพิทยา",
                      position: "top center",
                    },
                  },
                  {
                    id: "P8-marker-4",
                    image: images["pin-red.png"],
                    longitude: 1.269,
                    latitude: 0.503,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "อาคารพิมล กลกิจ",
                      position: "top center",
                    },
                  },
                  {
                    id: "P8-marker-5",
                    image: images["pin-red.png"],
                    longitude: 4.258,
                    latitude: 0.173,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "ศูนย์อาหาร คณะบริหารธุรกิจและการบัญชี",
                      position: "top center",
                    },
                  },
                ],
              },
              {
                id: "9",
                panorama: images["P9.JPG"],
                name: "P9",
                position: [102.82529722222222, 16.474502777777776],
                links: [{ nodeId: "8" }, { nodeId: "10" }],
                markers: [
                  {
                    id: "P9-marker-1",
                    image: images["pin-red.png"],
                    longitude: 1.256,
                    latitude: 0.502,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "อาคารรัตนพิทยา",
                      position: "top center",
                    },
                  },
                  {
                    id: "P9-marker-2",
                    image: images["pin-red.png"],
                    longitude: 3.9,
                    latitude: 0.234,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "สำนักงานเทคโนโลยี",
                      position: "top center",
                    },
                  },
                  {
                    id: "P9-marker-3",
                    image: images["pin-red.png"],
                    longitude: 4.451,
                    latitude: 0.183,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "ตึก 6 คณะวิทยาศาสตร์",
                      position: "top center",
                    },
                  },
                  {
                    id: "P9-marker-4",
                    image: images["pin-red.png"],
                    longitude: 2.41,
                    latitude: 0.11,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "คณะบริหารธุรกิจและการจัดการ",
                      position: "top center",
                    },
                  },
                  {
                    id: "P9-marker-5",
                    image: images["pin-red.png"],
                    longitude: 5.462,
                    latitude: 0.215,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "ตึก 9 วิทยวิภาส",
                      position: "top center",
                    },
                  },
                ],
              },
              {
                id: "10",
                panorama: images["P10.JPG"],
                name: "P10",
                position: [102.82826666666666, 16.47458611111111],
                links: [{ nodeId: "7" }, { nodeId: "9" }, { nodeId: "11" }],
                markers: [
                  {
                    id: "P10-marker-1",
                    image: images["pin-red.png"],
                    longitude: 1.813,
                    latitude: 0.141,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "สนามเทนนิส",
                      position: "top center",
                    },
                  },
                  {
                    id: "P10-marker-2",
                    image: images["pin-red.png"],
                    longitude: 2.057,
                    latitude: 0.531,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "อาคารเรียนรวมและพัฒนาทักษะพื้นฐาน",
                      position: "top center",
                    },
                  },
                  {
                    id: "P10-marker-3",
                    image: images["pin-red.png"],
                    longitude: 5.265,
                    latitude: 0.162,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "อาคารรัตนพิทยา",
                      position: "top center",
                    },
                  },
                  {
                    id: "P10-marker-4",
                    image: images["pin-red.png"],
                    longitude: 2.736,
                    latitude: 0.238,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "ตึก GL",
                      position: "top center",
                    },
                  },
                  {
                    id: "P10-marker-5",
                    image: images["pin-red.png"],
                    longitude: 4.258,
                    latitude: 0.173,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "ศูนย์อาหาร คณะบริหารธุรกิจและการบัญชี",
                      position: "top center",
                    },
                  },
                ],
              },
              {
                id: "11",
                panorama: images["P11.JPG"],
                name: "P11",
                position: [102.82633333333332, 16.47677222222222],
                links: [{ nodeId: "10" }, { nodeId: "12" }],
                markers: [
                  {
                    id: "P11-marker-1",
                    image: images["pin-red.png"],
                    longitude: 5.143,
                    latitude: 0.183,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "แฟลตจามจุรี",
                      position: "top center",
                    },
                  },
                  {
                    id: "P11-marker-2",
                    image: images["pin-red.png"],
                    longitude: 4.467,
                    latitude: 0.115,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "ภาควิชาชีววิทยา มหาวิทยาลัยขอนแก่น",
                      position: "top center",
                    },
                  },
                  {
                    id: "P11-marker-3",
                    image: images["pin-red.png"],
                    longitude: 3.231,
                    latitude: 0.054,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "ที่รอรถบัส",
                      position: "top center",
                    },
                  },
                  {
                    id: "P10-marker-4",
                    image: images["pin-red.png"],
                    longitude: 5.529,
                    latitude: 0.111,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "คอฟฟี่ เด้อ หล่า มหาวิทยาลัยขอนแก่น",
                      position: "top center",
                    },
                  },
                ],
              },
              {
                id: "12",
                panorama: images["P12.JPG"],
                name: "P12",
                position: [102.8229861111111, 16.47712222222222],
                links: [{ nodeId: "11" }, { nodeId: "13" }],
                markers: [
                  {
                    id: "P12-marker-1",
                    image: images["pin-red.png"],
                    longitude: 2.739,
                    latitude: 0.108,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "LABrary",
                      position: "top center",
                    },
                  },
                  {
                    id: "P12-marker-2",
                    image: images["pin-red.png"],
                    longitude: 1.928,
                    latitude: 0.485,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "ศูนย์สารสนเทศ",
                      position: "top center",
                    },
                  },
                  {
                    id: "P12-marker-3",
                    image: images["pin-red.png"],
                    longitude: 2.449,
                    latitude: 0.473,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "ที่รอรถบัส",
                      position: "top center",
                    },
                  },
                  {
                    id: "P12-marker-4",
                    image: images["pin-red.png"],
                    longitude: 0.095,
                    latitude: 0.388,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "ศุนย์อาหารและบริการ 1 (คอมเพล็กซ์)",
                      position: "top center",
                    },
                  },
                  {
                    id: "P12-marker-5",
                    image: images["pin-red.png"],
                    longitude: 1.126,
                    latitude: 0.122,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "ที่รอรถบัส",
                      position: "top center",
                    },
                  },
                ],
              },
              {
                id: "13",
                panorama: images["P13.JPG"],
                name: "P13",
                position: [102.82086388888888, 16.47748611111111],
                links: [{ nodeId: "12" }, { nodeId: "14" }],
                markers: [
                  {
                    id: "P13-marker-1",
                    image: images["pin-red.png"],
                    longitude: 5.719,
                    latitude: 0.159,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "กองพัฒนานักศึกษาและศิษย์เก่าสัมพันธ์",
                      position: "top center",
                    },
                  },
                  {
                    id: "P13-marker-2",
                    image: images["pin-red.png"],
                    longitude: 5.177,
                    latitude: 0.079,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "ที่รอรถบัส",
                      position: "top center",
                    },
                  },
                  {
                    id: "P13-marker-3",
                    image: images["pin-red.png"],
                    longitude: 4.662,
                    latitude: 0.131,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "คณะเกษตรศาสตร์ อาคาร 7",
                      position: "top center",
                    },
                  },
                  {
                    id: "P13-marker-4",
                    image: images["pin-red.png"],
                    longitude: 0.526,
                    latitude: 0.466,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "องค์การนักศึกษา มหาวิทยาลัยขอนแก่น",
                      position: "top center",
                    },
                  },
                  {
                    id: "P13-marker-5",
                    image: images["pin-red.png"],
                    longitude: 3.215,
                    latitude: 0.323,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "ที่รอรถบัส",
                      position: "top center",
                    },
                  },
                ],
              },
              {
                id: "14",
                panorama: images["P14.JPG"],
                name: "P14",
                position: [102.81878611111111, 16.477641666666663],
                links: [{ nodeId: "13" }, { nodeId: "15" }],
                markers: [
                  {
                    id: "P14-marker-1",
                    image: images["pin-red.png"],
                    longitude: 6.079,
                    latitude: 0.201,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "พอพักในชายที่ 8",
                      position: "top center",
                    },
                  },
                  {
                    id: "P14-marker-2",
                    image: images["pin-red.png"],
                    longitude: 1.028,
                    latitude: 0.204,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "โรงชายใหม่ มข.",
                      position: "top center",
                    },
                  },
                  {
                    id: "P14-marker-3",
                    image: images["pin-red.png"],
                    longitude: 4.34,
                    latitude: 0.082,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "สนามกีฬา 50 ปี มข.",
                      position: "top center",
                    },
                  },
                  {
                    id: "P14-marker-4",
                    image: images["pin-red.png"],
                    longitude: 0.74,
                    latitude: 0.202,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "กองป้องกันและรักษาความปลอดภัย",
                      position: "top center",
                    },
                  },
                  {
                    id: "P14-marker-5",
                    image: images["pin-red.png"],
                    longitude: 3.215,
                    latitude: 0.323,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "ที่รอรถบัส",
                      position: "top center",
                    },
                  },
                ],
              },
              {
                id: "15",
                panorama: images["P15.jpg"],
                name: "P15",
                position: [102.81607444444444, 16.47636972222222],
                links: [{ nodeId: "14" }, { nodeId: "16" }],
                markers: [
                  {
                    id: "P15-marker-1",
                    image: images["pin-red.png"],
                    longitude: 5.357,
                    latitude: 0.005,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "สนามรักบี้",
                      position: "top center",
                    },
                  },
                  {
                    id: "P15-marker-2",
                    image: images["pin-red.png"],
                    longitude: 1.573,
                    latitude: 0.01,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "สนามบาสสี่สนาม",
                      position: "top center",
                    },
                  },
                  {
                    id: "P15-marker-3",
                    image: images["pin-red.png"],
                    longitude: 1.871,
                    latitude: -0.059,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "ที่จอดรถ",
                      position: "top center",
                    },
                  },
                  {
                    id: "P15-marker-4",
                    image: images["pin-red.png"],
                    longitude: 5.779,
                    latitude: -0.738,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "ที่จอดรถบัส",
                      position: "top center",
                    },
                  },
                  {
                    id: "P15-marker-5",
                    image: images["pin-red.png"],
                    longitude: 2.74,
                    latitude: 0.029,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "ที่แตะฟุตซอล",
                      position: "top center",
                    },
                  },
                ],
              },
              {
                id: "16",
                panorama: images["P16.jpg"],
                name: "P16",
                position: [102.81648055555556, 16.473229166666666],
                links: [{ nodeId: "15" }, { nodeId: "2" }],
                markers: [
                  {
                    id: "P16-marker-1",
                    image: images["pin-red.png"],
                    longitude: 1.49,
                    latitude: 0.241,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "ป่าไม้",
                      position: "top center",
                    },
                  },
                  {
                    id: "P16-marker-2",
                    image: images["pin-red.png"],
                    longitude: 2.454,
                    latitude: -1.128,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "ที่จอดรถบัส",
                      position: "top center",
                    },
                  },
                  {
                    id: "P16-marker-3",
                    image: images["pin-red.png"],
                    longitude: 3.737,
                    latitude: 0.041,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "แปลงเกษตร มข.",
                      position: "top center",
                    },
                  },
                ],
              },
            ],
            startNodeId: "1",
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
