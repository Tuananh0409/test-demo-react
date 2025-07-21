import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss"
import TableUser from "./TableUsers";
import { useEffect, useState } from "react"
import { getAllUser, getUserPaginate } from "../../../services/ApiService"
import ModalUpdateUser from "./ModalUpdateUser";
import ModalDetailUser from "./ModalDetailUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUsersPaginate from "./TableUsersPaginate";
import { set } from "lodash";

const ManageUser = (props) => {
    const LIMIT_DATA = 6;
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setshowModalUpdateUser] = useState(false)
    const [showModalDetailUser, setshowModalDetailUser] = useState(false)
    const [showModalDeleteUser, setshowModalDeleteUser] = useState(false)
    const [dataUpdate, setDataUpdate] = useState({})
    const [dataDelete, setDataDelete] = useState({})
    const [listUser, setListUser] = useState([])
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    
   
    useEffect(() => {
        fetchListUserPaginate(1)
    }, [])

    const handlePageClick = (event) => {
        setCurrentPage(+event.selected + 1)
        return fetchListUserPaginate(+event.selected + 1)
  };

    const fetchListUser = async () => {
        let res = await getAllUser()
        if(res.EC === 0) {
            setListUser(res.DT)
        }
    }

    const fetchListUserPaginate = async (page) => {
        let res = await getUserPaginate(page, LIMIT_DATA)
        if(res.EC === 0) {
            setListUser(res.DT.users)
            setPageCount(res.DT.totalPages)
        }
    }

    const resetDataUpdate = () => {
        setDataUpdate({})
    }

    const handleClickBtnUpdate = (user) => {
        setshowModalUpdateUser(true)
        setDataUpdate(user)
    }

     const handleClickBtnView = (user) => {
        setshowModalDetailUser(true)
        setDataUpdate(user)
    }

    const handleClickBtnDelete = (user) => {
        setshowModalDeleteUser(true)
        setDataDelete(user)

    }
    return (
        <div className="manage-user-container">
            <div className="manage-user-title">
                Manage user
            </div>
            <div className="manage-user-content">
                <div className="btn-add-user">
                    <button className="btn btn-primary" onClick={() => setShowModalCreateUser(true)}>Add new User</button>
                </div>
                <div>
                    {/* <TableUser 
                        listUser={listUser} 
                        handleClickBtnUpdate={handleClickBtnUpdate} 
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete}
                    /> */}
                    <TableUsersPaginate
                        listUser={listUser} 
                        handleClickBtnUpdate={handleClickBtnUpdate} 
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete}
                        fetchListUserPaginate={fetchListUserPaginate}
                        pageCount={pageCount}
                        handlePageClick={handlePageClick}
                    />
                </div>
                <ModalCreateUser 
                    show={showModalCreateUser} 
                    setShow={setShowModalCreateUser}
                    fetchListUser={fetchListUser}
                    fetchListUserPaginate={fetchListUserPaginate}
                />

                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setshowModalUpdateUser}
                    fetchListUser={fetchListUser}
                    dataUpdate={dataUpdate}
                    resetDataUpdate={resetDataUpdate}
                    fetchListUserPaginate={fetchListUserPaginate}
                    currentPage = {currentPage}
                />
                <ModalDetailUser
                    show={showModalDetailUser}
                    setShow={setshowModalDetailUser}
                    fetchListUser={fetchListUser}
                    dataUpdate={dataUpdate}
                    resetDataUpdate={resetDataUpdate}
                />

                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setshowModalDeleteUser}
                    fetchListUser={fetchListUser}
                    dataDelete={dataDelete}
                    fetchListUserPaginate={fetchListUserPaginate}
                    currentPage = {currentPage}
                />
            </div>
        </div>
       
    )
}

export default ManageUser;