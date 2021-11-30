import React from "react";

class User extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.user.name}</h2>
        <h2>Followers: {this.props.user.followers}</h2>
        <h2>Total Repos: {this.props.user.public_repos}</h2>
        <img src={this.props.user.avatar_url} />
      </div>
    );
  }
}

export default User;
