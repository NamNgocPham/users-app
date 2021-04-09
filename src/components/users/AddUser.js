import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddUser = () => {

  // load context user
  const { addUser } = useContext(UserContext);

  const history = useHistory();

  const [user, setUser] = useState({
    id: uuidv4(),
    name: '',
    email: '',
    role: '',
    created: '',
    update: '',
  })

  const { name, email, role } = user;

  const onInputChange = event => {
    setUser({...user, [event.target.name] : event.target.value});
  }

  const onSubmit = event => {
    event.preventDefault();
    const date = new Date();
    const createdDate= `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    user.created= createdDate;
    setUser(user);
    // console.log(typeof user.created);
    addUser(user);
    history.push('/')
  }

  return (
    <div className="container-fluid mt-5">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="mb-3">Add User</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              className="form-control"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              className="form-control"
              placeholder="Enter Your Email"
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <input 
              type="text" 
              className="form-control"
              placeholder="Enter Your Role"
              name="role"
              value={role}
              onChange={onInputChange}
            />
          </div>
          {/*
            
            <div className="form-group">
              <input 
                type="text" 
                className="form-control"
                placeholder="Enter Your Created Date"
                name="created"
                value={created}
                onChange={onInputChange}
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                className="form-control"
                placeholder="Enter Your Update Date"
                name="update"
                value={update}
                onChange={onInputChange}
              />
            </div>
          */}
          
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  )
}

export default AddUser;
