import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Settings.css';
import myImage5 from './Settings.jpg';
import axios from 'axios';
import { URL } from './config';
import Swal from 'sweetalert2';
function Setting() {
 

const [loader, setloader] =useState()

const [username,setuser] = useState('');
const [mail,setmail] = useState('');
const [password,setpass] = useState('');
const [cpassword,setcpass] = useState('');

useEffect(() => {
  setmail(localStorage.getItem("email", mail));
  setuser(localStorage.getItem("email", username));
  setpass(localStorage.getItem("password", password));
  
}, []);

const handleChange1 = (event) => {
  
  setpass(event.target.value);
  
};

const handleChange2 = (event) => {
  
  setcpass(event.target.value);
};

const nav = useNavigate();
const change = async (event) => {
  event.preventDefault();
  if(password === cpassword){
    try {
      setloader(true)
      await axios.post(`${URL}/change`, {
        o_mail:mail,
          email: username,
          password: password,
        })
        .then(() => {
          //console.log("Moved Next");
          nav('/Designs');
          setloader(false)
          Swal.fire({
            icon:"success",
            position:"center",
            title:"Settings Saved",
            timer:1000,
            showConfirmButton: false
        });
        });
    } catch (error) {
      if (error.response){
        Swal.fire({
          icon:"error",
          position:"center",
          title:"Something Went Wrong",
          timer:1000,
          showConfirmButton: false
      });
      };
    }
    
  }
  else{
    Swal.fire({
      icon:"error",
      position:"center",
      title:"Password and Confirm Password Not Matched",
      timer:1000,
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
    <div className='row'>
      <div className='col-md-11 '>
        <div className='row'>
          <div className='col-md-6 mainchangediv'>
         <img className="img" src ={myImage5}/>

          </div>
          <div className='col-md-5 mainchangedivA'>
            <div className='settext'>
              
            <h2>Settings</h2>
            <br></br>

            <form onSubmit={(e)=>{change(e)}}>
            <div className="form-group">
              <label className="text-white" htmlFor="exampleInputEmail1">Email</label>
              <input id="update_email" type="email" className="form-control" value={username}  placeholder="Email"  onChange={(e) => setuser(e.target.value)}/>
            </div>
            <br></br>
            <div className="form-group">
              <label className="text-white" htmlFor="exampleInputEmail1">Password</label>
              <input id="update_password" type="password" className="form-control"  value={password} onChange={handleChange1}  placeholder="Password"/>
            </div>
            <br></br>
            <div className="form-group">
              <label className="text-white" htmlFor="exampleInputEmail1">Confirm Password</label>
              <input type="password" className="form-control" id="confirm_password" value={cpassword} onChange={handleChange2}  placeholder="Confirm Password"/>
            </div>
            <br></br>
         
       
       <div className="form-group" style={{paddingTop:"5px"}}>
       <button id = "Update_SettingBtn" type="submit" class="btn btn-primary setbtn" >Update Settings</button>
       {/* onClick={Box1} */}
       </div>
      
       

            </form>
            </div>
         

       
            
           
           

          </div>

        </div>



      </div>
      
    </div>
    </>
  )
}

export default Setting
