
import {useState} from 'react'
import Employee from './Employee'



function App() {

  const [count,setCount] =useState(0)
  
  const addCount=()=> {
  setCount(count+1)
 
 }

 let emp =[{name:'ganesh',age:21},
  {name:'Steve',age:21},
  {name:'Elon',age:21},
  {name:'Nikhil',age:21},
  {name:'jevan',age:21},
  {name:'kok',age:21},



 ]

  return (

    <div className ='App'>
      <button onClick={addCount}>Add</button>

      {

        emp.map((obj)=>

         (
            <Employee name={obj.name} age={obj.age} />
          )

        )



      }
       

     
    </div>
  );
}

export default App;
