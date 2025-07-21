import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../../../services/ApiService'
import { toast } from 'react-toastify';

function ModalDeleteUser(props) {
  const {show, setShow, dataDelete, fetchListUser, fetchListUserPaginate} = props;
  
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteUser = async () => {
    let data = await deleteUser(dataDelete.id)
    
    if(data.EC === 0 && data){
      toast.success(data.EM)
      handleClose();
      await fetchListUserPaginate(props.currentPage);
    }
    if(data && data.EC != 0){

      toast.error(data.EM)
    }
    
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm delete user</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this user, email is <b>{dataDelete.email}</b></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleDeleteUser()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteUser;