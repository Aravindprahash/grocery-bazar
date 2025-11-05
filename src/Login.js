import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify"; 
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!");
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
        background: "linear-gradient(135deg, #ffecd2, #fcb69f)",
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
          style={{ color: "#28a745", letterSpacing: "0.5px" }}
        >
          Login
        </h2>

        <form onSubmit={handleLogin}>
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
              backgroundColor: "#28a745",
              color: "white",
              borderRadius: "10px",
              padding: "10px",
              fontSize: "16px",
              boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
            }}
          >
            Login
          </button>
        </form>

        <p className="text-center mt-3" style={{ fontSize: "14px", color: "#555" }}>
          New user?{" "}
          <Link
            to="/signup"
            style={{ color: "#007bff", textDecoration: "none", fontWeight: "600" }}
          >
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
