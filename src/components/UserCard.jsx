import React from "react";
import { motion } from "framer-motion";
import Normal from './Normal'
import Critical from './Critical'
import ViewUserButton from './ViewUserButton'
import { Link } from "react-router-dom";
import {capitalize} from '../lib/parseDataHelpers'

export default function UserCard(props) {
  console.log(props.name,props.status);
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className=" rounded-md text-xl flex flex-row mt-2 py-2 items-center hover:bg-gray-100 cursor-pointer"
    >
      <h1 className="ml-4">{props.s_no}</h1>
      
      <div className=" ml-12 flex flex-col  ">
        <h1 className="font-bold">{capitalize(props.name)}</h1>
        <p className="">age: {props.age}</p>
      </div>
      <div className="ml-20">
      {(props.status==1) && <Critical/>}
      {(props.status==0) && <Normal/>}
      </div>
   
      <div className="">
        <Link to={`/users/${props.id}`}>
      <ViewUserButton/>
      </Link>
      </div>

    </motion.div>
  );
}
