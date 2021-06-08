import React, { useState }from 'react'
import "./photo.css"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function Photo({image}) {
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
    <div className="photo">
        <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Here is the preview</Modal.Title>
        </Modal.Header>
        <Modal.Body align="center"><img src={image} alt="" /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


      <img onClick={handleShow} src={image} alt="" />

      
    </div>
    )
}

export default Photo
