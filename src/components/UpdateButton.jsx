
import React from 'react'
import {userInfoEndPoint} from '../lib/endPoints'




export default function UpdateButton(props){
    console.log("Update button")
    console.log(props.id)
    return( <button class=" ml-12 bg-orange-600 hover:bg-orange-800 text-white font-bold p-2 rounded-t-sm" onClick={()=>{ 
        const target_endpoint=`${userInfoEndPoint}${props.id}/update`;
        fetch(target_endpoint)
        window.location.reload()
    }} >
        Update Data
  </button>
  )
}