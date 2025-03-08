import './App.css';
import NewDashboard from './dashboard/NewDashboard';
import {Route,Routes} from "react-router-dom";
import SpecificUser from './dashboard/SpecificUser';
import UsersTable from './dashboard/UsersTable';
import Info from './dashboard/Info';
import { useState,useEffect } from 'react';
import axios from 'axios';
function App() {
  const [users,setUsers]=useState([]);
  const [displayedUsers,setDisplayedUsers]=useState([])
  useEffect(()=>{
  console.log("i will run only on component did Mount")
  axios.get(`https://dummyjson.com/user`)
  .then(res=>{
      console.log(res.data.users)
  setUsers(res.data.users);
  setDisplayedUsers(res.data.users.slice(0,10))
  
  })
  .catch(err=>console.log(err))
  },[])
  console.log(users);
  
    // Function to refresh and select new 10 random users
    const refreshUsers = (allUsers = users) => {
     console.log("Refresh button pressed")
        const shuffledUsers = allUsers.sort(() => 0.5 - Math.random()); // Shuffle array
        setDisplayedUsers(shuffledUsers.slice(0, 10)); // Pick first 10 users
      
    };
  return (
    <div>
      <Routes>
    <Route  element={<NewDashboard refreshUsers={refreshUsers}/>} > 
     <Route path="/"  element={<UsersTable displayedUsers={displayedUsers}  />} />  
   <Route path="/asdf" element={<SpecificUser />} />
   <Route path="/info" element={<Info /> } />
   
    </Route>
      </Routes>
    </div>
  );
}

export default App;
