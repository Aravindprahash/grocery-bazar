import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Signup successful! 🎉 Welcome to GroceryBazar!");
      navigate("/home");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #a8edea, #fed6e3)",
      }}
    >
      <div
        className="card p-4 shadow-lg"
        style={{
          width: "100%",
          maxWidth: "400px",
          borderRadius: "15px",
          border: "none",
          backgroundColor: "white",
        }}
      >
        <h2
          className="text-center mb-4 fw-bold"
          style={{ color: "#007bff", letterSpacing: "0.5px" }}
        >
        Create Account
        </h2>

        <form onSubmit={handleSignup}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ borderRadius: "10px", padding: "10px", fontSize: "15px" }}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ borderRadius: "10px", padding: "10px", fontSize: "15px" }}
            />
          </div>
          <button
            type="submit"
            className="btn w-100 fw-semibold"
            style={{
              backgroundColor: "#007bff",
              color: "white",
              borderRadius: "10px",
              padding: "10px",
              fontSize: "16px",
              boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
            }}
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-3" style={{ fontSize: "14px", color: "#555" }}>
          Already have an account?{" "}
          <Link
            to="/login"
            style={{ color: "#28a745", textDecoration: "none", fontWeight: "600" }}
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
