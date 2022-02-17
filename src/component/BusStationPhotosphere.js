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
                      content: "แปลงเกษตร มข หมวด พืชผัก",
                      position: "top center",
                    },
                    content:`<h1>แปลงเกษตร มข หมวด พืชผัก</h1>
                    <img class="img-fluid my-3" src="img/P1-marker-2.jpg" alt="การสื่อสารองค์กรมหาวิทยาลัยขอนแก่น">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    สถานที่สำหรับทดลองงานในหมวด พืชผัก ของคณะเกษตรศาสตร์
                    </p>`,
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
                    content:`<h1>หอศิลป์ คณะศิลปกรรมศาสตร์</h1>
                    <img class="img-fluid my-3" src="img/P1-marker-3.jpg" alt="หอศิลป์ คณะศิลปกรรมศาสตร์">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    ห้องจัดงานแสดงศิลปะของคณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น ศิลปินหรือนักศึกษาสามารถนำงานมาแสดงที่นี้ 
                    เพื่อให้ผู้ที่สนใจในงานศิลปะเข้าชมได้
                    </p>`,
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
                    content:`<h1>ที่จอดรถบัส</h1>
                    <img class="img-fluid my-3" src="img/P1-marker-4.jpg" alt="ที่จอดรถบัส">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    ที่จอดรถบัสเพื่อให้พนักงานได้พักเบรค และสำหรับรอรสบัสสายสีน้ำเงิน ม่วง แดง และส้ม
                    </p>`,
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
                    content: `<h1>การสื่อสารองค์กรมหาวิทยาลัยขอนแก่น</h1>
                    <img class="img-fluid my-3" src="img/P1-marker-5.jpg" alt="การสื่อสารองค์กรมหาวิทยาลัยขอนแก่น">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    การบริหารจัดการด้านการประชาสัมพันธ์ สื่อสารและกิจกรรมเพื่อส่งเสริมในการสร้างภาพลักษณ์ที่ดีของมหาวิทยาลัย 
                    การประชาสัมพันธ์เผยแพร่ข่าวสารของมหาวิทยาลัยให้ชุมชน สังคม หรือสาธารณชน 
                    หรือองค์กรทั้งภายในและภายนอกมหาวิทยาลัยได้รับทราบพร้อมทั้งการสร้างความเข้าใจที่ดี 
                    การผลิตสื่อประชาสัมพันธ์ที่หลากหลายประเภท
                    </p>`,
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
                      content: "ที่รอรถบัส",
                      position: "top center",
                    },
                    content:`<h1>ที่รอรถบัส</h1>
                    <img class="img-fluid my-3" src="img/P2-marker-1.jpg" alt="ที่รอรถบัส">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    ที่รอรถบัสสำหรับสายม่วง แดง และน้ำเงิน
                    </p>`,
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
                    content:`<h1>คณะศิลปกรรมศาสตร์</h1>
                    <img class="img-fluid my-3" src="img/P2-marker-2.jpg" alt="คณะศิลปกรรมศาสตร์">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    คณะศิลปกรรมศาสตร์ได้รับพระบรมราชโองการ ประกาศพระราชกฤษฎีกา จัดตั้งคณะ ในวันที่ 13 กันยายน พ.ศ. 2537 แยกออกมาจาก 
                    คณะมนุษยศาสตร์และสังคมศาสตร์ มหาวิทยาลัยขอนแก่น เพื่อเป็นหน่วยงานที่ผลิตบัณฑิตที่มีความรู้ ความสามารถทางด้านศิลปกรรมศาสตร์ 
                    สู่การทำงานทั้งในภาครัฐและเอกชนอย่างมีประสิทธิภาพ อีกทั้งยังเป็นศูนย์กลางการศึกษา ค้นคว้าและวิจัยศิลปะสากล ศิลปะพื้นบ้านในภาคตะวันออกเฉียงเหนือ 
                    และเป็นหน่วยงานที่ให้บริการทางวิชาการด้านศิลปกรรมศาสตร์ แก่สังคมและหน่วยงานทั้งภายในและต่างประเทศ 
                    </p>`,
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
                    content:`<h1>วงเวียน</h1>
                    <img class="img-fluid my-3" src="img/P2-marker-3.jpg" alt="วงเวียน">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    วงเวียนสำหรับที่กลับรถ
                    </p>`,
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
                    content:`<h1>หอศิลป์ คณะศิลปกรรมศาสตร์</h1>
                    <img class="img-fluid my-3" src="img/P2-marker-4.jpg" alt="หอศิลป์ คณะศิลปกรรมศาสตร์">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    ห้องจัดงานแสดงศิลปะของคณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น ศิลปินหรือนักศึกษาสามารถนำงานมาแสดงที่นี้ 
                    เพื่อให้ผู้ที่สนใจในงานศิลปะเข้าชมได้
                    </p>`,
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
                    content:`<h1>ที่รอรถบัส</h1>
                    <img class="img-fluid my-3" src="img/P3-marker-1.jpg" alt="ที่รอรถบัส">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    ที่รอรถบัสสำหรับสายสีส้ม
                    </p>`,
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
                    content:`<h1>ที่จอดรถ</h1>
                    <img class="img-fluid my-3" src="img/P3-marker-2.jpg" alt="ที่จอดรถ">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    ที่จอดรถที่สามารถให้บุคคลทั่วไปเข้ามาจอดได้
                    </p>`,
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
                    content:`<h1>อาคาร สิริ คุณากร</h1>
                    <img class="img-fluid my-3" src="img/P3-marker-3.png" alt="อาคาร สิริ คุณากร">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
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
                    นับเป็นพระมหากรุณาธิคุณแก่มหาวิทยาลัยขอนแก่น
                    </p>`,
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
                    content:`<h1>การสื่อสารองค์กรมหาวิทยาลัยขอนแก่น</h1>
                    <img class="img-fluid my-3" src="img/P3-marker-4.jpg" alt="การสื่อสารองค์กรมหาวิทยาลัยขอนแก่น">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    การบริหารจัดการด้านการประชาสัมพันธ์ สื่อสารและกิจกรรมเพื่อส่งเสริมในการสร้างภาพลักษณ์ที่ดีของมหาวิทยาลัย 
                    การประชาสัมพันธ์เผยแพร่ข่าวสารของมหาวิทยาลัยให้ชุมชน สังคม หรือสาธารณชน 
                    หรือองค์กรทั้งภายในและภายนอกมหาวิทยาลัยได้รับทราบพร้อมทั้งการสร้างความเข้าใจที่ดี 
                    การผลิตสื่อประชาสัมพันธ์ที่หลากหลายประเภท
                    </p>`,
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
                    content:`<h1>ที่รอรถบัส</h1>
                    <img class="img-fluid my-3" src="img/P2-marker-1.jpg" alt="ที่รอรถบัส">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    ที่รอรถบัสสำหรับสายม่วง แดง และน้ำเงิน
                    </p>`,
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
                    content: `<h1>ตึก GL</h1>
                    <img class="img-fluid my-3" src="img/P7-marker-1.jpg" alt="ตึก GL">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    ที่รอรถบัสสำหรับสายม่วง แดง และน้ำเงิน
                    </p>`,
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
                    content: `<h1>ที่รอรถบัส</h1>
                    <img class="img-fluid my-3" src="img/P7-marker-2.jpg" alt="ที่รอรถบัส">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    ที่รอรถบัสสำหรับสายม่วง แดง และน้ำเงิน
                    </p>`,
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
                    content: `<h1>ที่รอรถบัส</h1>
                    <img class="img-fluid my-3" src="img/P7-marker-3.jpg" alt="ที่รอรถบัส">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    ที่รอรถบัสสำหรับสายม่วง และน้ำเงิน
                    </p>`,
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
                    content: `<h1>คณะสถาปัตยกรรมศาสตร์</h1>
                    <img class="img-fluid my-3" src="img/P7-marker-4.jpg" alt="คณะสถาปัตยกรรมศาสตร์">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    คณะสถาปัตยกรรมศาสตร์ ได้ จัดตั้งขึ้นตามแผนพัฒนาเศรษฐกิจและสังคมแห่งชาติ 
                    ระยะที่ 4 (พ.ศ.2520 -2524) และในแผนพัฒนาฯ ระยะที่ 5 (พ.ศ.2525 -2529) 
                    เพื่อตอบสนองความต้องการกำลังคนที่มีความรู้ ทางด้านวิชาชีพสถาปัตยกรรมให้ 
                    กับภาคตะวันออกเฉียงเหนือ โดยได้รับพระราชกฤษฎีกาจัดตั้งคณะสถาปัตยกรรมศาสตร์ 
                    มหาวิทยาลัยขอนแก่น ตามประกาศในราชกิจจานุ เบกษาฉบับพิเศษ หน้าที่ 10 เล่มที่ 105 
                    ตอนที่ 28 ลงวันที่ 19 กุมภาพันธ์ พ.ศ. 2531 นับเป็นสถานศึกษาระดับอุดมศึกษาแห่งแรก
                    ในส่วนภูมิภาคที่ผลิตบัณฑิตในสาขาวิชาสถาปัตยกรรมศาสตร์
                    </p>`,
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
                    content:`<h1>ที่จอดรถ</h1>
                    <img class="img-fluid my-3" src="img/P7-marker-5.jpg" alt="ที่จอดรถ">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    ที่จอดรถสำหรับบุคคลทั่วไปที่จะมาตึก GL หรือ คณะสถาปัตยกรรมศาสตร์
                    </p>`
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
                    content:`<h1>ที่รอรถบัส</h1>
                    <img class="img-fluid my-3" src="img/P8-marker-1.jpg" alt="ที่รอรถบัส">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    ที่รอรถบัสสำหรับสายม่วง และน้ำเงิน
                    </p>`,
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
                    content:`<h1>อาคารวิจัยและบริการวิชาการ</h1>
                    <img class="img-fluid my-3" src="img/P8-marker-2.jpg" alt="อาคารวิจัยและบริการวิชาการ">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    เป็นหน่วยงานหลักในการประสานงานและระดมทรัพยากร ทั้งภายในและภายนอกมหาวิทยาลัย 
                    เพื่อจัดบริการให้การศึกษาและอบรมแก่ประชาชนระดับต่าง ๆ ทั้งระยะสั้นและระยะยาว 
                    ในหัวข้อวิชาการและวิชาชีพที่ผู้เข้ารับการศึกษาและอบรมสนใจ เพื่อให้ประชาชนได้รับความรู้ ทักษะ 
                    และค่านิยมต่าง ๆ ที่จะนำไปใช้ประโยชน์ทั้งในชีวิตประจำวันและการประกอบอาชีพ 
                    </p>`,
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
                    content:`<h1>อาคารรัตนพิทยา</h1>
                    <img class="img-fluid my-3" src="img/P8-marker-3.jpg" alt="อาคารรัตนพิทยา">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    อาคารใหม่ เป็นสำนักงานของคณะมนุษยศาสตร์และสังคมศาสตร์ มข 
                    รวมทั้งเป็นอาคารเรียนของบัณฑิตศึกษา
                    </p>`,
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
                    content:`<h1>อาคารพิมล กลกิจ</h1>
                    <img class="img-fluid my-3" src="img/P8-marker-4.jpg" alt="อาคารพิมล กลกิจ">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    อาคารสำหรับติดต่อธุระของนักศึกษากับสำนักทะเบียน
                    </p>`,
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
                    content:`<h1>ศูนย์อาหาร คณะบริหารธุรกิจและการบัญชี</h1>
                    <img class="img-fluid my-3" src="img/P8-marker-5.jpg" alt="ศูนย์อาหาร คณะบริหารธุรกิจและการบัญชี">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    ที่พักรับประทานอาหารสำหรับนักศึกษาคณะคณะบริหารธุรกิจและการบัญชี หรือนักศึกษาคณะอื่นๆ
                    </p>`,
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
                    content:`<h1>อาคารรัตนพิทยา</h1>
                    <img class="img-fluid my-3" src="img/P9-marker-1.jpg" alt="อาคารรัตนพิทยา">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    อาคารใหม่ เป็นสำนักงานของคณะมนุษยศาสตร์และสังคมศาสตร์ มข 
                    รวมทั้งเป็นอาคารเรียนของบัณฑิตศึกษา
                    </p>`,
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
                    content:`<h1>สำนักงานเทคโนโลยี</h1>
                    <img class="img-fluid my-3" src="img/P9-marker-2.jpg" alt="สำนักงานเทคโนโลยี">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    สำนักเทคโนโลยีสารสนเทศ มีบทบาทในการบริหารจัดการและขับเคลื่อนเทคโนโลยีสารสนเทศของมหาวิทยาลัยเพื่อสนับสนุนการภารกิจทุกด้านของมหาวิทยาลัย 
                    ทั้งด้านการเรียนการสอน วิจัย บริการวิชาการ การสร้างและดูแลสภาพแวดล้อม “Smart Campus” เพื่อสุขภาวะด้านสารสนเทศที่ดีสำหรับนักศึกษา บุคลากร และ 
                    ผู้ใช้งานจากภายนอก โดยแนวคิดแบบองค์รวมอย่างเป็นระบบ เพื่อให้เทคโนโลยีสารสนเทศสามารถใช้ประโยชน์ได้อย่างมีประสิทธิภาพ มีความคุ้มค่าและยั่งยืนทั้งด้านงบประมาณ 
                    บุคลากร และเทคโนโลยี
                    </p>`,
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
                    content:`<h1>ตึก 6 คณะวิทยาศาสตร์</h1>
                    <img class="img-fluid my-3" src="img/P9-marker-3.jpg" alt="ตึก 6 คณะวิทยาศาสตร์">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    ตึกเรียนเก่าแก่สำหรับนักศึกษาคณะวิทยาศาสตร์ สาขา สถิติ เทคโนโลยีสารสนเทศ สารสนเทศภูมิศาสตร์ และวิทยาการคอมพิวเตอร์
                    </p>`,
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
                    content:`<h1>คณะบริหารธุรกิจและการจัดการ</h1>
                    <img class="img-fluid my-3" src="img/P9-marker-4.jpg" alt="คณะบริหารธุรกิจและการจัดการ">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    คณะฯ ก่อตั้งขึ้นตามแผนพัฒนาการศึกษา ระยะที่ 7 (พ.ศ.2535-2539) ในชื่อ คณะวิทยาการจัดการ 
                    เพื่อตอบสนองความต้องการกำลังคนที่มีความรู้ด้านวิชาชีพ ในสาขาวิชาทางบริหารธุรกิจและเศรษฐศาสตร์ 
                    และเพื่อขยายโอกาสทางการศึกษาแก่ประชาชนในภูมิภาคตะวันออกเฉียงเหนือ 
                    โดยมีภารกิจรับผิดชอบเกี่ยวกับการดำเนินงานด้านการจัดการศึกษา การวิจัย และบริการวิชาการแก่สังคม 
                    โดยได้แยกส่วนงานมาจากภาควิชาสังคมศาสตร์ ซึ่งสังกัดคณะมนุษยศาสตร์และสังคมศาสตร์  ในปีการศึกษา 2535 
                    และมีการประกาศในราชกิจจานุเบกษา เล่มที่ 109 ตอนที่ 126 หน้า 1 เมื่อวันที่ 30 ธันวาคม 2535 ให้จัดตั้งเป็น 
                    “คณะวิทยาการจัดการ” โดยมีหลักสูตรบริหารธุรกิจบัณฑิต สาขาวิชาการเงิน เป็นสาขาแรกที่เปิดทำการเรียนการสอน
                    </p>`,
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
                    content:`<h1>ตึก 9 วิทยวิภาส</h1>
                    <img class="img-fluid my-3" src="img/P9-marker-5.jpg" alt="ตึก 9 วิทยวิภาส">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    ตึกใหม่ของคณะวิทยาลัยการคอมพิวเตอร์ มีจุดประสงค์ในการพัฒนานักศึกษา
                    ในสาขาให้มีความสามารถขั้นสูงในทางคอมพิวเตอร์
                    </p>`,
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
                    content:`<h1>สนามเทนนิส</h1>
                    <img class="img-fluid my-3" src="img/P10-marker-1.jpg" alt="สนามเทนนิส">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    สนามตีเทนนิสสำหรับ นักศึกษาและบุคคลทั่วไปของมหาวิทยาลัยขอนแก่น
                    </p>`,
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
                    content:`<h1>อาคารเรียนรวมและพัฒนาทักษะพื้นฐาน</h1>
                    <img class="img-fluid my-3" src="img/P10-marker-2.jpg" alt="อาคารเรียนรวมและพัฒนาทักษะพื้นฐาน">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    อาคารเรียนรวมและพัฒนาทักษะพื้นฐาน มหาวิทยาลัยขอนแก่น อยู่ด้านข้างอาคารสถาบันขงจื้อ
                    </p>`,
                  },
                  {
                    id: "P10-marker-3",
                    image: images["pin-red.png"],
                    longitude: 5.265,
                    latitude: 0.162,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "ที่รอรถบัส",
                      position: "top center",
                    },
                    content:`<h1>ที่รอรถบัส</h1>
                    <img class="img-fluid my-3" src="img/P10-marker-3.jpg" alt="ที่รอรถบัส">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    ที่รอรถบัสสำหรับสายสี เหลือง ม่วง และน้ำเงิน
                    </p>`,
                  },
                  {
                    id: "P10-marker-4",
                    image: images["pin-red.png"],
                    longitude: 2.736,
                    latitude: 0.238,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "สถาบันความร่วมมือเพื่อพัฒนาเศรษฐกิจลุ่มน้ำโขง",
                      position: "top center",
                    },
                    content:`<h1>สถาบันความร่วมมือเพื่อพัฒนาเศรษฐกิจลุ่มน้ำโขง</h1>
                    <img class="img-fluid my-3" src="img/P10-marker-4.png" alt="สถาบันความร่วมมือเพื่อพัฒนาเศรษฐกิจลุ่มน้ำโขง">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    สถาบันความร่วมมือเพื่อพัฒนาเศรษฐกิจลุ่มน้ำโขง (Mekong Institute : MI) มีภารกิจ 
                    ด้านการพัฒนาทรัพยากรมนุษย์และเสริมสร้างศักยภาพในการเร่งพัฒนาเศรษฐกิจและสังคมอย่าง
                    ยั่งยืนและการขจัดความยากจนให้แก่ประเทศในอนุภูมิภาคลุ่มน้ำโขง รวมทั้งส่งเสริมความร่วมมือ
                    และการรวมตัวระหว่างประเทศในระดับภูมิภาค (MI Charter 2003) เริ่มดำเนินกิจกรรมต่างๆ 
                    ตั้งแต่ปี 2539 เป็นต้นมา โดยรัฐบาลประเทศนิวซีแลนด์ ได้สนับสนุนการดำเนินงานของสถาบันฯ 
                    ในลักษณะของโครงการให้ความช่วยเหลือในการพัฒนาประเทศในอนุภูมิภาคลุ่มน้ำโขง (GMS) 
                    เป็นองค์กรอิสระที่มุ่งเน้นการมีส่วนร่วมของรัฐบาลประเทศต่าง ๆ ของภูมิภาค โดยมีสำนักงานตั้ง
                    อยู่ในมหาวิทยาลัยขอนแก่น ภาคตะวันออกเฉียงเหนือของประเทศไทย
                    </p>`,
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
                    content:`<h1>แฟลตจามจุรี</h1>
                    <img class="img-fluid my-3" src="img/P11-marker-1.jpg" alt="แฟลตจามจุรี">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    หอพักอาศัยสำหรับพนักงานหรือบุคคลราชการในมหาวิทยาลัยขอนแก่น
                    </p>`,
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
                    content:`<h1>ภาควิชาชีววิทยา มหาวิทยาลัยขอนแก่น</h1>
                    <img class="img-fluid my-3" src="img/P11-marker-2.jpg" alt="ภาควิชาชีววิทยา มหาวิทยาลัยขอนแก่น">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    เป็นสถาบันชั้นนำในการผลิตบัณฑิตสาขาชีววิทยาที่มีคุณภาพ มีงานวิจัยเป็น
                    ที่ยอมรับในระดับนานาชาติภายใต้การบริหารจัดการที่ดี
                    </p>`,
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
                    content:`<h1>ที่รอรถบัส</h1>
                    <img class="img-fluid my-3" src="img/P11-marker-3.jpg" alt="ที่รอรถบัส">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    ที่รอรถบัสสำหรับสายสีเขียว น้ำเงิน เหลือง และม่วง
                    </p>`,
                  },
                  {
                    id: "P11-marker-4",
                    image: images["pin-red.png"],
                    longitude: 5.529,
                    latitude: 0.111,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "คอฟฟี่ เด้อ หล่า มหาวิทยาลัยขอนแก่น",
                      position: "top center",
                    },
                    content:`<h1>ที่รอรถบัส</h1>
                    <img class="img-fluid my-3" src="img/P11-marker-4.jpg" alt="ที่รอรถบัส">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    ร้านคาเฟ่ สำหรับ ดื่มชา กาแฟ และอ่านหนังสือ
                    </p>`,
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
                    content:`<h1>LABrary</h1>
                    <img class="img-fluid my-3" src="img/P12-marker-1.jpg" alt="LABrary">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    ที่อ่าหนังสือ สามารถสั่งอาหารหรือเครื่องดื่มภายในร้านมารับประทานได้
                    </p>`,
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
                    content:`<h1>ศูนย์สารสนเทศ</h1>
                    <img class="img-fluid my-3" src="img/P12-marker-2.jpg" alt="LABrary">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    ศูนย์สารสนเทศเป็นพัฒนาการของห้องสมุดเฉพาะ เกิดขึ้นในช่วงที่มีกระแสสารสนเทศท่วมท้น 
                    แต่ขาดประสิทธิภาพในการจัดเก็บและเรียกใช้ดูข้อมูลเฉพาะสาขาวิชา ดังนั้นศูนย์สารสนเทศ
                    จึงจำกัดขอบเขตสาขาวิชาให้อยู่ในวงแคบเพื่อรวบรวมสารสนเทศให้ได้ลึกซึ้งและครบถ้วน
                    </p>`,
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
                    content:`<h1>ที่รอรถบัส</h1>
                    <img class="img-fluid my-3" src="img/P12-marker-3.jpg" alt="ที่รอรถบัส">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    ที่รอรถบัสสำหรับ สายเขียว เหลือง แดง ม่วงและชมพู
                    </p>`,
                  },
                  {
                    id: "P12-marker-4",
                    image: images["pin-red.png"],
                    longitude: 0.095,
                    latitude: 0.388,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "ศูนย์อาหารและบริการ 1 (คอมเพล็กซ์)",
                      position: "top center",
                    },
                    content:`<h1>ศูนย์อาหารและบริการ 1 (คอมเพล็กซ์)</h1>
                    <img class="img-fluid my-3" src="img/P12-marker-4.jpg" alt="ศูนย์อาหารและบริการ 1 (คอมเพล็กซ์)">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    ศูนย์อาหาร หรือ สถานที่รับประทานอาหาร สำหรับนักศึกษาและบุคคลทั่วไป
                    มีการให้บริการที่มากมาย เช่น Cafe สำนักงานธนาคาร ร้านสะดวกซื้อ ศูนย์หนังสือ
                    บูธชั่วคราว และร้านทั่วไป
                    </p>`,
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
                    content:`<h1>ที่รอรถบัส</h1>
                    <img class="img-fluid my-3" src="img/P12-marker-5.jpg" alt="ที่รอรถบัส">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    ที่รอรถบัสสำหรับ สายเขียว เหลือง แดง ชมพู และน้ำเงิน
                    </p>`,
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
                    content:`<h1>กองพัฒนานักศึกษาและศิษย์เก่าสัมพันธ์</h1>
                    <img class="img-fluid my-3" src="img/P13-marker-1.jpg" alt="กองพัฒนานักศึกษาและศิษย์เก่าสัมพันธ์">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    ให้บริการในด้านต่างๆแก่นักศึกษา เช่น การขอทุน การไปรับเสื้อประจำมหาวิทยาลัย
                    </p>`,
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
                    content:`<h1>ที่รอรถบัส</h1>
                    <img class="img-fluid my-3" src="img/P13-marker-2.jpg" alt="ที่รอรถบัส">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    ที่รอรถบัสสำหรับสาย ชมพู น้ำเงินและแดง
                    </p>`,
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
                    content:`<h1>คณะเกษตรศาสตร์ อาคาร 7</h1>
                    <img class="img-fluid my-3" src="img/P13-marker-3.jpg" alt="คณะเกษตรศาสตร์ อาคาร 7">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    คณะเกษตรศาสตร์เป็นคณะบุกเบิกที่ก่อตั้งขึ้นมาพร้อมกับมหาวิทยาลัยขอนแก่น 
                    ได้ร่วมกันผลิตบัณฑิตระดับปริญญาตรี และระดับบัณฑิตศึกษาและนักศึกษาต่างชาติออกมา
                    มากมายที่ออกไปสร้างชื่อเสียง อุทิศตนเพื่อสังคมทั้งในประเทศไทยและต่างประเทศ
                    </p>`,
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
                    content:`<h1>องค์การนักศึกษา มหาวิทยาลัยขอนแก่น</h1>
                    <img class="img-fluid my-3" src="img/P13-marker-4.jpg" alt="องค์การนักศึกษา มหาวิทยาลัยขอนแก่น">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    ตึกองค์การนักศึกษา มหาวิทยาลัยขอนแก่น เป็นที่ประชุมองค์การนักศึกษา และ ที่ซ้อมคอรัส
                    </p>`,
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
                    content:`<h1>ที่รอรถบัส</h1>
                    <img class="img-fluid my-3" src="img/P13-marker-5.jpg" alt="ที่รอรถบัส">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    ที่รอรถบัส สายสีส้ม เขียว เหลือง ชมพู แดง และม่วง
                    </p>`,
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
                      content: "หอพักในชายที่ 8",
                      position: "top center",
                    },
                    content:`<h1>หอพักในชายที่ 8</h1>
                    <img class="img-fluid my-3" src="img/P14-marker-1.jpg" alt="หอพักในชายที่ 8">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    หอพักสำหรับนักศึกษาชายในมหาวิทยาลัยขอนแก่น
                    </p>`,
                  },
                  {
                    id: "P14-marker-2",
                    image: images["pin-red.png"],
                    longitude: 1.028,
                    latitude: 0.204,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "โรงชายใหม่ มข",
                      position: "top center",
                    },
                    content:`<h1>โรงชายใหม่ มข</h1>
                    <img class="img-fluid my-3" src="img/P14-marker-2.jpg" alt="โรงชายใหม่ มข">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    ที่กินอาหาร อ่านหนังสือ โดยภายในจะมี ร้าน อาหาร Cafe ร้านสะดวกซื้อ 
                    และร้านขายเครื่องเขียนเป็นต้น  
                    </p>`,
                  },
                  {
                    id: "P14-marker-3",
                    image: images["pin-red.png"],
                    longitude: 4.34,
                    latitude: 0.082,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "สนามกีฬา 50 ปี มข",
                      position: "top center",
                    },
                    content:`<h1>สนามกีฬา 50 ปี มข</h1>
                    <img class="img-fluid my-3" src="img/P14-marker-3.jpg" alt="สนามกีฬา 50 ปี มข">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    สนามกีฬากลางที่มีอายุมากกว่า 50 ปี เป็นสถานที่ใช้ในการแข่งกีฬาประเภทฟุตบอล 
                    และเป็นสนามสำหรับใช้ในการวิ่ง รวมถึงยังเป็นที่สำหรับเชียร์กลางอีกด้วย
                    </p>`,
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
                    content:`<h1>กองป้องกันและรักษาความปลอดภัย</h1>
                    <img class="img-fluid my-3" src="img/P14-marker-4.jpg" alt="กองป้องกันและรักษาความปลอดภัย">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    สถานที่แจ้งปัญหาที่เกิดขึ้น เช่น รถหาย ของหายเป็นต้น โดยจะมีเจ้าหน้าประจำการทุก 24 ชม.
                    </p>`,
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
                    content:`<h1>ที่รอรถบัส</h1>
                    <img class="img-fluid my-3" src="img/P14-marker-5.jpg" alt="ที่รอรถบัส">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    ที่รอรถบัสสายสีม่วง เขียว เหลือง และชมพู
                    </p>`,
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
                    content:`<h1>สนามรักบี้</h1>
                    <img class="img-fluid my-3" src="img/P15-marker-1.jpg" alt="สนามรักบี้">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    สนามรักบี้ที่ไว้ใช้ในการซ้อม และแข่งสำหรับชมรมรักบี้
                    </p>`,
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
                    content:`<h1>สนามบาสสี่สนาม</h1>
                    <img class="img-fluid my-3" src="img/P15-marker-2.jpg" alt="สนามบาสสี่สนาม">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    สนามสำหรับเล่นกีฬาบาสซึ่งจะมีทั้งหมด 4 สนาม
                    </p>`,
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
                    content:`<h1>ที่จอดรถ</h1>
                    <img class="img-fluid my-3" src="img/P15-marker-3.jpg" alt="ที่จอดรถ">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    ที่จอดรถสำหรับคนมาใช้สนามบาส สนามฟุตซอล และสนามรักบี้
                    </p>`,
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
                    content:`<h1>ที่จอดรถบัส</h1>
                    <img class="img-fluid my-3" src="img/P15-marker-4.jpg" alt="ที่จอดรถบัส">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    ที่รอรถบัสสำหรับสายสีม่วง
                    </p>`,
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
                    content:`<h1>ที่แตะฟุตซอล</h1>
                    <img class="img-fluid my-3" src="img/P15-marker-5.jpg" alt="ที่แตะฟุตซอล">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    สนามฟุตซอลอยู่ข้างสนามบาสสี่สนามสำหรับนักศึกษาภายในมหาวิทยาลัยขอนแก่น และบุคคลทั่วไป
                    </p>`,
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
                    content:`<h1>ป่าไม้</h1>
                    <img class="img-fluid my-3" src="img/P16-marker-1.jpg" alt="ป่าไม้">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    ป่าไม้ที่มองดูก็ร่มเย็น เหมือนฟังธรรมะอาจารย์เฮง
                    </p>`,
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
                    content:`<h1>ที่จอดรถบัส</h1>
                    <img class="img-fluid my-3" src="img/P16-marker-2.jpg" alt="ที่จอดรถบัส">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    ป่าไม้ที่มองดูก็ร่มเย็น เหมือนฟังธรรมะอาจารย์เฮง
                    </p>`,
                  },
                  {
                    id: "P16-marker-3",
                    image: images["pin-red.png"],
                    longitude: 3.737,
                    latitude: 0.041,
                    width: 32,
                    height: 32,
                    tooltip: {
                      content: "แปลงเกษตร มข",
                      position: "top center",
                    },
                    content:`<h1>แปลงเกษตร มข</h1>
                    <img class="img-fluid my-3" src="img/P16-marker-3.jpg" alt="แปลงเกษตร มข">
                    <p class="lh-1 text-start" style = "text-indent:1cm;">
                    ที่ทดลองงานทางด้านเกษตรของนักศึกษาภายในคณะเกษตร รวมถึงเป็นสถานที่สำหรับถ่ายรูป สวยๆ
                    </p>`,
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
