
import React from 'react'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import NavBar from './Components/NavBar'
import {Route,Switch} from 'react-router-dom'
const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Rooms" component={Rooms}/>
        <Route exact path="/Rooms/:slug" component={SingleRoom}/>
        <Route component={Error}/>
      </Switch>
    </>
  )
}

export default App
