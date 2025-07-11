import React from "react";

class AddUser extends React.Component {

    state = {
        name: "Tuan Anh",
        address: "Ha Noi",
        age: 18,
      };
    
      
      handleOnchangeInput = (event) => {
        this.setState({
            name: event.target.value,
        });
      };
    
      handleOnchangeAge = (event) => {
        this.setState({
            age: event.target.value,
        });
      };
    
      handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.handleAddUser({
          id: Math.floor((Math.random() * 100) + 1) + '-random',
          name: this.state.name,
          age: this.state.age
        })
      };

    render(){
        return (
            <div>
            Xin chào {this.state.name} Tôi {this.state.age} tuổi
            <form action="" onSubmit={(event) => this.handleOnSubmit(event)}>
            <label for="">Tên</label>
            <input
                value={this.state.name}
                type="text"
                onChange={(event) => {
                this.handleOnchangeInput(event);
                }}
            />

            <label for="">Tuổi</label>
            <input
                value={this.state.age}
                type="text"
                onChange={(event) => {
                this.handleOnchangeAge(event);
                }}
            />
            <button>submit</button>
            </form>
        </div>
        )
    }
}

export default AddUser