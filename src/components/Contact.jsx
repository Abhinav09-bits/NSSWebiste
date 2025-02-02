import { FaInstagram, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-platinum-blue">Contact Us</h2>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-platinum-blue">NSS NIT Hamirpur</h3>
              <p className="flex items-center mb-1 justify-center md:justify-start">
                <FaMapMarkerAlt className="mr-2 text-platinum-blue" />
                <span className="text-sm md:text-base">NIT Hamirpur, Himachal Pradesh 177005</span>
              </p>
              <p className="flex items-center mb-1 justify-center md:justify-start">
                <FaPhone className="mr-2 text-platinum-blue" />
                <span className="text-sm md:text-base">+91 1234567890</span>
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="mr-2 text-platinum-blue" />
                <span className="text-sm md:text-base">nss@nith.ac.in</span>
              </p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://instagram.com/nss_nith" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl md:text-3xl text-platinum-blue" />
              </a>
              <a href="https://linkedin.com/company/nss-nith" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl md:text-3xl text-platinum-blue" />
              </a>
              <a href="https://twitter.com/nss_nith" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl md:text-3xl text-platinum-blue" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

