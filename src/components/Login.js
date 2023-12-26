import './Logreg.css'
import { Link } from 'react-router-dom'
import reg from './images/reg.jpg'
import { useState} from "react";
import axios from "axios"
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate} from 'react-router-dom'

function Login(){
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")

    const handleEmail =(e)=>{
        setEmail(e.target.value)
    }

    const handlePassword =(e)=>{
        setPassword( e.target.value)
    }

    const navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:5000/Login/user', {email, password})
        .then(res=>{
            toast.success('logged in successfully' ,{
                position:toast.POSITION.TOP_CENTER,
                autoClose:3000,
            });
            // window.location.href ='/Doctor';
            // setLogin(login);
            const userRole = res.data.role;
            
            if(userRole === 'admin') {
                navigate('/Admin')
            }else if(userRole === 'doctor'){
                navigate('/Doctor');
            }else if(userRole === 'patient'){
                navigate('/Patient')
            }
        })
        .catch(err => {
            toast.error('There is an error with your input',{
                position:toast.POSITION.BOTTOM_RIGHT,
                autoClose:3000, 
            });
            console.log(err.message)
        })
    }
    console.log("Login component rendered");
    return(
        <div className="log-head">
             <div className='log-head2'>
               <nav className='navbar'>
               <Link to="/">Home</Link> 
                <Link to="/Login">Login</Link> 
                <Link to="/Register">Register</Link>
                <Link to="/Doctor">Doctor</Link>
                </nav>
            </div>
            <div
              className='log' style={{
    backgroundImage: `url(${reg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '50vh', // Set the height as needed
            }}>  <h2>Welcome! Your health journey continues with us.</h2>
            <div className='container-l'>
            <h3>Login</h3>  <hr></hr>
                <div>
                    <form onSubmit={handleSubmit} className='form-l'>
                    <label>Email:
                        <input type='email' name='email' onChange={handleEmail} value={email} placeholder='Email:'  required/>
                    </label> <br></br><br></br>
                       <label>Password:
                        <input type='password' name='password' onChange={handlePassword} value={password} placeholder='password:'  required/>
                       </label><br></br><br></br><br></br><br></br>
                       
                       <button className='log1' type="submit">Login</button>
                       <ToastContainer/>
                    </form>
                </div>
            </div>
   
               
            </div>
           
        </div>

       
    )
}
export default Login;

// Example for Login.js
// function Login(){
//     console.log("Login component rendered");
//     return (
//         <div class>
//             lui
//         </div>
//     );
// }
// export default Login;
