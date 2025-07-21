import { useEffect, useState } from "react"
import { getAllUser } from "../../../services/ApiService"

const TableUser = (props) => {
    const {listUser} = props
   
    
    return(
        <>
            <table className="table table-hover table-bordered">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                 {listUser && listUser.length > 0 && 
                    listUser.map((items, index) => {
                        return(
                            <tr key={`table-users-${index}`}>
                                <th scope="row">{items.id}</th>
                                <td>{items.username}</td>
                                <td>{items.email}</td>
                                <td>{items.role}</td>
                                <td>
                                    <button onClick={() => props.handleClickBtnView(items)} className="btn btn-primary">View</button>
                                    <button onClick={() => props.handleClickBtnUpdate(items)} className="btn btn-warning mx-3">Update</button>
                                    <button onClick={() => props.handleClickBtnDelete(items)} className="btn btn-danger">Delete</button>

                                </td>
                            </tr>
                            )
            })}
                {listUser && listUser.length === 0 && 
                    <tr>
                        <td colSpan={4} align={"center"}>
                            No user found
                        </td>
                    </tr>
                }
            </tbody>
            </table>
        </>
    )
}

export default TableUser