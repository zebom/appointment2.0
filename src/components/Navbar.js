import logo from './images/logo.png'
import './Navbar.css'
import {Link as ScrollLink ,animateScroll as scroll} from 'react-scroll'
import { Link } from 'react-router-dom'



function Navbar(){

    // const scrollToTop= ()=>{
    //     scroll.scrollToTop();
    // };
    return(
        <div className="header">
            {/* <div className='header-2'> 
            <Link>Register</Link>
            <Link>Login</Link>
            <hr></hr>
            </div> */}
            <div className='header-2'>
               <nav className='navbar'>
                <Link to="/Login">Login</Link> 
                <Link to="/Register">Register</Link>
              
                </nav>
            </div>
            
            
        <header>
            <nav className="navbar">
                <h3><img src={logo} alt='logo'  style={{
                            width: '70px', // Adjust the width as needed
                             height: 'auto', // Maintain the aspect ratio
                            }}  /></h3>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <ScrollLink
                         activeClass='active'
                          to='home'
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500} >
                            Home
                        </ScrollLink>
                    </li>
                    <li className="nav-item">
                        <ScrollLink
                        activeClass='active'
                        to='about'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                            About Us
                        </ScrollLink>
                    </li>
                    <li className="nav-item">
                    <ScrollLink
                        activeClass='active'
                        to='depart'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                            Departments
                    </ScrollLink>
                    </li>
                    <li className="nav-item">
                    <ScrollLink
                        activeClass='active'
                        to='docs'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                            Doctors
                    </ScrollLink>
                    </li>
                    <li className="nav-item">
                    <ScrollLink
                        activeClass='active'
                        to='testi'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                            Testimonilas
                    </ScrollLink>
                    </li>
                    <li className="nav-item">
                    <ScrollLink
                        activeClass='active'
                        to='faq'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                            FAQ
                    </ScrollLink>
                    </li>
                    {/* <li className="nav-item">
              <a href="#" onClick={scrollToTop}>
                Scroll to Top
              </a>
            </li> */}
                </ul>

            </nav>
        </header>
        </div>
    )
}
export default Navbar;