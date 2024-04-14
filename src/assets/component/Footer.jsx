import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="bg-[#72a624] text-[#ffffff] py-4 mt-1">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold">DhaqanKaab</h2>
            <p className="mt-2">waan jacelnahey macmiil inaa qancino</p>
          </div>
          <div className="flex items-center">
            <ul className="flex gap-4">
              <li>
                <a href="#" className="footer-link">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <FontAwesomeIcon icon={faPhone} />
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </a>
              </li>
             
            </ul>
            <div className="ml-4">
              <p>Contact: Dhulkaab@gmail.com</p>
              <p>Phone: +25261865....</p>
              <p>Address: km4 , Mugadisho, Somalia</p>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
