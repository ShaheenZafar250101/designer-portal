import React from 'react'

import { Modal, Button } from 'react-bootstrap'

function Pop(props) {

       const Closing = () => {
        props.popclose();
       }
    
  return (
    <>
  
      <Modal show={props.show}>
        <Modal.Header>
          <Modal.Title>Login Unsuccessful</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{color : 'red'}}>
          Invalid Email or Password
        </Modal.Body>
        <Modal.Footer>
          
    
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Pop
