import React ,{useEffect,useState} from 'react'
import './Navbar.css';
import myImage from './logo192.png';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from '../App';
import Swal from 'sweetalert2';
import axios from 'axios';
import {URL} from './config.js';


function Navbar(props) {
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  
  const [mail,setmail] = useState('');


useEffect(() => {
  setmail(localStorage.getItem("email", mail));
  
  
}, []);

  const swit = async () => {

  await axios.post(`${URL}/removetoken`, {
    o_mail:mail,
    })
    .then(() => {
      localStorage.removeItem("email");
  localStorage.removeItem("password");
  localStorage.removeItem('token');
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      
      
        <App/>
        
      
      );
      
      Swal.fire({
        icon:"success",
        position:"center",
        title:"Signed Out",
        timer:1000,
        showConfirmButton: false
    });
    });
   
  

  }

  


  
  return (
   
  
<><div class="sidebar">
  <div className='sidebarimagediv'>
  <img style={{width : "200px", align: "center"}} src = {myImage} alt="logo"/>
  </div>
  <Link to="/">DASHBOARD</Link>
  <Link to="/Designs">DESIGNS</Link>
  <Link to="/Add">ADD DESIGN</Link>
  <Link to="/Setting"> SETTINGS </Link>

<div className='logoutdiv'>
<Link className="logouttxt" onClick={swit}><b>SIGN OUT</b></Link>
</div>


</div>



</>



   
   
  )
}

export default Navbar
