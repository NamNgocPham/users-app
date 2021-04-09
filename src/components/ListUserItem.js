import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Link } from 'react-router-dom';

const ListUserItem = ({ user, index }) => {

  const { deleteUser } = useContext(UserContext);

  // console.log(user);

  return (
      <tr>
        <th scope="row">{index + 1}</th>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td><button className="btn btn-primary btn-sm">{user.role}</button></td>
          <td>{user.created}</td>
          <td>{user.update}</td>
          <td>
          <button className="btn btn-danger mr-2" onClick={() => deleteUser(user.id)}>
            <i className="far fa-trash-alt mr-2"></i>
            Delete User
          </button>
          <Link to={`/users/edit/${user.id}`} className="btn btn-primary">
            <i className="fas fa-pencil-alt mr-2"></i>
            Edit User
          </Link>
          </td>
      </tr>
  )
}

export default ListUserItem;
