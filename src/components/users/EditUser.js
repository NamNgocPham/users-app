import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useParams, useHistory } from 'react-router-dom';

const EditUser = () => {
  
  const { id } = useParams();

  const history = useHistory();

  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    role: '',
    created: '',
    update: '',
  })
  // console.log(user);

  const { users } = useContext(UserContext);
  

  useEffect(() => {
    const loadUser = () => {
      users.map(user => {
        if (user.id === id) {
          setUser({
            id: id,
            name: user.name,
            email: user.email,
            role: user.role,
            created: user.created,
            update: user.update
          })
        }
        return user;
      })
    }
    loadUser();
  }, [id, users])


  const { name, email, role } = user;

  const onInputChange = event => {
    setUser({...user, [event.target.name] : event.target.value});
  }


  const onSubmit = event => {
    event.preventDefault();

    const date = new Date();
    const updateDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    
    users.map(user => {
      if (user.id === id) {
        user.name = name
        user.email = email
        user.role = role
        user.update = updateDate
    
      }
      return users;
    })
    
    setUser(user);
    localStorage.setItem('users', JSON.stringify(users));
    history.push('/');
  }

  

  return (
    <div className="container-fluid mt-5">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="mb-3">Update User</h2>
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
            <select 
              className="form-select form-select-sm form-control"
              name="role"
              value={role}
              onChange={onInputChange}
            >
              <option>Choose your role</option>
              <option value="Admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <button className="btn btn-primary btn-block">Update User</button>
        </form>
      </div>
    </div>
  )
}

export default EditUser;
