import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-dark text-light pt-5 pb-3">
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-4">
          <h5 className="fw-bold">GroceryBazar</h5>
          <p>Delivering fresh and delicious groceries right to your doorstep. Quality & Delivery timing guaranteed!</p>
        </div>

        <div className="col-md-4 mb-4">
          <h5 className="fw-bold">Contact Us</h5>
          <p><FaMapMarkerAlt className="me-2"/> 345, 7th Cross Road, Neeladri Nagar, Electronic City</p>
          <p><FaPhone className="me-2"/> +91 9342662214</p>
          <p><FaEnvelope className="me-2"/> shop@grocerybazar.com</p>
        </div>
        
        <div className="col-md-4 mb-4">
          <h5 className="fw-bold">Follow Us</h5>
          <div className="d-flex gap-3 mt-2">
            <a href="https://www.facebook.com/profile.php?id=100075346872562" target="_blank" rel="noreferrer" className="text-light fs-5">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/aravi_nd_1917/" target="_blank" rel="noreferrer" className="text-light fs-5">
              <FaInstagram />
            </a>
            <a href="https://www.instagram.com/aravi_nd_1917/" target="_blank" rel="noreferrer" className="text-light fs-5">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-light" />

      <div className="text-center mt-3">
        © {new Date().getFullYear()} GroceryBazar. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
