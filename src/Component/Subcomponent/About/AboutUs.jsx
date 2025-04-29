// components/AboutUs.jsx

import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function AboutUs() {
  const whatsappMessage = "I%20need%20your%20help%20sir"; // URL encoded
  const gmailSubject = "Professional Inquiry - Assistance Required";
  const gmailBody = "Dear Priyajit Debnath,%0D%0A%0D%0AI hope this message finds you well.%0D%0A%0D%0AI would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,%0D%0A[Your Name]";

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-indigo-100 via-white to-indigo-100 flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-8 text-center">About Us</h1>

      {/* Profile Image */}
      <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-lg mb-6">
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQETRVAmyCTFeg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732581845317?e=1751500800&v=beta&t=Hw-iPPvaJyHoQcGUxiGONaVz9Obvpn-V0OiiSOAXGqk" // replace with your real image link
          alt="Priyajit Debnath"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Founder Info */}
      <h2 className="text-2xl font-semibold text-gray-700">Priyajit Debnath</h2>
      <p className="text-indigo-600 font-medium mb-4">Founder</p>

      {/* Short Description */}
      <p className="text-center text-gray-600 max-w-2xl mb-8">
        Hi! I'm Priyajit Debnath, a passionate software developer and tech enthusiast. 
        I love building scalable web applications, creating meaningful digital experiences, 
        and helping businesses grow online. Let's connect and build something great together!
      </p>

      {/* Social Media Links */}
      <div className="flex gap-6 mb-12 flex-wrap justify-center">
        <a href="https://www.facebook.com/iampd10official" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 text-2xl">
          <FaFacebook />
        </a>
        <a href="https://instagram.com/iampd10" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 text-2xl">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-2xl">
          <FaLinkedin />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black text-2xl">
          <FaGithub />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 text-2xl">
          <FaTwitter />
        </a>
        <a
          href={`https://wa.me/919436563207?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-600 text-2xl"
        >
          <FaWhatsapp />
        </a>
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=your-email@example.com&su=${gmailSubject}&body=${gmailBody}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 hover:text-red-600 text-2xl"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Closing Line */}
      <p className="text-gray-500 text-sm">Let's connect and create amazing things together 🚀</p>
    </section>
  );
}
