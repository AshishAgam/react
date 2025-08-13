import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [usersData, setUserData] = useState([]);

  useEffect(() =>{
    getUserData()
  },[]);

  async function getUserData(){
    const url = "https://dummyjson.com/users";
    let response = await fetch(url);
    response = await response.json()
    setUserData(response.users);
  }

  console.log(usersData);

  return (
    <div className="App">
      <h1>Fetch data from API</h1>
      <ul className='user-list user-list-head'>
            <li>First Name</li>
            <li>Last Name</li>
            <li>Age</li>
          </ul>
      {
        usersData && usersData.map((user) => (
          <ul className='user-list'>
            <li>{user.firstName}</li>
            <li>{user.lastName}</li>
            <li>{user.age}</li>
          </ul>
        ))
      }
    </div>
  );
}

export default App;
