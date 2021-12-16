import React, { Component } from 'react'
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

export default class footer extends Component {
  render() {
    return (
      <div className='footer-section'>
        <div><a id="linkedIn-KentaYoung" href="https://www.linkedin.com/in/kentayoung" target="_blank" rel='noreferrer' className="icon-circle"><FaLinkedin/></a></div>
        <div><a id="instagram-KentaYoung" href="https://instagram.com/kenta_young" target="_blank" rel='noreferrer' className="icon-circle"><FaInstagram/></a></div>
        <div><a id="facebook-KentaYoung" href="https://www.facebook.com/kentayoungphotography" target="_blank" rel='noreferrer' className="icon-circle"><FaFacebook/></a></div>
      </div>
    )
  }
}
