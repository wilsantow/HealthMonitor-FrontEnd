import history from "./history";

import {
  filterUsersListData,filterUserInfo
} from "./parseDataHelpers";

import { baseUrl,userInfoEndPoint } from "./endPoints";
import {checkHealth} from "./checkHealth";



export async function getUsersList(){
  let UsersList=await fetch(baseUrl,{method:'get'})
  UsersList= await UsersList.json()
  const requiredData=await filterUsersListData(UsersList)
  return requiredData;

}


export async function getUserInfo(userId){
  let userInfo=await fetch(`${userInfoEndPoint}${userId}`,{method:'post'})
  userInfo =await userInfo.json()
  userInfo.status=await checkHealth(userInfo.data)
  console.log("***")
  console.log(userInfo)
  return userInfo;
}
