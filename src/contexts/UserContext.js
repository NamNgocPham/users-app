import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [users, setUser] = useState([]);
  const [searchItem, setSearchItem] = useState('');


  useEffect(() => {
    // console.log('getting users');
    const users = localStorage.getItem('users');
    if (users) {
      setUser(JSON.parse(users));
    }
  }, [])

  useEffect(() => {
    // console.log('saving users');
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])


  const addUser = user => {
    setUser([
      ...users,
      user
    ])

  }

  const deleteUser = id => {
    setUser(users.filter(user => user.id !== id));
  }

  const onFilter = event => {
    setSearchItem(event.target.value)
    // console.log(event.target.value)
  }

  const userContextData = {
    users,
    searchItem,
    addUser,
    deleteUser,
    onFilter
  }

  return (
    <UserContext.Provider value={userContextData}>
      { children }
    </UserContext.Provider>
  )
}

export default UserContextProvider;