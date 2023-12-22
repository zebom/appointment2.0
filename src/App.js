// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
// import LandingPage from "./components/LandingPage"
// import Navbar from './components/Navbar';  
// import Login from './components/Login';   
// import Register from './components/Register';
// // import Nav from './components/Nav'

// function App() {
//   return (
//     <Router>
//     <div className="App">
//     <Navbar/>
    
   
//     <Routes>
      
//       <Route path='/' element={ <LandingPage/>}/>
//       <Route path='/Login' element={<Login />} />
//       <Route path='/Register' element={ <Register/>}/>
//     </Routes>
   
  
//     </div>
//     </Router>
   

//   );
// }

// export default App;



import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import { Navigate } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes (without NavBar) */}
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* LandingPage at the root path */}
        <Route path="/" element={
          <>
            <Navbar />
            <LandingPage />
          </>
        } />

        {/* Catch-all route for unmatched paths */}
        <Route path="/*" element={<Navigate to="/Login" />} />
      </Routes>
    </Router>
  );
}

export default App;
