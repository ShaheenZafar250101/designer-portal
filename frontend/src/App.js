
import Login from './Components/Login';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Pop from './Components/Pop';



function App() {

  const [isShow, invokeModal] = React.useState(false)
  const initModal = () => {
    return invokeModal(!false)
  }

  const Close =() => {
      return invokeModal(false)
  }

  

  return (

    
    <BrowserRouter>
      <div className="container mt-3">
      <Pop show = {isShow} popclose= {Close}/>
    </div>
    <Login popopen = {initModal} popclose= {Close} />
    <Routes>
   

     
   </Routes>
  

   </BrowserRouter>


      


         
   
  
      
    
 
   
  
  
  );
}

export default App;
