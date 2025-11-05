import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://grocery-api-cr33.onrender.com/api/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
    navigate("/cart");
  };

  if (loading) {
    return <div className="container mt-5">Loading...</div>;
  }

  if (!product) {
    return <div className="container mt-5">Product not found</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded"
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </div>

        
        <div className="col-12 col-md-6">
          <h2>{product.name}</h2>
          <p className="text-success"><strong>Price:</strong> ₹{product.price}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <button
            className="btn btn-success mt-3"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
