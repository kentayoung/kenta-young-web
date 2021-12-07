import React, { Component } from 'react'
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

export default class footer extends Component {
  render() {
    return (
      <div className='footer-section'>
        <div><a href="https://www.linkedin.com/in/kentayoung" target="_blank" rel='noreferrer' className="icon-circle"><FaLinkedin/></a></div>
        <div><a href="https://instagram.com/kenta_young" target="_blank" rel='noreferrer' className="icon-circle"><FaInstagram/></a></div>
        {/* <div className="icon-circle"><a href="www.fb.com/kentayoungphotography" target="_blank"></a></div> */}
      </div>
    )
  }
}
