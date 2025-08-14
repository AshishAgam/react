import './App.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // import hook

function UserList() {
  const [usersData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "http://localhost:3000/users";
  const navigate = useNavigate(); // initialize inside component

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    setLoading(true); // start loading
    try {
      let response = await fetch(url);
      response = await response.json();
      setUserData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // stop loading
    }
  }

  // arrow function for delete user
  const deleteUser = async(id)=>{
    let response = await fetch(url+"/"+id, {
        method:'DELETE'
    })
    response = await response.json();
    if(response){
        alert("Record Deleted")
        getUserData(); // refresh the list after deletion
    }
  };

   // arrow function for edit user
   const editUser = (id) => {
    navigate("/edit/" + id); // correct way to navigate
  };   

  return (
    <div className="App">
      <h1>Make Routes and Pages for Add User and User List UI</h1>
      <ul className='user-list user-list-head'>
        <li>Name</li>
        <li>Email</li>
        <li>Age</li>
        <li>Action</li>
      </ul>

      {loading ? (
        <h1>Data Loading...</h1>
      ) : (
        usersData && usersData.map((user) => (
          <ul key={user.name} className='user-list'>
            <li>{user.name}</li>
            <li>{user.email}</li>
            <li>{user.age}</li>
            <li>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
            </li>
            <li>
                <button onClick={() => editUser(user.id)}>Edit</button>
            </li>
          </ul>
        ))
      )}
    </div>
  );
}

export default UserList;
