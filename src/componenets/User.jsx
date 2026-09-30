import { useState } from "react";
const User =(props)=>{
     const { name, location, profession } = props;
     const [count,setCount]=useState(0);
    return <div className ="user-card">
        <h2>Name:{name}</h2>
        <h2>Location:{location}</h2>
        <h3>Profession:{profession}</h3>
        <h4>noOfProjects:{count}</h4>
    </div>
}
export default User; 