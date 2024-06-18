import React,{useState} from 'react';

function ComponentName() {
    const [count,setCount]=useState(0)
  return (
    <div>

        <button onClick={()=>setCount(count+1)}>Increment</button>

        <h1>Hello I'm Component : {count}</h1>
      
    </div>
  );
}

export default ComponentName;