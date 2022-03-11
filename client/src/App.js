import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Profile from "./components/Profile";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { current } from "./js/userSlice";
import PrivateRoute from "./route/PrivateRoute";
import Contact from "./components/Contact";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import ProductDetails from "./screens/ProductDetails";
import DashboardAdmin from "./screens/DashboardAdmin";
import EyeCare from "./components/EyeCare";
import Facemask from "./components/Facemask";
import Suncare from "./components/Suncare";
import Shampo from "./components/Shampo";
import Hairdye from "./components/Hairdye";
import Hairstyle from "./components/Hairstyle";
import Eyebrow from "./components/Eyebrow";
import Eyeliner from "./components/Eyeliner";
import Eyeshadow from "./components/Eyeshadow";
import Mascara from "./components/Mascara";
import Blush from "./components/Blush";
import Concealer from "./components/Concealer";
import Foundation from "./components/Foundation";
import Facepowder from "./components/Facepowder";
import Faceprimer from "./components/Faceprimer";
import Lipliner from "./components/Lipliner";
import Lipstick from "./components/Lipstick";
import Liquidlipstick from "./components/Liquidlipstick";
import Nails from "./components/Nails";
import { getproducts } from "./js/productSlice";
import Allproduct from "./components/Allproduct";
import Reports from "./components/Reports";
import Orders from "./components/Orders";
import Cart from "./components/Cart";
import AdminRoute from "./route/AdminRoute";
import Shipping from "./components/Shipping";
import OrderDetails from "./components/OrderDetails";
import Feedback from "./components/Feedback";
import { getfeedback } from "./js/feedbackSlice";
import Discount from "./components/Discount";
import Resetpassword from "./components/Resetpassword";
import Updatepassword from "./components/Updatepassword";
function App() {
  const [ping, setping] = useState(false);
  const dispatch = useDispatch();
  const isAuth = localStorage.getItem("token");
  useEffect(() => {
    if (isAuth) {
      dispatch(current());
    }
    dispatch(getproducts());
    dispatch(getfeedback());
  }, [ping]);

  return (
    <div className="App">
      {!window.location.pathname.includes("/admin") ? <Navbar /> : null}
      <main style={{}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discount" element={<Discount />} />
          <Route element={<PrivateRoute />}>
            <Route
              path="/profile"
              element={<Profile ping={ping} setping={setping} />}
            ></Route>
          </Route>
          <Route element={<AdminRoute />}>
            <Route
              path="/dashboard"
              element={<DashboardAdmin ping={ping} setping={setping} />}
            />
          </Route>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/productdetail"
            element={<ProductDetails ping={ping} setping={setping} />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/eyecare" element={<EyeCare />} />
          <Route path="/facemask" element={<Facemask />} />
          <Route path="/suncare" element={<Suncare />} />
          <Route path="/shampo" element={<Shampo />} />
          <Route path="/hairdye" element={<Hairdye />} />
          <Route path="/hairstyle" element={<Hairstyle />} />
          <Route path="/eyebrow" element={<Eyebrow />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/orderdetail/:id" element={<OrderDetails />} />
          <Route path="/eyeliner" element={<Eyeliner />} />
          <Route path="/eyeshadow" element={<Eyeshadow />} />
          <Route path="/mascara" element={<Mascara />} />
          <Route path="/blush" element={<Blush />} />
          <Route path="/concealer" element={<Concealer />} />
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/facepowder" element={<Facepowder />} />
          <Route path="/faceprimer" element={<Faceprimer />} />
          <Route path="/lipliner" element={<Lipliner />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/lipstick" element={<Lipstick />} />
          <Route path="/liquidlipstick" element={<Liquidlipstick />} />
          <Route path="/Nails" element={<Nails />} />
          <Route
            path="/productdetail/:id"
            element={<ProductDetails ping={ping} setping={setping} />}
          />
          <Route
            path="/feedback"
            element={<Feedback ping={ping} setping={setping} />}
          />
          <Route path="/resetpassword" element={<Resetpassword />} />
          <Route path="/updatepassword" element={<Updatepassword />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
