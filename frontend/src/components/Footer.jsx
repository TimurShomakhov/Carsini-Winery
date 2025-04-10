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

        {/* Right - Social Media */}
        <div className="space-y-2">
          <p className="italic">Social Media</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
