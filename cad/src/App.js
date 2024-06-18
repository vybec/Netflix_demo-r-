
import Counter from './Counter'
import { useState }from 'react'


function App() {

  const [state,setState]=useState(true)

 
  return (

    <div className='App'>
      <h1 onClick={()=>setState(!state)}>Show/Hide</h1>
     
      { state ? <Counter/> : null  }   

    </div>


  );

 
}

export default App;


//MOUNTING
//UPDATING
//UNMOUNTING