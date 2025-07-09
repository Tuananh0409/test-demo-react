import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo"

class MyComponent extends React.Component {
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
  };

  render() {
    const myAge = 26;
    return (
        <div>
            <UserInfo/>
            <br/>
            <DisplayInfo name="Tuan" age="22" />
            <hr/>
            <DisplayInfo name="Tuan A" age={myAge} />
        </div>
    );
  }
}

export default MyComponent;
