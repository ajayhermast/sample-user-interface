import React from 'react'
import './index.css'

function Bottom() {
  return (
    <div className='bottom'>
      <div className="first">
        <h1 className='heading'>Let's Discuss Your <br />
          Design Needs
        </h1>
        <p className='text'>
          If you are interested in learning more about our services or <br />
          would like to discuss your design needs, please don't <br />
          hesitate to get in touch. Our team is always here to answer <br />
          your questions and provide you with the information you <br />
          need to make an informed decision
        </p>
        <form action="/">
          <input id="name" type="text" placeholder='Enter your Name.......' />
          <input id="email" type="email" placeholder='Enter your Email.......' />
          <button type='submit'>let's do it</button>
        </form>
        <div className='city'>Tirunelveli & Coimbatore </div>
        <div className="mail">
          <div>hello@samplewebpage@gmail.com.com</div>
          <img height="30" width="30" src="/icons8.png" alt="Arrow" />
        </div>
        <div className='footer'>&copy;thecreativehive</div>
      </div>
      <div className="second">
        <div className="item">
          <div className='title'>Hours</div>
          <div className='items'>Mon-Fri</div>
          <div>10am-6pm</div>
        </div>
        <div className="item">
          <div className='title'>Follow Us</div>
          <div className='items'>Instagram</div>
          <div>LinkedIn</div>
        </div>
        <div className='last'>
          <div className='home'>Home</div>
          <div>Work</div>
          <div>Services</div>
          <div>Contact</div>
        </div>
        <a className='ref' href="#top">top</a>
      </div>
    </div>
  )
}

export default Bottom