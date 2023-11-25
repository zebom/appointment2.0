import logo from './images/logo.png'
import './Navbar.css'
import {Link,animateScroll as scroll} from 'react-scroll'

function Navbar(){

    // const scrollToTop= ()=>{
    //     scroll.scrollToTop();
    // };
    return(
        <div className="header">
        <header>
            <nav className="navbar">
                <h3><img src={logo} alt='logo'  style={{
                            width: '70px', // Adjust the width as needed
                             height: 'auto', // Maintain the aspect ratio
                            }}  /></h3>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link
                         activeClass='active'
                          to='home'
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500} >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                        activeClass='active'
                        to='about'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                    <Link 
                        activeClass='active'
                        to='depart'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                            Departments
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link 
                        activeClass='active'
                        to='docs'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                            Doctors
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link 
                        activeClass='active'
                        to='testi'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                            Testimonilas
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link 
                        activeClass='active'
                        to='faq'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                            FAQ
                    </Link>
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