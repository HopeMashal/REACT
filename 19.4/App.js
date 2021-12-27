import React , {useEffect, useState} from "react";
import axios from "axios";
import UsersList from "./components/UsersList";
import "./App.css";

const App =()=> {
  const [data ,setData]=useState([]);
  const [users,setUsers]=useState([]);

  useEffect(()=>{
    const fetchData=async()=>{
      const data = await axios.get("https://randomuser.me/api/?results=10");
      setData(data.data.results);
      setUsers(data.data.results)
    }
    fetchData();
  },[])

  const filterUsers = (value) => {
    const newUsers = data.filter(
      (user) =>
        (user.name.first + " " + user.name.last)
          .toUpperCase()
          .slice(0, value.length) === value.toUpperCase()
    );
    setUsers(newUsers)
  };

    return (
      <div className="App">
        <div className='SearchBar'>
          <input onChange={e=>filterUsers(e.target.value)}/>
        </div>
        <div className="users-container">
          <UsersList users={users} />
        </div>
      </div>
    );
}

export default App;
