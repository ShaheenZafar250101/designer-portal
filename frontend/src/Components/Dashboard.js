import React, { useEffect, useState } from 'react'
import './Dasboard.css'
import axios from 'axios';
import { URL } from './config';
// import Adddesign from './Adddesign';
import { ResponsiveContainer, BarChart, Bar , XAxis , YAxis} from 'recharts';
function Dashboard() {
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

  const [total,settotal] = useState('');
  const [comp,setcomp] = useState('');
  const [prog,setprog] = useState('');
  const [jan,setjan] = useState('');
  const [feb,setfeb] = useState('');
  const [mar,setmar] = useState('');
  const [apr,setapr] = useState('');
  const [may,setmay] = useState('');
  const [jun,setjun] = useState('');
  const [jul,setjul] = useState('');
  const [aug,setaug] = useState('');
  const [sep,setsep] = useState('');
  const [oct,setoct] = useState('');
  const [nov,setnov] = useState('');
  const [dec,setdec] = useState('');
  

  useEffect((e) => {
// e.preventDefault();
    gettotal();
    getcomplete();
    getprogress();
    getjan();
    getfeb();
    getmar();
    getapr();
    getmay();
    getjun();
    getjul();
    getaug();
    getsep();
    getoct();
    getnov();
    getjdec();
    
  }, []);

  const Array = [
  {
    Month: "Jan",
    Designs : jan,
   
  },

  {
    Month: "Feb",
    Designs : feb,
   

  },

  {
    Month: "Mar",
    Designs : mar,
   

  },

  {
    Month: "Apr",
    Designs : apr,
   

  },

  {
    Month: "May",
    Designs : may,
   

  },


  {
    Month: "Jun",
    Designs : jun,
   

  },


  {
    Month: "Jul",
    Designs : jul,
   

  },

  {
    Month: "Aug",
    Designs : aug,
   

  },


  {
    Month: "Sept",
    Designs : sep,
   

  },


  {
    Month: "Oct",
    Designs : oct,
   

  },


  {
    Month: "Nov",
    Designs : nov,
   

  },

  {
    Month: "Dec",
    Designs : dec,
   

  },
]

const [loader, setloader] = useState();

const gettotal = async () => {
  setloader(true)
  axios.get(`${URL}/total`).then((response) => {
    // console.log(response.data);
    settotal(response.data);
    setloader(false)
  });
};

const getprogress = async () => {
  axios.get(`${URL}/progress`).then((response) => {
    // console.log(response.data);
    setprog(response.data);
  });
};

const getcomplete = async () => {
  axios.get(`${URL}/complete`).then((response) => {
    // console.log(response.data);
    setcomp(response.data);
  });
};

const getjan = async () => {
  axios.get(`${URL}/january`).then((response) => {
    // console.log(response.data);
    setjan(response.data);
  });
};

const getfeb = async () => {
  axios.get(`${URL}/february`).then((response) => {
    // console.log(response.data);
    setfeb(response.data);
  });
};
const getmar = async () => {
  axios.get(`${URL}/march`).then((response) => {
    // console.log(response.data);
    setmar(response.data);
  });
};
const getapr = async () => {
  axios.get(`${URL}/april`).then((response) => {
    // console.log(response.data);
    setapr(response.data);
  });
};
const getmay = async () => {
  axios.get(`${URL}/may`).then((response) => {
    // console.log(response.data);
    setmay(response.data);
  });
};
const getjun = async () => {
  axios.get(`${URL}/june`).then((response) => {
    // console.log(response.data);
    setjun(response.data);
  });
};
const getjul = async () => {
  axios.get(`${URL}/july`).then((response) => {
    // console.log(response.data);
    setjul(response.data);
  });
};
const getaug = async () => {
  axios.get(`${URL}/august`).then((response) => {
    // console.log(response.data);
    setaug(response.data);
  });
};
const getsep = async () => {
  axios.get(`${URL}/september`).then((response) => {
    // console.log(response.data);
    setsep(response.data);
  });
};
const getoct = async () => {
  axios.get(`${URL}/october`).then((response) => {
    // console.log(response.data);
    setoct(response.data);
  });
};
const getnov = async () => {
  axios.get(`${URL}/november`).then((response) => {
    // console.log(response.data);
    setnov(response.data);
  });
};
const getjdec = async () => {
  axios.get(`${URL}/december`).then((response) => {
    // console.log(response.data);
    setdec(response.data);
  });
};

  return (

    loader? <div style={{display:'center', justifyContent:'center'}}class="d-flex justify-content-center">
 
  
  <div class="spinner-border loader mx-4" role="status">
  </div>

</div>: 
    <>
    
 
    <div className='mainpage'>
    <div className='row'>
    <div className='col-md-4 maincol'>
        <h3 className='maincoltext'><b>Total Design</b></h3>
        <div className='maincoltextA' >
        <h1 id = "total" >{total}</h1>
        </div>
  
        </div>

    
        <div className='col-md-4 maincol'>
        <h3 className='maincoltext'><b>In-Progress</b></h3>
        <div className='maincoltextA' >
        <h1 id= "inprogress">{prog}</h1>
        </div>
  
        </div>



        <div className='col-md-5 maincol'>
        <h3 className='maincoltext'><b>Completed</b></h3>
        <div className='maincoltextA'>
        <h1 id="completed">{comp}</h1>
        </div>
  
        </div>
    </div>

    <div className='charttxt'>
      <h2>Timeline</h2>

    </div >


    <div className='chartdiv'>
    
      
      <ResponsiveContainer width="56%" aspect={2} >
        <BarChart data={Array} width={500} height={800}>
          <XAxis id="month" dataKey="Month"/>
          <YAxis />
          <Bar id="desgin" dataKey="Designs" fill='rgb(255, 174, 0)'/>
        </BarChart>
      </ResponsiveContainer>
      </div>
  


    </div>
   
    </>
  )
}

export default Dashboard
