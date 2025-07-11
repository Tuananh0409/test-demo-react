import React from "react";
import "./DisplayInfo.scss";

class DisplayInfo extends React.Component{
    hideShowListUser = () => {
       
        this.setState({
            isShowListUser: !this.state.isShowListUser,
        })
      
    }

    state = {
        isShowListUser: true
    }

    render(){

        const {listUsers} = this.props;
        console.log(listUsers);
        

        return(
            <div className="display-info-container">
                <button onClick={this.hideShowListUser}>
                    {this.state.isShowListUser == true ? 'Hide list user' : 'Show list user'}
                </button>
                {this.state.isShowListUser && 
                <div>
                {listUsers.map((user) => {
                        return(
                            <div key={user.id} className={user.age > 18 ? 'red' : 'green'}>
                                <div style={{color: 'yellow'}}>My name is {user.name}</div>
                                <div>My age is {user.age}</div>
                                <hr/>
                            </div>
                            
                        )
                })}
                
                </div>}
            </div>
        )
    }
}

export default DisplayInfo