import React, { Fragment, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import ListUserItem from './ListUserItem';

const ListUser = () => {

  const { users } = useContext(UserContext);

  const { searchItem } = useContext(UserContext)

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

     <div className="container-fluid">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item"><a className="page-link" href="/#">Previous</a></li>
            <li className="page-item"><a className="page-link" href="/#">1</a></li>
            <li className="page-item"><a className="page-link" href="/#">2</a></li>
            <li className="page-item"><a className="page-link" href="/#">3</a></li>
            <li className="page-item"><a className="page-link" href="/#">Next</a></li>
          </ul>
        </nav>
     </div>

    </Fragment>
  )
}

export default ListUser;
