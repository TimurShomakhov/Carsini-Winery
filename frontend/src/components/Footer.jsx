import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquareFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-parchment text-black font-serif px-6 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left: Services + Company */}
        <div className="flex flex-col sm:flex-row gap-12 text-sm sm:text-base">
          {/* Services */}
          <div>
            <h6 className="footer-title font-semibold uppercase mb-2">Services</h6>
            <ul className="space-y-1">
              <li><a className="link link-hover">Branding</a></li>
              <li><a className="link link-hover">Design</a></li>
              <li><a className="link link-hover">Marketing</a></li>
              <li><a className="link link-hover">Advertisement</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h6 className="footer-title font-semibold uppercase mb-2">Company</h6>
            <ul className="space-y-1">
              <li><a className="link link-hover">About us</a></li>
              <li><a className="link link-hover">Contact</a></li>
              <li><a className="link link-hover">Jobs</a></li>
              <li><a className="link link-hover">Press kit</a></li>
            </ul>
          </div>
        </div>

{/* Center: Logo */}
<div className="flex justify-center">
  <img
    src="/images/footer-logo.PNG"
    alt="Carsini Wineries Logo"
    className="h-44 w-auto object-contain" // ⬅️ Increased from h-32 to h-44
  />
</div>


        {/* Right: Working Hours + Social */}
        <div className="flex flex-col gap-4 text-sm sm:text-base text-center sm:text-right">

          {/* Working Hours */}
          <div>
            <h6 className="footer-title font-semibold uppercase mb-2">Working Hours</h6>
            <p>Mon – Fri: 10:00 – 18:00</p>
            <p>Sat: 10:00 – 14:00</p>
            <p>Sun: Closed</p>
          </div>

          {/* Social */}
          <div>
            <h6 className="footer-title font-semibold uppercase mb-2">Social</h6>
            <div className="flex justify-center sm:justify-end gap-4 text-2xl">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1DA1F2] hover:scale-110 transition-transform"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF0000] hover:scale-110 transition-transform"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#316FF6] hover:scale-110 transition-transform"
              >
                <FontAwesomeIcon icon={faSquareFacebook} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C13584] hover:scale-110 transition-transform"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
