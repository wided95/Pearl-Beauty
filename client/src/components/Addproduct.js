import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addprod } from "../js/productSlice";
import Swal from "sweetalert2";

const Addproduct = ({ ping, setping }) => {
  const dispatch = useDispatch();
  const [product, setproduct] = useState({
    name: "",
    description: "",
    price: 0,
    rating: "",
    url: "",
    category: "",
    stock: "",
    createAt: "",
  });

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
  const [show, setshow] = useState(false);
  return (
    <div>
      <div class="boxx-3" style={{ marginLeft: "5px" }}>
        <div class="btn btn-three" onClick={() => setshow(!show)}>
          <span style={{ marginLeft: "5px", marginTop: "5px" }}>
            Add Product
          </span>
        </div>
      </div>
      {show ? (
        <div class="Add-product">
          <h1>Create Product</h1>
          <div className="product" style={{ position: "relative" }}>
            <ion-icon
              name="close-sharp"
              style={{
                position: "absolute",
                top: "-70px",
                left: "980px",
                right: "10px",
                cursor: "pointer",
              }}
              onClick={() => setshow(!show)}
            ></ion-icon>
            <input
              type="text"
              placeholder="Product Name"
              onChange={(e) => setproduct({ ...product, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Product Description"
              onChange={(e) =>
                setproduct({ ...product, description: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Product Price"
              onChange={(e) =>
                setproduct({ ...product, price: e.target.value })
              }
            />
           {/*<input
              type="text"
              placeholder="Product Rate"
              onChange={(e) =>
                setproduct({ ...product, rating: e.target.value })
              }
            />*/}
            <select name="pets" id="pet-select" onChange={(e) =>
                setproduct({ ...product, category: e.target.value })
              }>
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
           {/*<input
              type="text"
              placeholder="Product Category"
              onChange={(e) =>
                setproduct({ ...product, category: e.target.value })
              }
            />*/} 
            <input
              type="text"
              placeholder="Stock"
              onChange={(e) =>
                setproduct({ ...product, stock: e.target.value })
              }
            />
            {/*<input
              type="text"
              placeholder="CreateAt"
              onChange={(e) =>
                setproduct({ ...product, createAt: e.target.value })
              }
            />*/}
            <input id="file" type="file" onChange={uploadFileHandler} />
            <div
              class="boxx-3"
              style={{ color:"gray",
                marginLeft: "365px",
                width: "300px",
                height: "30px",
                marginBottom: "30px",
              }}
            >
              <div
                class="btn btn-three"
                onClick={() => {
                  dispatch(addprod(product));
                  Swal.fire(
                    "Product created",
                    "You clicked the button!",
                    "success"
                  );
                  setping(!ping);
                  setshow(!show);
                }}
                style={{ width: "300px" }}
              >
                <span style={{ marginLeft: "5px", marginTop: "5px" }}>
                  CREATE
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Addproduct;
