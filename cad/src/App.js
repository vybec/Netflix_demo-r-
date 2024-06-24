import React from "react"
import NavBar from "./Components/Navbar/NavBar"
import './App.css'
import Banner from './Banner/Banner';
import {originals,action,horror,romance,comedy,docu } from './urls'

import Rowpost from './Components/Rowpost/Rowpost'



function App (){
  return(
    <div className="App">
      <NavBar/>
      <Banner/>
      <Rowpost url={originals} title='Netflix Originals' />
      <Rowpost url={action} title='Action' isSmall />
      <Rowpost url={horror} title='Horror' isSmall />
      <Rowpost url={romance} title='Romance' isSmall />
      <Rowpost url={comedy} title='Comedy' isSmall />
      <Rowpost url={docu} title='Documentaries' isSmall />

      
      
      
    </div>
  )
}
export default App;
