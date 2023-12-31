import React, {useState, Fragment} from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

  const [usersList, setUsersList] = useState([]); 

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return[...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}];
    });
  };

  const removeHandler = (userID) => {
    setUsersList((prevUsers) => {
      return prevUsers.filter((user) => user.id !== userID);
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList} onRemove ={removeHandler}/>
    </Fragment>
  );
}

export default App;
