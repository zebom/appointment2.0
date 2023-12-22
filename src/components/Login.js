import './Logreg.css'
import { Link } from 'react-router-dom'
import reg from './images/reg.jpg'

function Login(){
    console.log("Login component rendered");
    return(
        <div className="log-head">
             <div className='log-head2'>
               <nav className='navbar'>
               <Link to="/">Home</Link> 
                <Link to="/Login">Login</Link> 
                <Link to="/Register">Register</Link>
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
                    <form className='form-l'>
                    <label>Email:
                        <input type='email' placeholder='Email:'  required/>
                    </label> <br></br><br></br>
                       <label>Password:
                        <input type='password' placeholder='password:'  required/>
                       </label><br></br><br></br><br></br><br></br>
                       
                       <button className='log1' type="submit">Login</button>
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
