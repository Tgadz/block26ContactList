import { useState, useEffect } from 'react'
import './App.css'
import UserInfoUL from './userInfo';

function App() {
  const [userList, setUserList] = useState([]);
  const API_URL = `https://jsonplaceholder.typicode.com/users`;

  useEffect(() => {
    const getUsers = async() => {
      const response = await fetch(`${API_URL}`);
      const users = await response.json();
      console.log(users);
      setUserList(users);
    }

    getUsers();
  }, []);

  return (
    <>
    <h1>User Info</h1>
    <UserInfoUL userList={userList} />
    </>
  )

}
export default App
