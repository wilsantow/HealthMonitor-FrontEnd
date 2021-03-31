
import {checkHealth} from './checkHealth'

export async function filterUsersListData(data) {
  const filteredData = [];
 
  // console.log(data)
  for(let i=0;i<data.length;i++){
    const element=data[i]
    const user = {
      id:element._id,
      name: element.name,
      age:element.age,
      status:await checkHealth(element.data)
    };
    filteredData.push(user);
  }
 

  return filteredData;
}


export async function filterUserInfo(user){
  const filteredData={
    name:user.name,
    age:user.age,
    weight:user.age,
    height:user.age,
    gender:user.gender
  }
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substring(1, str.length).toLowerCase();
}