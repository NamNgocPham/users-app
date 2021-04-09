import React, { Fragment, useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import ListUserItem from './ListUserItem';

const ListUser = () => {

  // const [currentPage, setCurrentPage] = useState(1);
  // const [usersPerPage, setUsersPage] = useState(3);
  // setUsersPage(3);

  const { users } = useContext(UserContext);
  
  const { searchItem } = useContext(UserContext);

  // const indexOfLastUser = currentPage * usersPerPage;
  // const indexOfFirstUser = indexOfLastUser - usersPerPage;
  // const currentUser = users.slice(indexOfFirstUser, indexOfLastUser);
  // console.log(currentUser) 

  // const renderUsers = currentUser.map((user, index) => {
  //   return (<ListUserItem key={index} index={index} user={user} />)
  // })
  // console.log(renderUsers)

  // const handleClick = event => {
  //   setCurrentPage(Number(event.target.id))
  // }

  // const pageNumbers = [];
  // for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
  //   pageNumbers.push(i);
  // }

  // const renderPageNumbers = pageNumbers.map(number => {
  //   return (
  //     <li 
  //       key={number} 
  //       id={number}
  //       onClick={handleClick}
  //       className="pageItem mr-2"
  //     >
  //       <button className="page-link">{number}</button>
  //     </li>
  //   )
  // })

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
          {
           
            // eslint-disable-next-line array-callback-return
            users.filter(value => {
              if (searchItem === "") {
                return value
              } else if ((value.name.toLowerCase().includes(searchItem.toLowerCase())) || (value.email.toLowerCase().includes(searchItem.toLowerCase())) ) {
                return value
              }
            }).map((user, index) => {
              return (
                <ListUserItem key={index} index={index} user={user} />
              )
            })
          }
          
        </tbody>
      </table>
      <div className="container-fluid">
        <p className="text-left">Total User : {users.length}</p>
      </div>

    {/*
       <div className="container-fluid">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {renderPageNumbers}
          </ul>
        </nav>
     </div>
    */}

    </Fragment>
  )
}

export default ListUser;
