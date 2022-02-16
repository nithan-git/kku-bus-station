import images from "../img/Images.js";

function Contact() {
  return (
    <div className="container-fluid bg-dark text-light p-5 text-center">
      <h1 className="my-3">MaskedRiderDouble</h1>
      <div className="container p-5">
        <img
          src={images["panithan.jpg"]}
          className="rounded my-3"
          alt="Panithan"
          width="30%"
        ></img>
        <p>
          ชื่อ ปณิธาน เทพบุดดี รหัสนักศึกษา 623020477-5 <br />
          สาขาวิทยาการคอมพิวเตอร์ วิทยาลัยคอมพิวเตอร์ มหาวิทยาลัยขอนแก่น
        </p>
      </div>
      <div className="container p-5">
        <img
          src={images["pun.jpg"]}
          className="rounded my-3"
          alt="Panithan"
          width="30%"
        ></img>
        <p>
          ชื่อ นายปัณณธร ผาใต้ รหัสนักศึกษา 623020745-6 <br />
          สาขาวิทยาการคอมพิวเตอร์ วิทยาลัยคอมพิวเตอร์ มหาวิทยาลัยขอนแก่น
        </p>
      </div>
    </div>
  );
}

export default Contact;
