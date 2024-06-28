// components/Footer.js
const Footer = () => {
    return (
      <footer className="w-full bg-gray-800 text-gray-100 py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="text-lg font-semibold mb-4 md:mb-0">
            Programming Pathshala
          </div>
          <div className="flex space-x-6">
            <a href="/contact" className="hover:underline">
              Contact Us
            </a>
            <a href="/terms" className="hover:underline">
              Terms and Service
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  