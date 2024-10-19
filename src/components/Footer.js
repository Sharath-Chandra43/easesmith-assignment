import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-container">
          {/* Subscribe to our newsletter */}
          <div className="subscribe">
            <h3 className="subscribe-text">SUBSCRIBE TO OUR NEWSLETTER</h3>
            <p className="subscribe-description">
              Lorem Ipsum Dolor Sit Amet, Aut Ipsam Illum Et Nostrum Quidem Aut
              Nec
            </p>
            <input
              type="email"
              placeholder="Enter your email address"
              className="subscribe-input"
            />
            <button className="buttons subscribe-button">
              SUBSCRIBE
            </button>
          </div>

          {/* About Us */}
          <div className="bottom-container">
            <h3 className="headings">ABOUT US</h3>
            <ul className="descriptions">
              <li>Our Story</li>
              <li>Blogs</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>Help & Support</li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="headings">OUR SERVICES</h3>
            <ul className="descriptions">
              <li>Book Maali</li>
              <li>Plant Day Care</li>
              <li>Rent Plants</li>
              <li>Plants & Pots</li>
              <li>Gardening Tools</li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="headings">USEFUL LINKS</h3>
            <ul className="descriptions">
              <li>My Account</li>
              <li>Orders & Returns</li>
              <li>Track Order</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Return, Refund & Replacement Policy</li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="headings">GET IN TOUCH</h3>
            <ul className="descriptions">
              <li>
                Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57,
                Gurgaon, Haryana, India 122003
              </li>
              <li>Call: +919958287272</li>
              <li>Email: care@chaperoneplants.com</li>
            </ul>
          </div>
        </div>

        <div className="Chaperone-info">
          {/* Chaperone info */}
          <div className="chaperone-container">
            <h3 className="headings">CHAPERONE</h3>
            <p className="discriptions">
              Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
              necessitatibus enim ut internos accusantium a numquam autem ab
              rerum omnis. Non molestiae ratione et laborum doloribus aut
              molestiae voluptates ut porro excepturi sit molestiae obcaecati
              qui quis beatae est voluptatem eius. Et architecto nihil id labore
              omnis hic iste deleniti et porro aspernatur.
            </p>
          </div>

          {/* Social Icons */}
          <div>
            <h1 className="headings">Follow Us</h1>
            <div >
              <a href="#" className="text-black">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-black">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-black">
                <FaSquareThreads size={24} />
              </a>
              <a href="#" className="text-black">
                <FaYoutube size={24} />
              </a>
              <a href="#" className="text-black">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>

        <hr className="horizontal" />

        <span className="rights">
          © 2023, chaperone.com All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;