import React from "react";
import DisplayInfo from "./DisplayInfo"
import AddUser from "./AddUser";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      {id: 1, name: 'Tuan Anh', age: 18},
      {id: 2, name: 'Tuan Minh', age: 10},
      {id: 3, name: 'Tuan Nam', age: 20},
    ]
  }



  handleAddUser = (userObj) => {
    this.setState({
      listUsers: [userObj,...this.state.listUsers]
      
    })
  }
 

  render() {
    
    return (
        <div>
            <AddUser handleAddUser={this.handleAddUser}/>
            <br/>
            <DisplayInfo listUsers={this.state.listUsers}/>
          
           
        </div>
    );
  }
}

export default MyComponent;
