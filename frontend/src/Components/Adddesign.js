import React,{useState} from 'react';
import './Adddesign.css';
import axios from "axios";
import { URL as domain } from "./config";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Adddesign(props) {
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
const [loader, setloader] = useState()
  // const Box = (event) => {
  //   event.preventDefault();
  //   props.Msg("Upload");

  //   props.Showing();
  // }

  const nav = useNavigate();

  const [name, setname] = useState("");
  const [tool, settool] = useState("Photoshop");
  const [date, setdate] = useState("");
  const [status, setstaus] = useState("In Progress");
  const [file, setfile] = useState(null);
  const [pdf, setpdf] = useState(null);
  const [des, setdes] = useState("");

  const [msg, setMsg] = useState("");

  const imageHandler = (e) => {
    const f = e.target.files[0];
    if (f.size >= 10485760) {
      return alert("Max file size is 10Mb");
    } else {
      setfile(f);
    }
  };


  const imageHandler2 = (e) => {
    const p = e.target.files[0];
    if (p.size >= 30485760) {
      return alert("Max file size is 30Mb");
    } else {
      setpdf(p);
    }
  };

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", file);
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
  

  const upload = async (e) => {
    e.preventDefault();

    const url = await uploadImage(file);
    const url2 = await uploadpdf(pdf);
    // console.log(url);

    try {
      setloader(true)
      await axios.post(`${domain}/upload`, {
        name: name,
        tool: tool,
        dated: date,
        status: status,
        file: url,
        pdf:url2,
        des: des,
      });
    
      nav('/Designs');
      setloader(false)
      Swal.fire({
        icon:"success",
        position:"center",
        title:"Added Successfully",
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
    <div class="spinner-border loader mx-4" role="status">
    </div>
  
  </div>: 
  <>
    <div className='container'>
    <div  className='row maindiv'>

      <div className='col-5 mainpicdiv'>
      </div>

      <div className='col-4 adddiv'>
        <div className='adddivtxt'>
        <h2>Upload Design</h2>
        </div>
    
        <form className='form' onSubmit={upload}>
        
        <p className="has-text-centered">{msg}</p>

<div className="row">
  <div className="col form-group">
    <label className="text-white" htmlFor="exampleInputEmail1">
      Design Name
    </label>
    <input
      id="design_name"
      required
      type="name"
      className="form-control"
      aria-describedby="emailHelp"
      placeholder="Name"
      value={name}
      onChange={(e) => setname(e.target.value)}
    />
  </div>
  <div className="col form-group">
    <label className="text-white" htmlFor="exampleInputPassword1">
      Design Tool
    </label>
    <select
     required
      id="design_tool"
      class="form-select"
      aria-label="Default select example"
      value={tool}
      onChange={(e) => settool(e.target.value)}
    >
      <option value="Photoshop" >Photoshop</option>
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
     required
      id="design_date"
      type="date"
      className="form-control"
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
     required
      id="design_status"
      class="form-select"
      aria-label="Default select example"
      value={status}
      onChange={(e) => setstaus(e.target.value)}
    >
      <option value="In Progress" >In-Progress</option>
      <option value="Completed">Completed</option>
    </select>
  </div>
</div>

<div className="row" style={{ paddingTop: "5px" }}>
  <div className="col-12 form-group">
    <label className="text-white" htmlFor="exampleInputEmail1">
      Choose FrontPage
    </label>
    <div class="mb-3">
      <input
       required
        id="design_file"
        class="form-control"
        type="file"
        accept="image/png, image/jpeg"
        onChange={imageHandler}
      />
    </div>
  </div>
</div>

<div className="row" style={{ paddingTop: "5px" }}>
  <div className="col-12 form-group">
    <label className="text-white" htmlFor="exampleInputEmail1">
      Choose PDF File
    </label>
    <div class="mb-3">
      <input
       
        id="design_file"
        class="form-control"
        type="file"
        accept="application/pdf"
        onChange={imageHandler2}
      />
    </div>
  </div>
</div>

<div className="row">
  <div className="col-12 form-group">
    <label className="text-white" htmlFor="exampleInputEmail1">
      Desciption
    </label>
    <textarea
      id="design_description"
      className="form-control"
      aria-describedby="emailHelp"
      placeholder="Desciption"
      value={des}
      onChange={(e) => setdes(e.target.value)}
    />
  </div>
</div>

<div className="row" style={{ paddingTop: "5px" }}>
  <div className="col-12 form-group">
    <button id="design_uploadbtn" class="btn btn-primary uploadbtn" type='submit'>
      Upload
    </button>
  </div>
</div>
       </form>

       
      </div>
      
     </div>

    </div>
    </>
  )
}

export default Adddesign
