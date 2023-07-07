import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";

const About = () =>{
    return (
        <div>
            <h1>About Us</h1>
            <p>I ain't that great, but I appriciate greatness</p>
            <ProfileClass name="Chetan"/>
            <Profile/>
        </div>
    )
}

export default About;