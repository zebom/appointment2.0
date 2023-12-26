import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import './Logreg.css'
import reg from './images/reg.jpg'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

 

function Register(){
    console.log("reg component rendered");

    const [userType, setUserType] = useState('patient') ;
    const [loading, setLoading] =useState(false)

    const handleUserTypeChange = (e) => {
        setUserType(e.target.value);
    };

    const handelSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        console.log(`User type: ${userType}`)
        
        const formData = new FormData(e.target)
        console.log('Request Payload:', formData);
        console.log('FormData:', formData);
        formData.append('gender', document.querySelector('input[name="gender"]:checked').value);


        axios.post('http://localhost:5000/Register/registerUser', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          toast.success('registration successful', {
            position:toast.POSITION.TOP_CENTER,
            autoClose:3000,
          })
          window.location.href ='/Login'
          console.log(res.data);
        })
        .catch(err => {
          toast.error('There is an error with your input',{
              position:toast.POSITION.BOTTOM_RIGHT,
              autoClose:3000, 
          });
          console.log(err.message)
          console.log(err.response.data);
      })
      .finally(() => {
        setLoading(false)
      })

    };
    return(
        <div className="log-head">
             <div className='log-head2'>
               <nav className='navbar'>
               <Link to="/">Home</Link> 
                <Link to="/Login">Login</Link> 
                <Link to="/Register">Register</Link>
                <Link to="/Patient">Patient</Link>
                <Link to="/Admin">Admin</Link>
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
                        <input type='text'
                        name="firstname"
                        placeholder='FirstName:' required/>
                       </label>  
                       <label>LastName:
                        <input type='text'
                          name="lastname"
                        placeholder='LastName:'  required/>
                       </label>
                       <br></br><br></br>
                       <label>Email:
                        <input type='email' 
                        name='email'
                        placeholder='Email:'  required/>
                       </label>
                       <label>Number:
                        <input type='text' 
                        name='number'
                        placeholder='PhoneNumber:' 
                         pattern="[0-9]{10}"  // Restricts to 10 digits
                         title="Please enter a 10-digit number"  // Error message
                        required/>
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
                        <input type='number' name='age' placeholder='age:'  required/>
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
                            <input type='text' 
                            name='specialization'
                            placeholder='Specialization:'  required/>
                        </label>
                        <br></br><br></br>
                         <label>
                         LicenseNumber:
                         <input type='number' 
                         name='license'
                         placeholder='License:'  required/>
                     </label>           
                     </>
                       )}
                        {userType === 'admin' && (
                            <>
                         <label>
                             Admin Code:
                            <input type="text" 
                            name='admin'
                            placeholder="Admin Code:"  required/>
                        </label><br></br><br></br>
                        <label>
                             position:
                            <input type="text"  name='position'
                            placeholder="Position:"  required/>
                        </label>
                        </>
                       )}
                        {userType === 'patient' && (
                           
                         <label>
                             Address:
                            <input type="text" name='address' placeholder="Address:" required />
                        </label>
                      
                       
                       )}
                       <br></br><br></br>
                       <label>Password:
                        <input type='password' 
                        name='password'
                        placeholder='password:'  required/>
                       </label><br></br>
                       

                       <button className='but' type="submit" disabled={loading}> {loading ? 'Registering...' : 'Register'}</button>
                       <ToastContainer/>
                    </form>
                </div>
            </div>
   
               
            </div>
            
           
        </div>

    )
}
export default Register