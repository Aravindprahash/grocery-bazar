import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useSearch } from "../context/SearchContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CategoryPage() {
  const { catName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const { searchTerm } = useSearch();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(`https://grocery-api-cr33.onrender.com/api/products/category/${catName}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [catName]);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 1500,
    });
  };

  const handleViewDetails = (id) => {
    navigate(`/detail/${id}`);
  };

  const filteredProducts = products.filter((p) =>
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
    <div className="container my-4">
      <h2 className="mb-4 text-capitalize">{catName}</h2>

      {searchTerm && (
        <p className="text-muted">
          Showing results for "<strong>{searchTerm}</strong>" in {catName}
        </p>
      )}

      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <div className="col-md-3 mb-3" key={p._id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={p.image}
                  className="card-img-top"
                  alt={p.name}
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text text-secondary">
                    {p.description?.length > 80
                      ? p.description.slice(0, 80) + "..."
                      : p.description}
                  </p>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <strong>₹{p.price}</strong>
                    <span className="text-success">{p.quantity}</span>
                  </div>

                  <div className="mt-auto">
                    <button
                      className="btn btn-success w-100 mb-2"
                      onClick={() => handleAddToCart(p)}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="btn btn-primary w-100"
                      onClick={() => handleViewDetails(p._id)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
