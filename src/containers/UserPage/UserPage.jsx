import React, { useContext, useState,useEffect } from "react";
import { Link } from "react-router-dom";
import {getUserInfo} from '../../lib/fetchAndParse'
import DetailsCard from '../../components/DetailsCard'
import {capitalize} from '../../lib/parseDataHelpers'
import Problems from '../../components/Problems'
import { ind_check } from "../../lib/checkHealth";

 



export default   function UserPage() {
  const [isLoading,setIsLoading]=useState(true)
  const [details,setDetails]=useState({})
  const[problems,setProblems]=useState([])
  
  useEffect(() => {
     getData();
}, []);
  async function getData(){
    const user_id=window.location.href.slice(28)
    console.log(user_id)
    const temp =  await getUserInfo(user_id);
    setDetails(temp)
    setProblems(await ind_check(temp.data[0]))
    setIsLoading(false)
  
   }

   const health_problems=<Problems data={details.data} status={details.status} problems={problems}/>

 
   const info = 
    <DetailsCard
    id={details._id}
    name={details.name}
    age={details.age}
    weight={details.weight}
    height={details.height}
    gender={details.gender}
    data={details.data}
    status={details.status}

  
    />


  return (
    <div className="container mx-auto">
    
    {/* <div>{list}</div> */}
      {isLoading && (
        <div>
          <h1>Loading</h1>
        </div>
      )}
      {!isLoading && <div>{info}</div>}
      {health_problems}
    </div>
  );
}
