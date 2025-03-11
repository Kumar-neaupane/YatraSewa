import "./footer.css";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="flists">
          <ul className="flist">
            <li className="flist-title">Destinations</li>
            <li>Country</li>
            <li>Cities</li>
            <li>District</li>
            <li>Hotels</li>
            <li>Flights</li>
          </ul>
          <ul className="flist">
            <li className="flist-title">Activities</li>
            <li>Adventure</li>
            <li>City Tours</li>
            <li>Cruises</li>
            <li>Day Trips</li>
            <li>Excursions</li>
          </ul>
          <ul className="flist">
            <li className="flist-title">Support</li>
            <li>Help Center</li>
            <li>FAQ</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
          <ul className="flist">
            <li className="flist-title">About Us</li>
            <li>Our Story</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Partners</li>
            <li>Reviews</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2025 YatraSewa. All rights reserved.
          </div>
          <div className="footer-social">
            <span className="social-icon">FB</span>
            <span className="social-icon">TW</span>
            <span className="social-icon">IG</span>
            <span className="social-icon">YT</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;