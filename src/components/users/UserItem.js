import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  // const { login, avatar_url, html_url } = props.user;
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }} //inline styling in react using double braces
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;

/* 

import React, { Component } from "react"

 class UserItem extends Component {
   
   render() {

    const { login, avatar_url, html_url } = this.props.user
    return (
      <div className="card text-center">
        <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    )

   }
}

export default UserItem;
  
   


*/
