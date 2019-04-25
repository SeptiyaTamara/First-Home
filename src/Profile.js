import React, { Component } from 'react';


class Profile extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div>
        <p>{this.props.name}</p><br/>
        <img src="Irene.jpg" width="200" height="250"/>  
       </div> 
    );
  }
}

export default Profile;
