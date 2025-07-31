import './App.css';
import React from 'react';
import { useRoutes, useLocation } from 'react-router-dom'
import ReadCrew from './pages/ReadCrew'
import CreateCrew from './pages/CreateCrew'
import EditCrew from './pages/EditCrew'
import { Link } from 'react-router-dom'
import NavBar from './pages/NavBar';
import Home from './pages/Home';
import CrewmateDetail from './pages/CrewmateDetail';

const App = () => {
  const location = useLocation();
  
  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<Home />
    },
     {
      path: "/gallery",
      element:<ReadCrew />
    },
    {
      path:"/edit/:id",
      element: <EditCrew />
    },
    {
      path:"/crewmate/:id",
      element: <CrewmateDetail />
    },
    {
      path:"/new",
      element: <CreateCrew />
    }
  ]);

  return ( 

    <div className="App">

      <div className="header">
        <NavBar activePage={location.pathname === '/' ? 'home' : 
          location.pathname.includes('new') ? 'new' : 'gallery'} />
      </div>
        {element}
    </div>

  )
}

export default App
