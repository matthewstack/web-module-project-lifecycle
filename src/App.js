import React from "react";
import getUser from "./services/getUser";
import getFollowers from "./services/getFollowers";
import User from "./components/User";
import FollowerList from "./components/FollowerList";
import "./App.css";

class App extends React.Component {
  state = {
    search: "matthewstack",
    user: {},
    followers: [],
  };

  componentDidMount() {
    getUser(this.state.search).then((user) => {
      this.setState({
        ...this.state,
        user: user,
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      getFollowers(this.state.search).then((followers) => {
        this.setState({
          ...this.state,
          followers: followers,
        });
      });
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    getUser(this.state.search).then((user) => {
      this.setState({
        ...this.state,
        user: user,
      });
    });
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      search: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>GITHUB INFO</h1>
        <form>
          <input
            type="text"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Search</button>
        </form>
        <User user={this.state.user} />
        <h2>FOLLOWERS:</h2>
        <FollowerList followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
