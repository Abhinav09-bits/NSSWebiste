import { FaInstagram, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-platinum-blue">Contact Us</h2>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-semibold mb-2 text-platinum-blue">NSS NIT Hamirpur</h3>
              <p className="flex items-center mb-1">
                <FaMapMarkerAlt className="mr-2 text-platinum-blue" /> NIT Hamirpur, Himachal Pradesh 177005
              </p>
              <p className="flex items-center mb-1">
                <FaPhone className="mr-2 text-platinum-blue" /> +91 1234567890
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2 text-platinum-blue" /> nss@nith.ac.in
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="https://instagram.com/nss_nith" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl text-platinum-blue" />
              </a>
              <a href="https://linkedin.com/company/nss-nith" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl text-platinum-blue" />
              </a>
              <a href="https://twitter.com/nss_nith" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-3xl text-platinum-blue" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

