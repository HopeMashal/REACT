import React from "react";
import "./style.css";

class Avatars extends React.Component {
  state = { avatarsList: [], nameValue: "", imageSrc:"", loading: true };

  handleUpdateClick = (event) => {
    this.props.onUpdate(event, this.state);
  };

  handleImgUpdateClick = (event) => {
    this.props.onImgUpdate(event, this.state);
  };

  handleDeleteClick = (event) => {
    this.props.onDelete(event);
  };

  renderAvatars = () => {
    if (this.props.avatars == null || this.props.avatars.length === 0) {
      return null;
    }
    return (
      <div className="avatar-details">
        {this.props.avatars.map((avatar) => (
          <div className="avatar-detail" key={avatar.id}>
            <h1>{avatar.name}</h1><hr/>
            <img src={avatar.image} alt={avatar.createdAt}/>
            <br />
            <label>
              Rename:
              <input
                type="text"
                name="name"
                placeholder="Enter a new name"
                onChange={(e) => this.setState({ nameValue: e.target.value })}
              />
              <button value={avatar.id} onClick={this.handleUpdateClick}>
                Update
              </button>
              <br/>
              Image source:
              <input
                type="text"
                name="name"
                placeholder="Enter a new image source"
                onChange={(e) => this.setState({ imageSrc: e.target.value })}
              />
              <button value={avatar.id} onClick={this.handleImgUpdateClick}>
                Update
              </button>
            </label>
            <br />
            <button value={avatar.id} onClick={this.handleDeleteClick}>
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  };

  render() {
    if (this.state.loading === false) {
      return (
        <div className="Loading">
          <div className="spinner"></div>
          <h1 className="loading-h1">Loading ...</h1>
        </div> 
      );
    }
    return (
      <div className="avatar-container">
        {this.renderAvatars()}
      </div>
    );
  }
}
export default Avatars;


