import React,{useEffect, useState} from 'react';

function ComponentName() {
    const [count,setCount]=useState(0)
    const  [count2,setCount2]=useState(0)
    useEffect(()=>{
        console.log('Mounting....');
        console.log('Count1...'+count);
        console.log('Count2'+count2);
        
    },[count,count2])
    
  return (
    <div>

        <button onClick={()=>setCount(count+1)}>Increment</button>
        <h1>Hello I'm Component : {count}</h1>

        <button onClick={()=>setCount2(count2+1)}>Increment</button>
        <h1>Hello I'm Component 2 : {count2}</h1>
      
    </div>
  );
}

export default ComponentName;