import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Modal } from 'react-bootstrap'
const API_IMAG="https://image.tmdb.org/t/p/w500/"
const MovieBox = ({title, poster_path,vote_average
  ,release_date,overview}) => {
  const [show, setShow]=useState(false)
  const handleShow=()=>setShow(true)
  const handleClose=()=>setShow(false)
  return (
<> 
<div className='card text-center bg-secondary mb-3'> 
<div className='card-body'>
  <img className='card-img-top'src={API_IMAG+poster_path}/>
</div>
<div className='card-body'>
<button className='btn btn-dark' onClick={handleShow}>View More</button>
<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title></Modal.Title>
  </Modal.Header>
  <Modal.Body>
    
  <img className='card-img-top'src={API_IMAG+poster_path}/>
  <h3>Tital : {title}</h3>
  <h4>{vote_average}</h4>
  <h5>Release Data :{release_date}</h5>
  <br></br>
  <h6>Overview</h6>
  <p>{overview}</p>
  <Modal.Footer  >
      <Button variant='secondary' onClick={handleClose}>Close</Button>
    </Modal.Footer>
  </Modal.Body>

</Modal>
  </div>

</div>
</>
   
  )
}

export default MovieBox