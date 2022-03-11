import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { updateuser } from '../js/userSlice';
import Footer from '../screens/Footer';

const Updatepassword = () => {
  const user = useSelector((state) => state.user.user);
 
  const dispatch = useDispatch();
  const[reset,setreset]=useState({
    password:"",
    confirmpassword:""
  })
  const submitHandler = (e) => {
    e.preventDefault();
    if (reset.password == reset.confirmpassword) {
      dispatch(updateuser({ id: user?._id, reset }));

      Swal.fire("Password Updated successfuly", "success");
    } else {
      Swal.fire("not match", "fail");
    }
  };
  return (
    <div>
        <div className="arrier-signin">
        <div className="login" >
          <h1 >Update Password</h1>
          <div>
          <label style={{width:"150px"}}>Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter password" onChange={(e)=>setreset({ ...reset, password: e.target.value })}
            
          />
        </div>
        <div>
          <label style={{width:"150px"}}>Confirm Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter confirm password" onChange={(e)=>setreset({ ...reset, confirmpassword: e.target.value })}
            
          />
        </div>
        <div style={{marginTop:"5px",marginLeft: "150px",width:"300px",height:"30px"}} class="boxx-3" onClick={submitHandler} >
              <div class="btn btn-three" style={{width: "360px",height: "50px"}}>
                <span style={{ marginLeft: "80px", marginTop: "5px" }}>
                 Update Password 
                </span>
              </div>
            </div>
            </div>
            </div>
            <Footer/>
    </div>
  )
}

export default Updatepassword