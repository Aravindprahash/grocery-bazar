import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/common/ProductCard";
import { useSearch } from "../context/SearchContext";
import "../App.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { searchTerm } = useSearch();

  useEffect(() => {
    axios
      .get("https://grocery-api-cr33.onrender.com/api/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filtered = products.filter((p) =>
    p.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #a8edea, #fed6e3)",
        }}
      >
        <div
          style={{
            width: "60px",
            height: "60px",
            border: "6px solid #ddd",
            borderTop: "6px solid #198754",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        ></div>
        <p
          style={{
            marginTop: "15px",
            fontSize: "18px",
            fontWeight: "600",
            color: "#198754",
          }}
        >
          Loading products...
        </p>

        <style>
          {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          `}
        </style>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="mt-4 mb-4" style={{ textAlign: "center" }}>
        Groceries Delivered in 90 Minutes
      </h2>
      <p style={{ textAlign: "center" }}>
        Get your healthy foods & snacks delivered at your doorstep all day,
        every day.
      </p>
      <div className="row g-4 mt-3">
        {filtered.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Home;
