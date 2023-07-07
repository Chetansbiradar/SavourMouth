import React from 'react';

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count:0,
            count2:0
        }
    }

    render(){ 
        return ( 
        <>
        <h1>Profile Class</h1>
        <p>Name Props {this.props.name}</p>
        <p>Count State {this.state.count}</p>
        <p>Count2 State {this.state.count2}</p>
        <button onClick={() => this.setState({count: ++this.state.count, count2: this.state.count2+1})} >Increment Count</button>
        </>);
    }
}

export default Profile; 