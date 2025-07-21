import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {FcPlus} from 'react-icons/fc'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { postCreateNewUser, postUpdateUser } from '../../../services/ApiService';
import _ from 'lodash';

const ModalDetailUser = (props) => {
 const {show, setShow, fetchListUser, dataUpdate, resetDataUpdate} = props
 

  const handleClose = () => {
    setShow(false)
    setEmail("")
    setPassword("")
    setUsername("")
    setImg("")
    setPreViewImg("")
    setRole("USER")
    resetDataUpdate()
  
  };


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER")
  const [img, setImg] = useState("");
  const [preViewImg, setPreViewImg] = useState("")

  useEffect(() => {
    if(!_.isEmpty(dataUpdate)){
        setEmail(dataUpdate.email)
        setPassword(dataUpdate.password)
        setUsername(dataUpdate.username)
        setImg("")
        if(dataUpdate.image){
            setPreViewImg(`data:image/jpeg;base64,${dataUpdate.image}`)
        }
        setRole(dataUpdate.role)
    }
  }, [dataUpdate])
  
  const handleUploadImg = (event) => {
    if(event.target && event.target.files && event.target.files[0]){
      console.log((event.target.files[0]))
      setPreViewImg(URL.createObjectURL(event.target.files[0]));
      setImg( event.target.files[0])
    }
    else{}
    
  }

  const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

  const handleSubmitCreateUser = async () => {
    const isValidEmail = validateEmail(email);
    if(!isValidEmail){
      toast('Invalid email')
      return ;
    }
    
  }

  
  
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}  size="xl" backdrop="static" className='modal-add-user'>
        <Modal.Header closeButton>
          <Modal.Title>Detail user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form className="row g-3">
            <div className="col-md-6">
                <label  className="form-label">Email</label>
                <input type="email" className="form-control" value={email} disabled onChange={(event) => setEmail(event.target.value)}/>
            </div>
            <div className="col-md-6">
                <label  className="form-label">Password</label>
                <input type="text" className="form-control" value={password} disabled onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <div className="col-md-6">
                <label  className="form-label">Username</label>
                <input type="text" className="form-control" value={username} disabled onChange={(event) => setUsername(event.target.value)}/>
            </div>
            <div className="col-md-4">
                <label  className="form-label">ROLE</label>
                <select disabled className="form-select"  value={role} onChange={(event) => setRole(event.target.value)}>
                <option value={"USER"}>USER</option>
                <option value={"ADMIN"}>ADMIN</option>
                </select>
            </div>
            <div className='col-md-12'>
                {/* <label for="" className='form-label label-upload' htmlFor='labelUpload'>
                  <FcPlus></FcPlus> Upload file image
                </label> */}
                <input type="file" id='labelUpload' disabled hidden onChange={event => handleUploadImg(event)}/>
            </div>
            <div className='col-md-12 img-preview'>
              {preViewImg ? 
              <img src={preViewImg} alt=""/>
              : <span>Preview image</span>
            }
            </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button disabled variant="primary" onClick={() => handleSubmitCreateUser()}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDetailUser
