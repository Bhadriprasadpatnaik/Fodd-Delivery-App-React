import React from "react";
import "./footer.css";
import Logo from "./../HeaderComponents/Logo";

const Footer = () => {
  return (
    <section id="footerBlock">
      <article>
        <div className="footerLeftBlock">
          <Logo />
          <div className="footerli">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Jobs</a>
              </li>
              <li>
                <a href="">For the Record</a>
              </li>
            </ul>
          </div>

          <div className="footerli">
            <h4>COMMUNITIES</h4>
            <ul>
              <li>
                <a href="">For Artists</a>
              </li>
              <li>
                <a href="">Developers</a>
              </li>
              <li>
                <a href="">Advertising</a>
              </li>
              <li>
                <a href="">Investors</a>
              </li>
              <li>
                <a href="">Vendors</a>
              </li>
            </ul>
          </div>

          <div className="footerli">
            <h4>USEFUL LINKS</h4>
            <ul>
              <li>
                <a href="">Support</a>
              </li>
              <li>
                <a href="">Web Player</a>
              </li>
              <li>
                <a href="">Free Mobile App</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerLeftDown">
          <ul>
            <li>
              <a href="">Legal</a>
            </li>
            <li>
              <a href="">Privacy Center</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Cookies</a>
            </li>
            <li>
              <a href="">About Ads</a>
            </li>
            <li>
              <a href="">Additional CA Privacy Disclosures</a>
            </li>
          </ul>
        </div>
        <div className="footerRightBlock">
          <div>
            <i class="fab fa-instagram "></i>

            <i class="fab fa-twitter "></i>

            <i class="fab fa-facebook-f "></i>
          </div>
        </div>
        <div>{/* <h6>USA</h6> */}</div>
      </article>
    </section>
  );
};

export default Footer;
