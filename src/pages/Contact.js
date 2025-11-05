import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  return (
    <div className="contact-page container my-5">
      <style>{`
        .contact-page h1 {
          color: #313330ff;
          font-weight: bold;
        }
        .contact-card {
          border-radius: 20px;
          background: #fff;
        }
        .contact-card p {
          margin-bottom: 8px;
        }
        .map-container {
          height: 350px;
          border-radius: 20px;
        }
        .shadow-lg {
          box-shadow: 0 4px 20px rgba(0,0,0,0.1) !important;
        }
      `}</style>

      <h1 className="text-center mb-4">Contact Us</h1>
      <p className="text-center text-muted mb-5">
        Have questions or feedback? We’re here to help! Reach out to us anytime.
      </p>

      <div className="row g-4">
        <div className="col-md-5">
          <div className="card shadow-lg border-0 p-4 h-100 contact-card">
            <h4 className="fw-bold mb-3"> Get in Touch</h4>
            <p>
              <strong>Address:</strong> 345, 7th Cross Road, Neeladri Nagar, Electronic city, Karnataka-560100
            </p>
            <p>
              <strong>Phone:</strong> +91 9342662214
            </p>
            <p>
              <strong>Email:</strong> shop@grocerybazar.com
            </p>
            <hr />
            <h5 className="fw-bold">🕒 Working Hours</h5>
            <p>Mon - Sat: 10:00 AM - 10:00 PM</p>
            <p>Sunday: 11:00 AM - 8:00 PM</p>
          </div>
        </div>
        
        <div className="col-md-7">
          <div className="map-container shadow-lg overflow-hidden h-100">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0759531648596!2d77.64582267483891!3d12.838368387464866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6bc602330455%3A0x99575bced1444f74!2sSMR%20PG%20for%20Men!5e0!3m2!1sen!2sin!4v1755059175204!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
