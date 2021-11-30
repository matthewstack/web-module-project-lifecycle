import React from "react";
import getUser from "./services/getUser";
import getFollowers from "./services/getFollowers";
import User from "./components/User";

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
        <h1>Github Card</h1>
        <form>
          <input value={this.state.search} onChange={this.handleChange} />
          <button onClick={this.handleClick}>Search</button>
        </form>
        <User user={this.state.user} />
      </div>
    );
  }
}

export default App;
