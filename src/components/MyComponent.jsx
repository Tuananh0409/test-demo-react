import React, { useState } from "react";
import DisplayInfo from "./DisplayInfo"
import AddUser from "./AddUser";

const MyComponent = (props) => {
  const [listUsers, setListUser] = useState([
        {id: 1, name: 'Tuan Anh', age: 18},
        {id: 2, name: 'Tuan Minh', age: 10},
        {id: 3, name: 'Tuan Nam', age: 20},
  ])
  
  const handleAddUser = (userObj) => {
    setListUser([userObj, ...listUsers])
  }

  const handleDeleteUser = (userId) => {
    let cloneListUsers = listUsers
    cloneListUsers = cloneListUsers.filter(user => user.id !== userId)
    setListUser(cloneListUsers)
  }

  return (
            <>
              <div className="a">
                <AddUser handleAddUser={handleAddUser}/>
                <br/>
                <DisplayInfo 
                  listUsers={listUsers} 
                  handleDeleteUser={handleDeleteUser}
                />
              </div>
              
              <div className="b"></div>
              
               
            </>
        );

}

// class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       {id: 1, name: 'Tuan Anh', age: 18},
//       {id: 2, name: 'Tuan Minh', age: 10},
//       {id: 3, name: 'Tuan Nam', age: 20},
//     ]
//   }



//   handleAddUser = (userObj) => {
//     this.setState({
//       listUsers: [userObj,...this.state.listUsers]
      
//     })
//   }

//   handleDeleteUser = (userId) => {
//     let cloneListUsers = this.state.listUsers;
//     cloneListUsers = cloneListUsers.filter(user => user.id !== userId)
//     this.setState({
//       listUsers: cloneListUsers
//     })
//   }
 

//   render() {
    
//     return (
//         <>
//           <div className="a">
//             <AddUser handleAddUser={this.handleAddUser}/>
//             <br/>
//             <DisplayInfo 
//               listUsers={this.state.listUsers} 
//               handleDeleteUser={this.handleDeleteUser}
//             />
//           </div>
          
//           <div className="b"></div>
          
           
//         </>
//     );
//   }
// }

export default MyComponent;
