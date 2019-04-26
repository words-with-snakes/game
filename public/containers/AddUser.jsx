import React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/actions.js';

let AddUser = ({ dispatch }) => {
  let username = '';
  return (
    <div>
      <form onSubmit={event => {
        event.preventDefault();
        dispatch(addUser(username));
      }}>
        <input type="text" onChange={event => {
          username = event.target.value;
        }}/>
        <input type="submit" value="ENTER NAME"/>
      </form>
    </div>
  );
};

AddUser = connect()(AddUser);

export default AddUser;