import React from "react";
import Avatar from "../api/Avatar";
import Avatars from "./Avatars";

class App extends React.Component {
  state = { avatars: [], term: "", imgsrc:"" };

  getAvatrs = async() => {
    const response = await Avatar.get("/users");
    this.setState({ avatars: response.data });
  }

   handleDeleteClick = async (event) => {
    await Avatar.delete(`users/${event.target.value}`);
    await this.getAvatrs(); 
  };

  handleUpdateClick = async (event , state) => {
    if (state.nameValue.length<5){
      return alert('The avatar name is at least 5 characters')
    }
    let tempObj = {
      name: state.nameValue,
    };
    await Avatar.put(`users/${event.target.value}`, tempObj)
    await this.getAvatrs();
  }

  handleImgUpdateClick = async (event , state) => {
    if(!this.isValidURL(state.imageSrc)){
      return alert('Add a valid image source')
    }
    let tempObj1 = {
      image: state.imageSrc
    };
    await Avatar.put(`users/${event.target.value}`, tempObj1)
    await this.getAvatrs();
  }
  
  componentDidMount = async () => {
    this.getAvatrs();
  };

   handleCreateClick = async ()=> {
      if (this.state.term.length<5 && !this.isValidURL(this.state.imgsrc)){
        return alert('The avatar name is at least 5 characters & Add a valid image source')
      }
      if (this.state.term.length<5){
        return alert('The avatar name is at least 5 characters')
      }
      if(!this.isValidURL(this.state.imgsrc)){
        return alert('Add a valid image source')
      }
      let  newAvatar = {
           name: this.state.term,
           image : this.state.imgsrc
       }
    await Avatar.post("/users" , newAvatar);
    this.getAvatrs();
  };

  isValidURL=(str)=> {
    var regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(str)) {
        return true;
    } else {
        return false;
    }
  }

  render() {
    return (
      <div className="main_div">
        <div className="Create-div">
          <div className="Create-items">
            <input className="create-item create-input"
              type="text"
              placeholder="Enter Name"
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            <input className="create-item create-input"
              type="text"
              placeholder="Enter Image Source"
              onChange={(e) => this.setState({ imgsrc: e.target.value })}
            />
            <button className="create-item create-btn" onClick={this.handleCreateClick}>
              Create New Avatar
            </button>
          </div>
        </div>

        <Avatars 
          avatars={this.state.avatars} 
          onDelete={this.handleDeleteClick} 
          onUpdate={this.handleUpdateClick} 
          onImgUpdate={this.handleImgUpdateClick}
        />
      </div>
    );
  }
}

export default App;
