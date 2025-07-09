import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Tuan Anh',
        address: 'Ha Noi'
    }

    handleOnClick(event){
        console.log(`Xin chào ${this.state.name}`)
        console.log(event.target);
        
    }

    handleOnMouseOver(event){
        console.log("Hover");
        console.log(event)
        
    }

    render(){
        return (
          <div>
            {this.state.name} from {this.state.address}
            <button onClick={this.handleOnClick}>Click me</button>
            <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
          </div>
        );
    }
}

export default MyComponent;