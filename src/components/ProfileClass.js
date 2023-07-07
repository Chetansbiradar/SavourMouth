import React from 'react';

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count:0,
            count2:0,
            userInfo:{
                name: "Chetan",
                location: "Bangalore"
            }
        }
        console.log("Profile constructor");
    }

    async componentDidMount(){
        //here we can make api calls bcz after render this method will be called
        const data = await fetch("https://api.github.com/users/chetansbiradar")
        const response = await data.json();
        this.setState({userInfo: response})
        // this.timer = setInterval(() => {
        //     console.log("setInterval");
        // }, 1000);
        console.log("Profile Child componentDidMount");
    }

    componentDidUpdate(prevProps, prevState){
        //this method will be called after every render of the component
        console.log("Profile Child componentDidUpdate");
        // if(prevState.count !== this.state.count){
        //     // Code Here
        // }
    }

    componentWillUnmount(){
        //this method will be called before component is removed from the dom
        console.log("Profile Child componentWillUnmount");
        //clean up things like
        //clearInterval
        clearInterval(this.timer);
        //clearTimeout
        //remove event listeners
    }

    render(){ 
        console.log("Profile Child render");
        return ( 
        <div 
        style={
            {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width:200,
                margin: "10 10",
            }
        }>
        <h1>Profile Class</h1>
        <p>Name Props {this.props.name}</p>
        <p>Count State {this.state.count}</p>
        <p>Count2 State {this.state.count2}</p>
        <img src={this.state.userInfo.avatar_url}/>
        <p>Name GitHub {this.state.userInfo.name}</p>
        <p>Location GitHub {this.state.userInfo.location}</p>
        <button onClick={() => this.setState({count: ++this.state.count, count2: this.state.count2+1})} >Increment Count</button>
        </div>);
    }
}

export default Profile; 