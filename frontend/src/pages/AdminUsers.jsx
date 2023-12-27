import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth';

const AdminUsers = () => {

  const {token} = useAuth();
  const [users, setUsers] = useState([]);

  const getAllUsersData = async () => {
    try{
      const res = await fetch(`http://localhost:5000/api/admin/users`,{
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token
        } 
      });
      console.log("response: " ,res);

      const data = await res.json();
      console.log("data: " ,data);

      setUsers(data.data);
    }
    catch(err){
      console.log("error = ",err);
    }
  }

  useEffect(()=>{
    getAllUsersData();
  },[]);

  return (
    <div>
      {
        users.map((user) => (
          <div key={user._id}>
            <h2>
              {user.username}
            </h2>
            <p>
              {user.email}
            </p>
          </div>
        ))
      }
    </div>
  )
}

export default AdminUsers