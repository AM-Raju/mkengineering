import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex space-x-2 text-gray-100 text-lg font-medium">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center  hover:text-blue-600 transition duration-300"
      >
        <FaFacebook />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center  hover:text-blue-400 transition duration-300"
      >
        <FaTwitter />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center  hover:text-blue-700 transition duration-300"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 hover:text-pink-500 transition duration-300"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocialIcons;
