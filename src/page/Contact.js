import images from "../img/Images.js";

function Contact() {
  return (
    <div className="container-fluid bg-dark text-light p-5 text-center">
      <h1>MaskedRiderDouble</h1>
      <div className="container ">
        <img src={images["panithan.jpg"]}  className="rounded my-3" alt="Panithan" width="30%"></img>      
        <p>ชื่อ ปณิธาน เทพบุดดี รหัสนักศึกษา 623020477-5 <br/>สาขาวิทยาการคอมพิวเตอร์ วิทยาลัยคอมพิวเตอร์ มหาวิทยาลัยขอนแก่น</p>
      </div>
      <div className="container">
        <img src={images["panithan.jpg"]}  className="rounded my-3" alt="Panithan" width="30%"></img>      
        <p>ชื่อ ปณิธาน เทพบุดดี รหัสนักศึกษา 623020477-5 <br/>สาขาวิทยาการคอมพิวเตอร์ วิทยาลัยคอมพิวเตอร์ มหาวิทยาลัยขอนแก่น</p>
      </div>
      
    </div>
  );
}

export default Contact;
