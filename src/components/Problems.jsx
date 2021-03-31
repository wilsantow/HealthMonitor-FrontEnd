import React from 'react'
import messages from '../lib/healthMessages'

export default function Problems(props){
    const problems_list=props.problems

    const problems_block=problems_list.map((item)=>(<li><h1 className="text-2xl font-semibold ">{messages[item]}</h1></li>))
    


    return(
        <div className="mt-8">
        {(props.status==0) && <h1 className="text-3xl ml-12 text-blue-700 font-semibold underline"> No Problems</h1>}
        {(props.status==1) && <div><h1 className="text-3xl ml-12 text-blue-700 font-semibold underline">Problems</h1>
        <ul className="list-disc ml-16 mt-2 py-4">{problems_block}</ul>
        
        
        
        </div>}

        </div>
    );

}