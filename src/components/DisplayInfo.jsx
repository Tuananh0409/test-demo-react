import React, { useEffect, useState } from "react";
import "./DisplayInfo.scss";
import logo from "./../logo.svg"

const DisplayInfo = (props) => {
            
            const {listUsers} = props;

            const [isShowHideListUser, setShowHideListUser] = useState(true)

            const handleShowHideListUser = () => {
                setShowHideListUser(!isShowHideListUser)
            } 

            console.log('call me render')
            useEffect(() => {
                console.log('call me useEffect');
                
            }, [])
        
            return(
                <div className="display-info-container">
                    <button onClick={() => handleShowHideListUser()} className="hide-show-user">
                        {isShowHideListUser ? 'Hide list user' : 'Show list user'}
                    </button>
                    {isShowHideListUser && 
                    <>
                    {listUsers.map((user) => {
                            return(
                                <div key={user.id} className={user.age > 18 ? 'red' : 'green'}>
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>delete</button>
                                    <hr/>
                                </div>
                                    
                            )
                    })}
                        
                    </>}
                    </div>
                )
            
}

// class DisplayInfo extends React.Component{
    
//     constructor(props){
//         console.log('Call me constructer');
        
//         super(props)
//         this.state = {
//             isShowListUser: true
//         }
//     }


//     componentDidMount = () => {
//         console.log('call component did mount');
//         setTimeout(() => {
//             document.title = 'Dta'
//         }, 3000)
//     }

//     componentDidUpdate(prevProps, prevState, snapshot){
//         console.log('call component did update');
//         if(this.props.listUsers.length === 5 ){
//             alert('you got 5 user')
//         }
        
//     }

//     render(){
//         console.log('call me render');
        
//         const {listUsers} = this.props;

//         return(
//             <div className="display-info-container">
                
//                 {true && 
//                 <>
//                 {listUsers.map((user) => {
//                         return(
//                             <div key={user.id} className={user.age > 18 ? 'red' : 'green'}>
//                                 <div>My name is {user.name}</div>
//                                 <div>My age is {user.age}</div>
//                                 <button onClick={() => this.props.handleDeleteUser(user.id)}>delete</button>
//                                 <hr/>
//                             </div>
                            
//                         )
//                 })}
                
//                 </>}
//             </div>
//         )
//     }
// }

export default DisplayInfo