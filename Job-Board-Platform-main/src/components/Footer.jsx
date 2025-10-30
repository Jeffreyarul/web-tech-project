import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="bg-blue-900 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top section with an adjusted grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Us Section (Wider) */}
          <div className="md:col-span-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-4">About Us</h3>
            <p className="text-sm">
              JobBoard is dedicated to connecting talent with opportunity. We provide a streamlined platform for job seekers to find their passion and for employers to build great teams.
            </p>
          </div>

          {/* Navigation Links Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media Icons Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition"><FaLinkedin size={24} /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition"><FaTwitter size={24} /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition"><FaYoutube size={24} /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition"><FaFacebook size={24} /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition"><FaInstagram size={24} /></a>
            </div>
          </div>
          
        </div>

        {/* Bottom copyright text */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} JobBoard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;