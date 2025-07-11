import React, { useState } from "react";
import { useSelector } from "react-redux";

const AddUser = (props) => {
  
 const [name, setName] = useState('');
 const [age, setAge] = useState('');
 const [address, setAddress] = useState('Ha Noi');

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddUser({
      id: Math.floor((Math.random() * 100) + 1) + '-random',
      name: name,
      age: age
      })
  }

  const handleOnchangeInput = (event) => {
    setName(event.target.value)
  }

  const handleOnchangeAge = (event) => {
    setAge(event.target.value)
  }

  return (
   <>
    Xin chao {name} ban {age} tuoi
    <form action="" onSubmit={(event) => handleOnSubmit(event)}>
              <label for="">Tên</label>
              <input
                  value={name}
                  type="text"
                  onChange={(event) => {
                  handleOnchangeInput(event);
                  }}
              />

              <label for="">Tuổi</label>
              <input
                  value={age}
                  type="text"
                  onChange={(event) => {
                  handleOnchangeAge(event);
                  }}
              />
              <button>submit</button>
              </form>
   </>
  )
}

// class AddUser extends React.Component {

//     state = {
//         name: "Tuan Anh",
//         address: "Ha Noi",
//         age: 18,
//       };
    
      
//       handleOnchangeInput = (event) => {
//         this.setState({
//             name: event.target.value,
//         });
//       };
    
//       handleOnchangeAge = (event) => {
//         this.setState({
//             age: event.target.value,
//         });
//       };
    
//       handleOnSubmit = (event) => {
//         event.preventDefault();
//         this.props.handleAddUser({
//           id: Math.floor((Math.random() * 100) + 1) + '-random',
//           name: this.state.name,
//           age: this.state.age
//         })
//       };

//     render(){
//         return (
//             <div>
//               Xin chào {this.state.name} Tôi {this.state.age} tuổi
              // <form action="" onSubmit={(event) => this.handleOnSubmit(event)}>
              // <label for="">Tên</label>
              // <input
              //     value={this.state.name}
              //     type="text"
              //     onChange={(event) => {
              //     this.handleOnchangeInput(event);
              //     }}
              // />

              // <label for="">Tuổi</label>
              // <input
              //     value={this.state.age}
              //     type="text"
              //     onChange={(event) => {
              //     this.handleOnchangeAge(event);
              //     }}
              // />
              // <button>submit</button>
              // </form>
//           </div>
//         )
//     }
// }

export default AddUser