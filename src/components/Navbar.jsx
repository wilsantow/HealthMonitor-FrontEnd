import React from 'react'
import {Link} from 'react-router-dom'

export default function(props){
    return(
        <div>
            <nav class="flex  justify-between flex-wrap bg-gray-800 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <Link to="/"><span class="font-semibold text-2xl tracking-tight">Health Monitor</span>
  </Link></div>
 

    <div><Link to="/about">
      <a href="#" class="inline-block text-xl px-4 py-2 leading-none  rounded text-white  hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0">About</a></Link>
    </div>
  
</nav>
        </div>
    )
}