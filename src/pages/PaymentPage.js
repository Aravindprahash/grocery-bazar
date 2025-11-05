import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./PaymentPage.css";

const PaymentPage = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const [selectedMethod, setSelectedMethod] = useState("");

  const handleConfirm = () => {
    if (!selectedMethod) {
      alert("Please select a payment method!");
      return;
    }
    clearCart();
    navigate("/thankyou");
  };

  return (
    <div className="payment-container">
      <div className="payment-box">
        <h2 className="title">💳 Select Your Payment Method</h2>

        <div className="methods">
          <div
            className={`method ${selectedMethod === "cod" ? "active" : ""}`}
            onClick={() => setSelectedMethod("cod")}
          >
            <span>💵 Cash on Delivery</span>
          </div>

          <div
            className={`method ${selectedMethod === "online" ? "active" : ""}`}
            onClick={() => setSelectedMethod("online")}
          >
            <span>🌐 Online Payment</span>
          </div>
        </div>

        <button className="confirm-btn" onClick={handleConfirm}>
          Confirm to Pay
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
