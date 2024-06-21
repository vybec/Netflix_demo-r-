import React from "react"
import NavBar from "./Components/Navbar/NavBar"
import './App.css'
import Banner from "./Banner/Banner"
import Rowpost from './Components/Rowpost/Rowpost'


function App (){
  return(
    <div className="App">
      <NavBar/>
      <Banner/>
      <Rowpost/>
      
      
    </div>
  )
}
export default App;
