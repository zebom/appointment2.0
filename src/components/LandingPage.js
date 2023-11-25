import './LandingPage.css'
import home from './images/home.jpg'
import download from './images/download.jpeg'


function LandingPage(){
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
<div>
    <div className=' listing-dep'>
    <ul>
        <li>Onthropology</li>
        <li>Obgyn</li>
        <li>Orthepedics</li>
        <li>Cardiology</li>
        <li>Urology</li>
        <li>Radiology</li>
        <li>Neurology</li>
        <li>Intensive Care Unit</li>
        <li>Outpatient Department</li>
        <li>General Surgery</li>
        <li>Neurology</li>
        <li>Oncology</li>
      </ul>
    </div>
</div>
</section>
<section id='docs'>
doctors
</section>
<section id='testi'>
testimonials
</section>
<section id='faq'>
faq
</section>
        </div>
    )
}
export default LandingPage;