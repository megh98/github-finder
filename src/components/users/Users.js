import React from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

Users.proptypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default Users;

/*

import React, { Component } from "react"
 
class Users extends Component {
  state = {
    users: [
      {
        id: '',
        login: '',
        avatar_url: '',
        html_url: ''
      },
      {
        id: '',
        login: '',
        avatar_url: '',
        html_url: ''
      }
    ]
  }

  render() {
    return (
      <div>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} /> (user and key are passed as props  to UserItem)
        ))}
      </div>
    )
  }
}

*/
