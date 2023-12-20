// import './App.css';
// import LandingPage from "./components/LandingPage"
// import Navbar from './components/Navbar';  
// import Login from './components/Login';   
// import Register from './components/Register';
// import Nav from './components/Nav'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//     <div className="App">
//     <Navbar/>
//     <LandingPage/>
//     <div>
//       <Routes>
//       <Route path="/Login" element ={<Login/>}/>
//       <Route path="/Register" element ={<Register/>}/>
//       <Route path="/Nav" element ={<Nav/>}/>
//     </Routes>
//     </div>
  
//     </div>
//     </Router>
//   );
// }

// export default App;
import './App.css';
import LandingPage from "./components/LandingPage"
import Navbar from './components/Navbar';  
import Login from './components/Login';   
import Register from './components/Register';
// import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          {/* Add other routes as needed */}
        </Routes>
        <LandingPage />
      </div>
    </Router>
  );
}

export default App;

