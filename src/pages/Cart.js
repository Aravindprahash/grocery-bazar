import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";
import "./Cart.css";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart, clearCart, totalAmount } = useCart();
  const navigate = useNavigate();

  if (!cart.length)
    return (
      <div className="empty">
        <h4>🛒 Your cart is empty!</h4>
        <p>Looks like you haven’t added anything yet.</p>
        <button className="offer-btn" onClick={() => navigate("/home")}>
          Get Offers Now
        </button>
      </div>
    );

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div key={item._id || item.id} className="item">
          <img src={item.image} alt={item.name} />
          <div className="info">
            <h5>{item.name}</h5>
            <p>₹{item.price} × {item.quantity}</p>
            <p className="total">= ₹{item.price * item.quantity}</p>

            <div className="actions">
              <button onClick={() => decreaseQty(item._id || item.id)}>-</button>
              <button onClick={() => increaseQty(item._id || item.id)}>+</button>
              <button
                className="del"
                onClick={() => {
                  removeFromCart(item._id || item.id);
                  toast.info(`${item.name} removed`);
                }}
              >
                🗑️
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="summary">
        <p>Total Items: {cart.length}</p>
        <h4>Total Amount: ₹{totalAmount.toFixed(2)}</h4>

        <div className="summary-btns">
          <button
            className="clear"
            onClick={() => {
              clearCart();
              toast.info("Cart cleared");
            }}
          >
            Clear Cart
          </button>
          <button className="order" onClick={() => navigate("/CustomerDetails")}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
