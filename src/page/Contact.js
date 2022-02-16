import images from "../img/Images.js";

function Contact() {
  return (
    <div className="container-fluid bg-dark text-light p-5 text-center">
      <h1>MaskedRiderDouble</h1>
      <div className="container-sm">
        <div className="row">
          <div className="col">
            <img
              src={images["panithan.jpg"]}
              className="img-fluid rounded my-3"
              alt="Panithan"
              width="30%"
            ></img>
          </div>
          <div className="col">
            <img
              src={images["pun.jpg"]}
              className="img-fluid rounded my-3"
              alt="Panithan"
              width="30%"
            ></img>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              ชื่อ ปณิธาน เทพบุดดี รหัสนักศึกษา 623020477-5 <br />
              สาขาวิทยาการคอมพิวเตอร์ วิทยาลัยคอมพิวเตอร์ มหาวิทยาลัยขอนแก่น
            </p>
          </div>
          <div className="col">
            <p>
              ชื่อ นายปัณณธร ผาใต้ รหัสนักศึกษา 623020745-6 <br />
              สาขาวิทยาการคอมพิวเตอร์ วิทยาลัยคอมพิวเตอร์ มหาวิทยาลัยขอนแก่น
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
