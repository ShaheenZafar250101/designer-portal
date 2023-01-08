import React from 'react'
import { Modal, Button } from 'react-bootstrap'
function Box(props) {

  
  


  return (
    <div>
      <Modal show={props.display}>
        <Modal.Header>
          <Modal.Title style={{color : 'rgb(255, 174, 0)'}}>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <b>Are You Sure You Want To {props.displaymsg}</b> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.Closing}>
            Close
          </Button>
          <Button variant="dark" style={{backgroundColor : 'green'}} onClick={props.Closing}>
            {props.displaymsg}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Box
