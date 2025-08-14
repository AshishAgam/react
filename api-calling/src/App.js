import { NavLink, Route, Routes } from 'react-router';
import './App.css';
import UserAdd from './useradd';
import UserList from './userlist';
import UserEdit from './userupdate';
import Validation from './validatioin'

function App() {


  return (
    <div>
      <ul className='nav-list'>
        <li>
          <NavLink to="/">List</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add User</NavLink>
        </li>
        <li>
          <NavLink to="/validation">Check Validation</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<UserList/>} />
        <Route path="/add" element={<UserAdd/>} />
        <Route path="/edit/:id" element={<UserEdit/>}/>
        <Route path="/validation" element={<Validation/>}/>
      </Routes>
    </div>
  );
}

export default App;
