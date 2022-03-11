import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateprod } from "../js/productSlice";

const Updateproduct = ({ id, ping, setping }) => {
  const [product, setproduct] = useState({});
  const [show, setshow] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const products = useSelector((state) => state.product.products);
  const prod = products?.find((el) => el._id == params.id);
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    try {
      const { data } = await axios.post(
        "http://localhost:5000/upload/",
        bodyFormData
      );
      setproduct({ ...product, url: data });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div
        class="boxx-3"
        style={{ width: "50px", height: "30px", marginLeft: "0px" }}
      >
        <div class="btn btn-three" onClick={() => setshow(!show)}>
          <span style={{ marginLeft: "5px", marginTop: "5px" }}>
            <ion-icon name="pencil-sharp"></ion-icon>
          </span>
        </div>
      </div>
      {show ? (
        <div className="modal-update">
          <div className="modal-body" style={{ position: "relative" }}>
            <ion-icon
              name="close-sharp"
              style={{
                position: "absolute",
                width: "20px",
                top: "-30px",
                left: "525px",
                right: "10px",
                cursor: "pointer",
              }}
              onClick={() => setshow(!show)}
            ></ion-icon>
            <input
              style={{ marginTop: "50px" }}
              type="text"
              value={products?.name}
              onChange={(e) => setproduct({ ...product, name: e.target.value })}
            ></input>
            <input
              type="text"
              placeholder="Product Description...."
              onChange={(e) =>
                setproduct({ ...product, description: e.target.value })
              }
            ></input>
            <input
              type="text"
              placeholder="Product Price..."
              onChange={(e) =>
                setproduct({ ...product, price: e.target.value })
              }
            ></input>
            <select
              name="pets"
              id="pet-select"
              onChange={(e) =>
                setproduct({ ...product, category: e.target.value })
              }
            >
              <option value="">--Please choose an category--</option>
              <option value="nails">nails</option>
              <option value="eyeshadow">eyeshadow</option>
              <option value="eyeliner">eyeliner</option>
              <option value="eyecare">eyecare</option>
              <option value="eyebrow">eyebrow</option>
              <option value="facemask">facemask</option>
              <option value="suncare">suncare</option>
              <option value="mascara">mascara</option>
              <option value="lipstick">lipstick</option>
              <option value="lipliner">lipliner</option>
              <option value="liquidlip">liquidlip</option>
              <option value="foundation">foundation</option>
              <option value="powder">powder</option>
              <option value="blush">blush</option>
              <option value="concealer">concealer</option>
              <option value="primer">primer</option>
              <option value="hairshampo">hairshampo</option>
              <option value="hairdye">hairdye</option>
              <option value="hairstyle">hairstyle</option>
            </select>
            <input
              type="text"
              placeholder="Product Rate..."
              onChange={(e) =>
                setproduct({ ...product, rating: e.target.value })
              }
            ></input>
            <input type="file" onChange={uploadFileHandler} />
            {/*<select onChange={(e) =>setproduct({...product, category:e.target.value})}>
          <option value="soins">soins</option>
          <option value="maison">maison</option>
        </select>*/}
            <div
              class="boxx-3"
              style={{
                width: "500px",
                height: "30px",
                marginLeft: "20px",
                marginTop: "40px",
              }}
            >
              <div
                class="btn btn-three"
                style={{ width: "500px" }}
                onClick={() => {
                  dispatch(updateprod({ id: id, product }));
                  setping(!ping);
                  setshow(!show);
                }}
              >
                <span style={{ marginLeft: "5px" }}>Update product</span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Updateproduct;
