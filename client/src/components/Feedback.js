import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2';
import { postfeedback } from '../js/feedbackSlice';
import Footer from '../screens/Footer';
const Feedback = ({ping,setping}) => {
  const dispatch = useDispatch();
  const[feedback,setfeedback]=useState({
    name:"",
    lastname:"",
    message:""
  });
  
  return (
    <div className="feedback">
        <div className="feedback-content">
            <h1>Your FeedBack</h1>
        <div>
            <label>Name</label>
            <input type="text" placeholder='Enter Your Name....' onChange={(e)=>setfeedback({ ...feedback, name: e.target.value })}/>
        </div>
        <div>
            <label>LastName</label>
            <input type="text" placeholder='Enter Your LastName....' onChange={(e)=>setfeedback({ ...feedback, lastname: e.target.value })}/>
        </div>
        <div>
            <label>Message</label>
            <textarea type="text" placeholder='Enter Your Feedback....' onChange={(e)=>setfeedback({ ...feedback, message: e.target.value })}/>
        </div>
        <div onClick={() => {
                  dispatch(postfeedback(feedback));
                  Swal.fire(
                    "FeedBack created",
                    "You clicked the button!",
                    "success"
                  );
                  setping(!ping);
                }}
          style={{
            marginTop: "30px",
            marginLeft: "40px",
            height: "30px",
            width: "400px",
          }}
          class="boxx-3"
        >
          <div
            className="btn btn-three"
            style={{ marginLeft: "0px", marginTop: "-2px", width: "400px" }}
          >
            <span>SUBMIT</span>
          </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Feedback