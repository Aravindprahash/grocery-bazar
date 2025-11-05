import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomerDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
  });

  const [phoneError, setPhoneError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) {
        setPhoneError("Please enter phone number correctly");
        return;
      }

      if (value.length > 0 && value.length < 4) {
        setPhoneError("Please enter valid phone number");
      }
      else if (value.length > 15) {
        setPhoneError("Phone number seems too long");
      } else {
        setPhoneError("");
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.location) {
      alert("Please fill in all fields");
      return;
    }

    if (formData.phone.length < 4 || formData.phone.length > 15) {
      setPhoneError("Please enter valid phone number");
      return;
    }

    console.log("Customer Details:", formData);
    navigate("/payment");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Customer Details</h2>

      <form onSubmit={handleSubmit} className="p-3 border rounded shadow-sm">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            name="phone"
            className={`form-control ${phoneError ? "is-invalid" : ""}`}
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {phoneError && (
            <div className="invalid-feedback">{phoneError}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Delivery Location</label>
          <textarea
            name="location"
            className="form-control"
            placeholder="Enter your delivery address"
            rows="3"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 fw-semibold">
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default CustomerDetails;
