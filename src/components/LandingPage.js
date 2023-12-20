import './LandingPage.css'
import home from './images/home.jpg'
import download from './images/download.jpeg'
import Carousel from 'react-bootstrap/Carousel';
import Onthro from './images/Onthro.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import cardi from './images/cardi.jpeg'
import obgyn from './images/obgyn.jpg'
import orthepedics from './images/orthopedics.jpg'
import icu from './images/icu.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react';





function LandingPage(){

  const [selected, setSelected] = useState(null)
  const toggle = (i) =>{
   if (selected === i) {
    return setSelected(null)
   }
   setSelected(i)
  }

  const [curentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex -1 + testimonialData.length) % testimonialData.length);
  }

    return(
        <div className=''>
       
       <section id="home" className='home' style={{
    backgroundImage: `url(${home})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '80vh', // Set the height as needed
}}>
   <h1> Your Health Journey Starts Here!</h1>
   <p>We are a team of professional doctors who are
      <br></br>ready to take care of your health</p>
      <br></br><br></br>
      <button>BOOK NOW!</button>

</section>
<section id='about'>
    <h3> About LIV Hospital</h3><hr></hr>
    <div className='abt-all'>
        <div className='abt-img'  style={{
    backgroundImage: `url(${download})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '80vh', // Set the height as needed
}}>
   </div>
        <div className='abt-txt' >
        <ul> About Our Hospital</ul>
                At our state-of-the-art hospital, we are committed to providing top-notch healthcare<br></br> services and ensuring that your health journey is nothing short of exceptional. With a team of <br></br>dedicated and highly experienced doctors, nurses, and medical staff, we are here to take care of <br></br>your every healthcare need. Our primary mission is to offer the best medical care to our patients, <br></br>making your well-being our utmost priority.<br></br>

                <ul> Booking Your Appointment</ul>

                We understand that booking a medical appointment can sometimes be a stressful process. <br></br>That's why we've made it as simple as possible. You can easily book an appointment<br></br> with us through our user-friendly online platform or by giving us a call. Our scheduling<br></br> system is designed to ensure that you receive timely care, and we're always<br></br> ready to accommodate your busy schedule. Your health matters to us, and we want to make the <br></br>process of seeking medical care as convenient as possible.<br></br>
                
                <ul> Your Health, Our Responsibility</ul>

                When you choose our hospital, you are entrusting us with your health and well-being. <br></br>We take this responsibility very seriously. Our team of professional doctors and<br></br> medical staff is committed to providing personalized care that addresses your<br></br> unique needs. We offer a wide range of medical services, from routine check-ups <br></br>to advanced surgical procedures, all delivered with compassion and expertise.<br></br> Your health journey begins here, and we're here to walk that path with you, <br></br>ensuring your best possible health outcome.  

        </div>
    </div>

</section>
<section id='depart'>
<h3>Departments</h3><hr></hr>
<div className='list'>
    <div className=' listing-dep'>
    <ul>
        <li>Onthropology</li>
        <li>Cardiology</li>
        <li>Orthepedics</li>
        <li>Obgyn</li>
        <li>Intensive Care Unit</li>
        <li>Neurology</li>
        <li>Radiology</li>
        <li>Urology</li>
        <li>Outpatient Department</li>
        <li>General Surgery</li>
        <li>Neurology</li>
        <li>Oncology</li>
      </ul>
    </div>
    <Carousel>
      <Carousel.Item className='c-item'>
        <img className="d-block w-100" src={Onthro} alt="first slide"
        style={{ height: '300px', objectFit: 'contain' }}/>       
         <Carousel.Caption className='caption'>
          <h3>Onthropology</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img className="d-block w-100" src={cardi} alt="second slide"
         style={{ height: '300px', objectFit: 'contain' }} />
        <Carousel.Caption  className='caption'>
          <h3>Cardiology</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img className="d-block w-100" src={orthepedics} alt="third slide"
         style={{ height: '300px', objectFit: 'contain' }} />
        <Carousel.Caption  className='caption'>
          <h3>orthepedics</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img className="d-block w-100" src={obgyn} alt="fourth slide"
         style={{ height: '300px', objectFit: 'contain' }} />
        <Carousel.Caption  className='caption'>
          <h3>Obgyn</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img className="crs-img" src={icu} alt="fifth slide"
         style={{ height: '300px', objectFit: 'contain' }} 
        />
        <Carousel.Caption  className='caption'>
          <h3>ICU</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</div>
</section>
<section id='docs'>
doctors
<div>
                <Link to="/Login">Login</Link>
                <Link to="/Register">Register</Link>
            </div>
</section>
<section id='testi'>
<div className='testi'>Testimonials</div><hr></hr>
<div className='testi-container'>
  <p>{testimonialData[curentIndex].name}</p>
  <p>{testimonialData[curentIndex].testimonial}</p>
  <br></br>
  <button onClick={handlePrev}>Previous</button>
  <button onClick={handleNext}>Next</button>
</div>
</section>
<section id='faq'>
<div className='fq'>FAQ</div>
<hr></hr>
<div className='wrapper'>
  <div className='accordion'>
   {data.map((item, i) =>(
    <div className='item' key={i}>
      <div className='title' onClick={() => toggle(i)}>
        <h2>{item.question}</h2>
        <span>{selected === i ? '-' : '+'}</span>
      </div>
        <div className={selected === i ? 'content show' : 'content'}>{item.answer }</div>
    </div> 
   ) )}
  </div>
</div>
</section>
        </div>
    )
}



const data = [
  {
    question: 'How can I book an appointment on your website?',
    answer: 
        'Booking an appointment on our website is easy. Simply navigate to the "Book Appointment" section, choose your desired department, select a doctor (if applicable), pick a suitable time slot, and follow the on-screen instructions to complete the booking process.'
  },
  {
    question: 'Can I reschedule or cancel my appointment online?',
    answer: 
        'Yes, you can reschedule or cancel your appointment online. Log in to your account, go to the "My Appointments" section, and you will find options to reschedule or cancel your appointment. Please note that there may be specific time constraints for making changes, so check our policy for more details.'
  },
  {
    question: 'What information do I need to provide when booking an appointment?',
    answer: 
        'When booking an appointment, you will need to provide basic information such as your name, contact details, and any relevant medical history. The specific details required may vary based on the department or doctor you are scheduling with. Rest assured, we prioritize the confidentiality and security of your information.'
  },
  {
    question: 'Is there a way to view my past and upcoming appointments?',
    answer: 
        'Yes, you can easily view your past and upcoming appointments by logging into your account and navigating to the "My Appointments" section. There, you will find a comprehensive list of your appointment history, including dates, times, and relevant details. Its a convenient way to keep track of your healthcare schedule.'
  },
  
  
]
const testimonialData = [
  {
    name: 'Emily Johnson:',
    testimonial:
      'I had a fantastic experience booking my appointment on the website. The process was smooth, and I appreciated the user-friendly interface. The medical staff was highly professional and caring.',
  },
  {
    name: 'Daniel Smith:',
    testimonial:
      'As someone with a busy schedule, the online appointment booking system made my life much easier. The ability to reschedule or cancel appointments online provided the flexibility I needed.',
  },
  {
    name: 'Sophia Davis:',
    testimonial:
      'The website provided clear instructions on what information to provide during the appointment booking process. I felt confident in the security measures taken to protect my personal information.',
  },
  {
    name: 'Alexander White:',
    testimonial:
      'Being able to view my past and upcoming appointments online is a game-changer. It helps me stay organized and ensures that I never miss an important medical appointment.',
  },
  {
    name: 'Olivia Brown:',
    testimonial:
      'I appreciate the comprehensive FAQ section, which answered many of my questions. The websites commitment to transparency and providing relevant information is commendable.',
  },
  {
    name: 'John Doe:',
    testimonial:
      'I encountered difficulties navigating the website. The booking process was confusing, and the interface seemed outdated. I hope for improvements in user experience and website design.',
  },
 
];
export default LandingPage;  