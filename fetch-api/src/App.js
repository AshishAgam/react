import { useEffect, useState } from "react";
import { getPost } from "./api";
import { getRandomUser } from "./api";
import PostCard from "./components/postcards";
import UserCart from "./components/usercart";
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect( () => {
    getPost().then((posts) => setData(posts));
  },[]);

  useEffect(() => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  },[])

  const refresh = () => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  };
  
  return (
    <div className="App">
      {userData && <UserCart data={userData} />}
      <button onClick={refresh}>Refresh User</button>
      {
        data ? data.map((e) => <PostCard title={e.title} body={e.body}/>) : <p>No Data</p> 
      }
    </div>
  );
}

export default App;
