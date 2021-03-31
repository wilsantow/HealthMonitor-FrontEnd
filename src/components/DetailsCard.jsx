import React from "react";
import { motion } from "framer-motion";
import moment from 'moment';
import {capitalize} from '../lib/parseDataHelpers'
import Critical from '../components/Critical'
import Normal from '../components/Normal'
import UpdateButton from '../components/UpdateButton'

export default function DetailsCard(props) {
  console.log("props", props);
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className=" rounded-md flex flex-row mt-2 py-2 items-center cursor-auto"
    >
     <div className=" ml-12 mt-4 ">
        <h1 className="font-bold text-4xl">{capitalize(props.name)}</h1>
        {(props.status==1) && <Critical/>}
        {(props.status==0) && <Normal/>}
        
        <UpdateButton id={props.id}/>
        
        
       
        <h1 className="mt-4 underline text-3xl">Details</h1>
        <div className="mt-2 flex flex-row font-light text-xl">
        <p className="">Age: {props.age}</p>
        <p className="ml-16">Weight: {props.weight} Kg</p>
        <p className="ml-16">Height: {props.height} cm</p>
        <p className="ml-16">Gender: {capitalize(props.gender)}</p>
        </div>
        <h1 className="mt-10 underline text-3xl">Fitness Tracker Recordings</h1>
        <h1 className="mt-2 underline text-2xl">{moment(props.data[0].Date).format('MMM Do YY')}</h1>
        <div className="mt-2 flex flex-col font-light text-xl">
          <p>Glucose Level : {props.data[0].glucose} mg/dL</p>
          <p>Sleep time : {Math.round((props.data[0].sleep)/60,2)} Hours</p>
          <p>Steps walked: {props.data[0].steps}</p>
          <p>Blood pressure Level: {props.data[0].bp} mmHg</p>
          <p>Oxygen Saturation: {props.data[0].oxygen} %</p>
        </div>
      </div>
 
    </motion.div>
  );
}
