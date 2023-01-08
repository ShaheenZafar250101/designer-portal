import React, { useEffect, useState } from "react";
import "./Update.css";
import { AiFillPlusCircle } from "react-icons/ai";
import axios from "axios";
import { URL as domain } from "./config.js";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap'
import Swal from "sweetalert2";

function Update(props) {

  



  // <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  // const Box3 = (event) => {
  //   event.preventDefault();
  //   props.Msg("Update");

  //   props.Showing();
  // }

  const [loader, setloader] = useState();

  const nav = useNavigate();
  const [name, setname] = useState("");
  const [tool, settool] = useState("");
  const [date, setdate] = useState("");
  const [status, setstaus] = useState("");
  const [file, setfile] = useState(null);
  const [des, setdes] = useState("");
  const [id, setid] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [image, setImage] = useState(null);
  const [pdf, setpdf] = useState(null);

  const validateImg = (e) => {
    const f = e.target.files[0];
    if (f.size >= 30485760) {
      return alert("Max file size is 30Mb");
    } else {
      setImage(f);
      setImagePreview(URL.createObjectURL(f));
    }
  };

  const validatepdf = (e) => {
    const p = e.target.files[0];
    if (p.size >= 30485760) {
      return alert("Max file size is 30Mb");
    } else {
      setpdf(p);
      //setImagePreview(URL.createObjectURL(f));
    }
  };

  useEffect(() => {
    setname(localStorage.getItem("Name", name));
    settool(localStorage.getItem("tool", tool));
    setdate(localStorage.getItem("dated", date));
    setstaus(localStorage.getItem("status", status));
    setImagePreview(localStorage.getItem("image", imagePreview));
    setdes(localStorage.getItem("description", des));
    setid(localStorage.getItem("ID", id));
  }, []);

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "acvwnyrs");
    try {
      setloader(true)
      let res = await fetch(
        "https://api.cloudinary.com/v1_1/dnx306zvi/image/upload",
        {
          method: "post",
          body: data,
        }
      );
      const urlData = await res.json();
      setloader(false)
      return urlData.url;
    } catch (e) {
      alert("error");
      console.log(e);
    }
  };

  const uploadpdf = async () => {
    const data = new FormData();
    data.append("file", pdf);
    data.append("upload_preset", "acvwnyrs");
    try {
      setloader(true)
      let res = await fetch(
        "https://api.cloudinary.com/v1_1/dnx306zvi/image/upload",
        {
          method: "post",
          body: data,
        }
      );
      const urlData = await res.json();
      setloader(false)
      return urlData.url;
    } catch (e) {
      alert("error");
      console.log(e);
    }
  };


  const update = async (e) => {
    e.preventDefault();
  
    const pic = await uploadImage(image);
    console.log(pic);
    const pd = await uploadpdf(pdf);
    console.log(pd);

    try {
      setloader(true);
      await axios.post(`${domain}/update`, {
        name: name,
        tool: tool,
        dated: date,
        status: status,
        file: pic,
        des: des,
        pdf:pd,
        id: id,
      });
      nav("/Designs");
      setloader(false)
      Swal.fire({
          icon:"success",
          position:"center",
          title:"Updated Successfully",
          timer:1000,
          showConfirmButton: false
      });
    } catch (error) {
      if (error.response) {
        Swal.fire({
          icon:"error",
          position:"center",
          title:"Something Went Wrong",
          timer:1000,
          showConfirmButton: false
      });
      }
    }
  };

  return (
    loader? <div style={{display:'center', justifyContent:'center'}}class="d-flex justify-content-center">
 
    
    <div class="spinner-border loader" role="status">

  </div>
  </div>: 
    <div className="container">
      <div className="row maindiv">
        <div className="col-md-5 mainpicdiv1"></div>

        <div className="col-md-5 adddiv">
          <div className="adddivtxt">
            <h2>Update Design</h2>
          </div>

          <form className="form" onSubmit={update}>
            <div className="row">
              <div className="col-6 form-group">
                <label className="text-white" htmlFor="exampleInputEmail1">
                  Design Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Update_DN"
                  aria-describedby="emailHelp"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
              </div>
              <div className="col-6 form-group">
                <label className="text-white" htmlFor="exampleInputPassword1">
                  Design Tool
                </label>
                <select
                  id="Update_DT"
                  class="form-select"
                  aria-label="Default select example"
                  value={tool}
                  onChange={(e) => settool(e.target.value)}
                >
                  <option value="Photoshop">Photoshop</option>
                  <option value="Illustrator">Illustrator</option>
                </select>
              </div>
            </div>

            <div className="row" style={{ paddingTop: "5px" }}>
              <div className="col-6 form-group">
                <label className="text-white" htmlFor="exampleInputEmail1">
                  Date of Creation
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="Update_DD"
                  aria-describedby="emailHelp"
                  value={date}
                  onChange={(e) => setdate(e.target.value)}
                />
              </div>
              <div className="col-6 form-group">
                <label className="text-white" htmlFor="exampleInputPassword1">
                  Status
                </label>
                <select
                  id="Update_design_status"
                  class="form-select"
                  aria-label="Default select example"
                  value={status}
                  onChange={(e) => setstaus(e.target.value)}
                >
                  <option value="In Progress">In-Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>

            <div className="row" style={{ paddingTop: "5px" }}>
              <div className="col-12 form-group">
                <img
                  src={imagePreview || "no image"}
                  className="edit-pic"
                  alt="Image"
                />
                <label htmlFor="image-upload" className="image-upload-label">
                  <AiFillPlusCircle className="add-picture" />
                </label>
                <input
                  type="file"
                  id="image-upload"
                  hidden
                  accept="image/png, image/jpeg"
                  onChange={validateImg}
                />
              </div>
            </div>
            <br></br>
            <div className="row" style={{ paddingTop: "5px" }}>
              <div className="col-12 form-group">
                <label className="text-white" htmlFor="image-upload">
                  Choose PDF File
                </label>
                <input
                  type="file"
                  id="image-upload"
                  accept="application/pdf"
                  class="form-control"
                  onChange={validatepdf}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12 form-group">
                <label className="text-white" htmlFor="exampleInputEmail1">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="Update_Ddescription"
                  aria-describedby="emailHelp"
                  placeholder="Desciption"
                  value={des}
                  onChange={(e) => setdes(e.target.value)}
                />
              </div>
            </div>

            <div className="row" style={{ paddingTop: "5px" }}>
              <div className="col-12 form-group">
                <button id="Update_DBtn" class="btn btn-primary uploadbtn">
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Update;
