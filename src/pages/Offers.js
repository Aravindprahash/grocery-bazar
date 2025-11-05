import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

function Offers() {
  const offers = [
    {
      name: "Get up to 30-50% off",
      description:
        "Shop More, Save More! Enjoy massive discounts of up to 50% on your favorite items when you spend ₹1500 or more.",
      image:
        "https://i.pinimg.com/736x/20/d8/86/20d88698c299ce84071b1f059cc492da.jpg",
    },
    {
      name: "15% offer on fruits",
      description:
        "Stock up on healthy choices! Flat 15% discount on our entire selection of fruits.",
      image:
        "https://i.pinimg.com/1200x/15/6b/03/156b03b0eafeaa23608332225881bb8f.jpg",
    },
    {
      name: "Flash Sale: 5% Off All Dairy!",
      description:
        "Stock up on fresh milk, cheese, and yogurt! Limited time only — creamy, dreamy delights await!",
      image:
        "https://i.pinimg.com/736x/95/84/9c/95849cdeb84425e3e5538f0498d02836.jpg",
    },
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center fw-bold mb-3 text-success">
        Today's Exclusive Offers
      </h1>
      <p className="text-center text-muted mb-5">
        Fresh deals, fresh items — every day just for you!
      </p>

      <div className="row g-4">
        {offers.map((offer, i) => (
          <motion.div
            key={i}
            className="col-12 col-sm-6 col-md-4"
            whileHover={{ scale: 1.05 }}
          >
            <div className="card p-4 shadow-lg border-0 text-center rounded-4 h-100">
              <img
                src={offer.image}
                alt={offer.name}
                className="rounded-circle mx-auto mb-3"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  border: "3px solid #28a745",
                }}
              />
              <h5 className="fw-bold text-success">{offer.name}</h5>
              <p className="text-muted small">{offer.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-4">
        <Link to="/">
          <motion.button
            className="btn btn-success px-4 py-2 fw-bold"
            whileHover={{ scale: 1.1 }}
          >
            Shop Now 🛒
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

export default Offers;
