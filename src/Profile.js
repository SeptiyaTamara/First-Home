import React, { Component } from 'react';
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';


class Profile extends Component {
  constructor(props){
    super(props);
  }
  clicked = () => {
    toast.notify('Hello  Irene Welcome Back')
    }
 
  render() {
    return (
      <div>
        <p>{this.props.name}</p><br/>
        <button onClick={this.clicked}>Click Me</button><br/><br/>
        <img src="Irene.jpg" width="200" height="250"/> 
        
       </div> 
    );
  }
}

export default Profile;
