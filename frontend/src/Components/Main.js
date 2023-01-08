import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Adddesign from "./Adddesign";
import Update from "./Update";
import Setting from "./Setting";
import Login from "./Login";
import Designs from "./Designs";
import Box from "./Box";

function Main(props) {
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />;

  const [Confirm, setConfirm] = useState();

  const [message, setmessage] = useState();

  const showModal = () => {
    return setConfirm(true);
  };

  const closeModal = () => {
    return setConfirm(false);
  };

  const msgmodal = (message) => {
    setmessage(message);
  };

  return (
    <BrowserRouter>
      <Box display={Confirm} displaymsg={message} Closing={closeModal} />

      <div className="row">
        <div className="col-2">
          <Navbar />
        </div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="col-9">
                <Dashboard />
              </div>
            }
          />

          <Route
            exact
            path="/Add"
            element={
              <div className="col-9">
                <Adddesign Showing={showModal} Msg={msgmodal} />
              </div>
            }
          />

          <Route
            exact
            path="/Update"
            element={
              <div className="col-9">
                <Update Showing={showModal} Msg={msgmodal} />
              </div>
            }
          />

          <Route
            exact
            path="/Setting"
            element={
              <div className="col-9">
                <Setting Showing={showModal} Msg={msgmodal} />
              </div>
            }
          />

          <Route
            exact
            path="/Designs"
            element={
              <div className="col-12">
                <Designs Showing={showModal} Msg={msgmodal} />
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Main;
