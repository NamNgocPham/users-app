import React, { Fragment, useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import ListUserItem from './ListUserItem';

const ListUser = () => {

  const { users } = useContext(UserContext);
  const { searchItem } = useContext(UserContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUserPerPage] = useState(3);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  // console.log(currentUsers)
  const renderUsers = currentUsers.filter(value => {
    if (searchItem === "") {
      return value;
    } else if ((value.name.toLowerCase().includes(searchItem.toLowerCase())) || (value.email.toLowerCase().includes(searchItem.toLowerCase()))) {
      return value;
    }
    return false;
  }).map((user, index) => {
    return (
      <ListUserItem key={index} user={user} index={index + (currentPage - 1) * usersPerPage} />
    )
  })

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = event => {
    setCurrentPage(Number(event.target.id))
  }
  
  const renderPageNumbers = pageNumbers.map(number => {
    return (
      <li 
        key={number} 
        id={number} 
        onClick={handleClick}
        className="page-link mr-2"
        style={{cursor: 'pointer'}}
      >
        {number}
      </li>
    )
  })

  return (
    <Fragment>
      <table className="table mt-3">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Created</th>
            <th scope="col">Updated</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          { renderUsers }
        </tbody>
      </table>
      <div className="container-fluid">
        <p className="text-left">Total User : {users.length}</p>
      </div>

    {
       <div className="container-fluid">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            { renderPageNumbers }
          </ul>
        </nav>
     </div>
    }

    </Fragment>
  )
}

export default ListUser;
