import React from "react";
import Follower from "./Follower";

class FollowerList extends React.Component {
  render() {
    return (
      <div className="followerListCont">
        <div className="followersList">
          {this.props.followers.map((follower) => {
            return (
              <div>
                <Follower key={follower.id} follower={follower} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default FollowerList;
