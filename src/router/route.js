import React from 'react';
import { Route } from 'react-router-dom';
import AddUser from '../components/users/AddUser';
import ListUser from '../components/ListUser';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import EditUser from '../components/users/EditUser';

const Routes = () => {
  return (
    <div>
      <Route exact path="/">
        <Navbar />
        <Search />
        <ListUser />
      </Route>
      <Route exact path="/users/add">
        <AddUser />
      </Route>
      <Route exact path="/users/edit/:id">
        <EditUser />
      </Route>
    </div>
  )
}

export default Routes;
