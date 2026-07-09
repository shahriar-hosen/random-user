import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhone, faEnvelope, faLocationDot, faCakeCandles, faPlus
} from "@fortawesome/free-solid-svg-icons";
import "./User.css";

const User = (props) => {
  const { cell, dob, email, location, picture, name } = props.user;
  return (
    <div className="user-list">
      <div className="user-picture">
        <img src={picture.large} alt="" />
      </div>
      <div className="user-info">
        <h2>
          {name.first} {name.last}
        </h2>
        <h4><FontAwesomeIcon icon={faCakeCandles} />Age: {dob.age}</h4>
        <h4> <FontAwesomeIcon icon={faPhone} />Phone: {cell}</h4>
        <h4><FontAwesomeIcon icon={faEnvelope} /> Email: {email}</h4>
        <h4> <FontAwesomeIcon icon={faLocationDot} />
          Address: {location.street.number} {location.street.name},{" "}
          {location.city} {location.postcode} <br /> {location.state},{" "}
          {location.country}
        </h4>
        <button onClick={()=>props.handleAddUser(props.user)}><FontAwesomeIcon icon={faPlus} /> Add User</button>
      </div>
    </div>
  );
};

export default User;
