import "./Login.css";
import React, { useState , useEffect } from "react";
import ReactDOM from "react-dom/client";

import myImage from "./logo192.png";
// import Dashboard from "./Dashboard";
// import Adddesign from "./Adddesign";
// import { useNavigate } from "react-router-dom";
import Main from "./Main";
import axios from "axios";
import { URL } from "./config";
import Swal from "sweetalert2";

function Login(props) {
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />;


  const [loader, setloader] = useState();
  const [token,setToken] = useState('skieruc8598vfhfv7fbcer8rerfn8');

  // const nav = useNavigate();

  const [usern, setusern] = useState("");

  const [pass, setpass] = useState("");

  // useEffect(() => {
  //   // setToken(sessionStorage.setItem('token',token));
  //   // if(token){
  //   //   View();
  //   }        
  //     }, []);


  const handleChange = (event) => {
    setusern(event.target.value);
  };

  const handleChange1 = (event) => {
    setpass(event.target.value);
  };

  localStorage.setItem("email", usern);
  localStorage.setItem("password", pass);



 

  const View = () => {
    // event.preventDefault();
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <Main />
      </React.StrictMode>
    );
  };


  const Check = async (event) => {
    event.preventDefault();
    try { 
      setloader(true);
      
      await axios.post(`${URL}/login`, {
          email: usern,
          password: pass,
          r_token:token
        })
        .then((data) => {
          //console.log("Moved Next");
          setloader(false);
          Swal.fire({
            icon:"success",
            position:"center",
            title:"Login Successfully",
            timer:1000,
            showConfirmButton: false
        });
          View()
        });
        
    } catch (error) {
      if (error.response) console.log("error");
      setloader(false);
      Swal.fire({
        icon:"error",
        position:"center",
        title:"Email Or Password Not Found",
        timer:2000,
        showConfirmButton: false
    });
    }
  };

  return (
    loader? <div style={{display:'center', justifyContent:'center'}}class="d-flex justify-content-center">
   
   
    <div class="spinner-border loader mx-4" role="status">
    </div>
  </div>: 
    <>
   
 
      <div className="container maindiv">
        <div className="row">
          <div className="col-md-6 picdiv">
            <div className="picdivtxt">
              <h2 className="pcdivtxtmain ">
                <cite>
                  <b>"Design is intelligence made visible."</b>
                </cite>
              </h2>
              <h4 className="pcdivtxtmain">Alina Wheeler, author</h4>
            </div>
          </div>

          <div className="col-md-6 formdivbackground">
            <div className="container formdivtext">
              <img className="formdivpic" src={myImage} alt="profile" />
              <form className="form" onSubmit={(e)=>{Check(e)}}>
                <div className="form-group">
                  <label className="text-white" htmlFor="exampleInputEmail1">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={handleChange}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label className="text-white" htmlFor="exampleInputPassword1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={handleChange1}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary logbtn my-4"
                  // onClick={Lion}
                >
                  Log In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
