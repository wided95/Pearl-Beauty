import React, { useRef } from "react";
import Footer from "../screens/Footer";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_65ozywg",
        "template_g2hd68k",
        form.current,
        "fZmHAGf07raEaanPn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="arrier-plan">
      <div >
        <form ref={form} onSubmit={sendEmail}className="Liste">
          <div className="info">
            <h2 style={{ marginTop: "13px" }}>Store Information</h2>
            <div>
              <ion-icon name="location"></ion-icon>
              <p>Demo-store United States</p>
            </div>
            <br></br>
            <hr />
            <div>
              <ion-icon name="call"></ion-icon>
              <p>Call us:</p>
            </div>
            <p>+216 21874033</p>
            <br></br>
            <hr />
            <div>
              <ion-icon name="mail"></ion-icon>
              <p>Email us:</p>
            </div>
            <p>admin@gmail.com</p>
            <br />
          </div>
          <div className="contact">
            <h2>Contact Us</h2>
            <div>
              <label>Name</label>
              <input type="text" placeholder="Enter Name..." name="from_name" />
            </div>
            <div>
              <label>Email adresse</label>
              <input
                type="email"
                placeholder="your@email.com"
                name="from_email"
              />
            </div>

            <div>
              <label>Message</label>
              <textarea
                type="text"
                placeholder="How can will help?"
                name="message"
              />
            </div>
            <div style={{marginTop:"-15px",marginLeft: "50px"}} >
              <div class="btn btn-three" style={{width: "360px",height: "50px"}}>
                <span style={{ marginLeft: "50px", marginTop: "5px" }}>
                  <input style={{ marginBottom: "20px",color:"white" }} class="boxx-3" type="submit" value="SEND" onClick={()=>Swal.fire("Email sended successfuly", "success")} />
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
