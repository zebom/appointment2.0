import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import './Logreg.css'
import reg from './images/reg.jpg'

 

function Register(){
    console.log("reg component rendered");

    const [userType, setUserType] = useState('patient') ;

    const handleUserTypeChange = (e) => {
        setUserType(e.target.value);
    };

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(`User type: ${userType}`)
    }
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
              className='reg' style={{
    backgroundImage: `url(${reg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '50vh', // Set the height as needed
            }}> <h2>We are commited to yout your health!</h2>
            <div className='container'>
              <h3>Register</h3>  <hr></hr>
                <div>
                    <form className='form' onSubmit={handelSubmit}>
                      
                       <label>firstName:
                        <input type='text' placeholder='FirstName:' required/>
                       </label>  
                       <label>LastName:
                        <input type='text' placeholder='LastName:'  required/>
                       </label>
                       <br></br><br></br>
                       <label>Email:
                        <input type='email' placeholder='Email:'  required/>
                       </label>
                       <label>Number:
                        <input type='number' placeholder='PhoneNumber:' required/>
                       </label>
                       <br></br><br></br>
                       <label>
          Gender:<br></br>
          <input
            label="male"
            type="radio"
            name="gender"
            value="male"
            required
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            required
          />
          Female
        </label><br></br><br></br>
        <label>Age:
                        <input type='number' placeholder='age:'  required/>
                       </label>
                      
                      
                       <br></br><br></br>
                       <label>
                        You are?
                        <select value={userType} onChange={handleUserTypeChange}>
                            <option value="patient">Patient</option>
                            <option value="doctor">Doctor</option>
                            <option value="admin">Admin</option>

                        </select>
                       </label><br></br>
                       <br></br>
                       {userType === 'doctor' && (
                        <>
                        <label>
                            Specialization:
                            <input type='text' placeholder='Specialization:'  required/>
                        </label>
                        <br></br><br></br>
                         <label>
                         LicenseNumber:
                         <input type='number' placeholder='License:'  required/>
                     </label>           
                     </>
                       )}
                        {userType === 'admin' && (
                            <>
                         <label>
                             Admin Code:
                            <input type="text" placeholder="Admin Code:"  required/>
                        </label><br></br><br></br>
                        <label>
                             position:
                            <input type="text" placeholder="Position:"  required/>
                        </label>
                        </>
                       )}
                        {userType === 'patient' && (
                           
                         <label>
                             Address:
                            <input type="text" placeholder="Address:" required />
                        </label>
                      
                       
                       )}
                       <br></br><br></br>
                       <label>Password:
                        <input type='password' placeholder='password:'  required/>
                       </label><br></br>
                       

                       <button className='but' type="submit">Register</button>
                    </form>
                </div>
            </div>
   
               
            </div>
           
        </div>

    )
}
export default Register