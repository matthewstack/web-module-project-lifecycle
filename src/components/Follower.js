import React from "react";
import getUser from "../services/getUser";

class Follower extends React.Component {
  render() {
    return (
      <div className="followerDiv">
        <img src={this.props.follower.avatar_url} className="followerImg" />
        <h2> {this.props.follower.login}</h2>
      </div>
    )
  }
}

export default Follower;
