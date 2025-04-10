import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquareFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-parchment text-black font-serif py-8 px-4 shadow-[0_-2px_6px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* Left - Contact & Policy Links */}
        <div className="space-y-2 mb-6 md:mb-0">
          <p className="italic">Contact</p>
          <a href="#" className="italic underline text-black hover:text-wine/80">Privacy Policy</a><br />
          <a href="#" className="italic text-black hover:text-wine/80">Terms</a>
        </div>

        {/* Center - Logo */}
        <div className="mb-6 md:mb-0">
          <img
            src="/images/footer-logo.PNG"
            alt="Carsini Wineries Logo"
            className="h-36 w-auto object-contain mx-auto"
          />
        </div>

        {/* Right - Social Media Icons */}
        <div className="space-y-2 flex flex-col items-center">
          <p className="italic">Follow Us</p>
          <div className="flex gap-5 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#316FF6] hover:scale-110 transition-transform"
            >
              <FontAwesomeIcon icon={faSquareFacebook} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1DA1F2] hover:scale-110 transition-transform"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C13584] hover:scale-110 transition-transform"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF0000] hover:scale-110 transition-transform"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
