import { useEffect } from "react";

const Profile = () => {
    useEffect(() => {
        console.log("useEffect");
        return () => {
            // cleanup
            // clear the interval
            // clear the timeout
            // remove event listeners

            console.log("useEffect cleanup");
        }
    });
    console.log("Functional render");
    return (
        <div>
            <h1>Profile Functional</h1>
        </div>
    )
}

export default Profile;