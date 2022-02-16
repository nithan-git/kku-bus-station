import images from "../img/Images.js";

function Contact() {
  return (
    <div className="container-fluid bg-dark text-light p-5">
      <h1 className="my-3 text-center">MaskedRiderDouble</h1>
      <div className="profile container p-5">
        <img
          src={images["panithan.jpg"]}
          className="rounded my-3"
          alt="Panithan"
          width="30%"
        ></img>
        <div class='detail'>
          <p>ชื่อ: ปณิธาน เทพบุดดี</p>
          <p>รหัสนักศึกษา: 623020477-5</p>
          <p>สาขา: วิทยาการคอมพิวเตอร์ </p>
          <p>คณะ: วิทยาลัยการคอมพิวเตอร์</p>
          <p>มหาวิทยาลัยขอนแก่น</p>
        </div>
      </div>
      <hr></hr>
      <div className="profile container p-5">
        <img
          src={images["pun.jpg"]}
          className="rounded my-3"
          alt="Panithan"
          width="30%"
        ></img>
        <div class='detail'>
          <p>ชื่อ: ปัณณธร ผาใต้</p>
          <p>รหัสนักศึกษา: 623020745-6</p>
          <p>สาขา: วิทยาการคอมพิวเตอร์ </p>
          <p>คณะ: วิทยาลัยการคอมพิวเตอร์</p>
          <p>มหาวิทยาลัยขอนแก่น</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
