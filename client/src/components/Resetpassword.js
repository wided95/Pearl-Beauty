import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Footer from "../screens/Footer";
const Resetpassword = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t5n3m2j",
        "template_qxrh3mj",
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
    <div>
      <div className="arrier-signin">
        <form className="login" ref={form} onSubmit={sendEmail}>
          <h1>Reset Password</h1>
          <div>
            <label>Email address</label>
            <input
              type="email"
              placeholder="your@gmail.com"
              name="from_email"
            />
          </div>
           <div className="button-reset-password" style={{ marginTop: "-15px", marginLeft: "150px" }}>
            <button  type="submit">SEND</button>
          </div>
          {/*<div style={{marginTop:"-15px",marginLeft: "50px"}} >
              <div class="btn btn-three" style={{width: "360px",height: "50px"}}>
                <span style={{ marginLeft: "50px", marginTop: "5px" }}>
                  <input style={{ marginBottom: "20px",color:"white" }} class="boxx-3" type="submit" value="Reset Password" onClick={()=>Swal.fire("Email sended successfuly", "success")} />
                </span>
              </div>
  </div>*/}
         
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default Resetpassword;
