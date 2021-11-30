import React from "react";
import getUser from "./services/getUser";
import getFollowers from "./services/getFollowers";

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

  render() {
    return <div>Github Card</div>;
  }
}

export default App;
