import { React, useState, useEffect } from "react";
import "./Designs.css";
import axios from "axios";
import { URL } from "./config";
import { useNavigate } from "react-router-dom";
import {  Link } from "react-router-dom";
import "sweetalert2";
import Swal from "sweetalert2";

function Designs() {

  const [loader,setloader] =useState()
 
  const [users, setUsers] = useState([]);
 
  const [searcher1, setsearch] = useState("");

  const [searcher2, setdid] = useState("");

  const handlechange1 = (event) => {
    setsearch(event.target.value);
  };

  const handlechange2 = (event) => {
    setdid(event.target.value);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    setloader(true)
    axios.get(`${URL}/users`).then((response) => {
      setUsers(response.data);
      setloader(false)
      
    });
  };

  const onDelete = async (id) => {
    try {
      setloader(true)
      await axios
        .post(`${URL}/del`, {
          userId: id,
        })
        .then(() => {
          getUsers();
          setloader(false)
          Swal.fire({
            icon:"success",
            position:"center",
            title:"Deleted Successfully",
            timer:1000,
            showConfirmButton: false
        });
        });
    } catch (e) {
      Swal.fire({
        icon:"error",
        position:"center",
        title:"Something Went Wrong",
        timer:1000,
        showConfirmButton: false
    });
    }
  };

  const Nav = useNavigate();

  const uservalues = (id, name, dated, status, description, tool, image) => {
    localStorage.setItem("ID", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("dated", dated);
    localStorage.setItem("status", status);
    localStorage.setItem("description", description);
    localStorage.setItem("tool", tool);
    localStorage.setItem("image", image);

    Nav("/Update");
  };

  const openInNewTab = (url) => {
    if(!url){
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'Nothing To Show',
        showConfirmButton: false,
        timer: 1000,
        showConfirmButton: false
       
      })
    }else
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const onsearch = async () => {
    if (searcher1 === "All Designs") {
      getUsers();
      setsearch('');
      setdid('');
    } else {
      localStorage.setItem("search", searcher1);
      setloader(true)
      axios.get(`${URL}/search?filter=${searcher1}&filter2=${searcher2}`).then((response) => {
        // console.log(response.data);
        setUsers(response.data);
        setdid('');
        setsearch('');
        setloader(false)
        
      });
    }
  };

  return (
    loader? <div style={{display:'center', justifyContent:'center'}}class="d-flex justify-content-center">
  <div class="spinner-border loader mx-4" role="status">
  </div>

</div>: 
    <>
      <div className="alldiv">
        <div className=" container row">
          <div className="col-1 sepdiv">
            <h1>Filter</h1>
          </div>

          <div className="col-3 sepdiv">
            <select
              id="filter_design"
              class="form-select sepdiv"
              aria-label="Default select example"
              //value={searcher1}
              onChange={handlechange1}
            >
              {/* <option  selected>Select Tool</option> */}
              <option value='All Designs' selected>All Designs</option>
              <option value="Photoshop">Photoshop</option>
              <option value="Illustrator">Illustrator</option>
            </select>
          </div>

          <div className="col-3 sepdiv">
            <input
              id="filter_id"
              type="text"
              className="form-control sepdiv"
              placeholder="Design ID"
              value={searcher2}
              onChange={handlechange2}
            />
          </div>

          <div className="col-1 sepdiv">
            <button
              id="filter_search"
              type="button"
              class="btn btn-primary btnbtn"
              onClick={onsearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <table class="table tablediv">
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} style={{ border: "3px solid rgb(255, 174, 0)" }}>
              <td style={{ width: "20%" }}>
                <img className="pictr" src={user.image} />
              </td>
              <td style={{ width: "55%" }} className="pictr1">
                <h2>
                  ID: {user.id} {user.name}
                </h2>
                <p>{user.description}</p>
                <small>
                  <p>{user.dated}</p>
                </small>
              </td>

              <td className="row butt">
                <button
                  type="button"
                  class="col-3 btn btn-primary"
                  onClick={() => openInNewTab(`${user.file}`)}
                >
                  View
                </button>
                <Link
                  to="/Update"
                  style={{ backgroundColor: "rgb(255, 174, 0)" }}
                  type="button"
                  class="col-3 btn btn-primary mx-1 "
                  onClick={() =>
                    uservalues(
                      user.id,
                      user.name,
                      user.dated,
                      user.status,
                      user.description,
                      user.tool,
                      user.image
                    )
                  }
                >
                  Update
                </Link>
                <button
                  style={{ backgroundColor: "red" }}
                  type="button"
                  class="col-3 btn btn-primary mx-1"
                  onClick={() => onDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Designs;
