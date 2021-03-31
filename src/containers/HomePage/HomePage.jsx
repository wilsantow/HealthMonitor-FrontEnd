import React, { useContext, useState,useEffect } from "react";
import {getUsersList} from '../../lib/fetchAndParse'
import UserCard from '../../components/UserCard'

 



export default   function HomePage() {
  const [isLoading,setIsLoading]=useState(true)
  const [users,setUsers]=useState([])
  

  useEffect(() => {
     getData();
}, []);
  async function getData(){
    const temp =  await getUsersList();
    setUsers(temp)
    setIsLoading(false)
  
   }
 
   const list = users.map((user, index) => (
    <UserCard
    id={user.id}
    name={user.name}
    age={user.age}
    s_no={index + 1}
    status={user.status}
  
    />
    ));

  return (
    <div className="container mx-auto">
    
    {/* <div>{list}</div> */}
      {isLoading && (
        <div>
          <h1>Loading</h1>
        </div>
      )}
      {!isLoading && <div>{list}</div>}
    </div>
  );
}
