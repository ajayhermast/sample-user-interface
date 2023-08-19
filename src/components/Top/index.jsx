import React from 'react'
import './index.css'

function Top() {


  return (
    <div className='top' id='top'>
      {/* NavBar */}
      <nav>
        <div className="logo">Logo</div>
        <div className="nav">
          <div>Expertise</div>
          <div>Work</div>
          <div>Contact</div>
        </div>
      </nav>
      {/* Content */}
      <div className="content">
        We're Digital Agency Elevating <br />
        Brands Through <span className='bold'>Branding<br />
        Web Design, And Marketing
        </span><br />
        Expertise.
      </div>
      {/* Information */}
      <div className='info'>
        <div className="item">
          Based in Tirunelveli & Coimbatore<br />
        <span>Born in Kolkata</span>
        </div>
        <div className="item">
          Design-driven <br />
        <span>Digital agency.</span>
        </div>
        <div className="item">
          Branding, digital <br />
        <span>& communications</span>
        </div>
      </div>
    </div>
  )
}

export default Top