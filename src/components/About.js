import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";
import React from "react";

// const About = () =>{
//     return (
//         <div>
//             <h1>About Us</h1>
//             <p>I ain't that great, but I appriciate greatness</p>
//             <ProfileClass name="Chetan"/>
//             <Profile/>
//         </div>
//     )
// }

class About extends React.Component {
    constructor(props){
        super(props);
        console.log("Parent About constructor");
    }

    componentDidMount(){
        console.log("Parent About componentDidMount");
    }

    componentDidUpdate(){
        console.log("Parent About componentDidUpdate");
    }

    // componentWillUnmount(){
    //     console.log("Parent About componentWillUnmount");
    // }

    render(){
        console.log("Parent About render");
        return (
            <div>
                <h1>About Us</h1>
                <p>I ain't that great, but I appriciate greatness</p>
                {<ProfileClass name="Chetan"/>}
                {/* {<ProfileClass name="Megha"/>} */}
                {/* {this.state.showProfile && <Profile/>} */}
                {/* <Outlet /> */}
            </div>
        )
    }
}

export default About;

/**
 * Parent Constructor
 * Parent Render
 *   Child1 Constructor
 *   Child1 Render
 *   Child2 Constructor
 *   Child2 Render
 *   Child1 componentDidMount
 *   Child2 componentDidMount
 * Parent componentDidMount
 * 
 */

/**
 * Parent Constructor
 * Parent Render
 *  Child1 Constructor
 *  Child1 Render
 * Parent componentDidMount
 *  Child1 componentDidMount
 *  child1 render
 *  child1 componentDidUpdate
 */