import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product, 1);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="col-lg-3 col-md-4 col-sm-6 mb-4"
    >
      <Card
        sx={{
          height: "100%",
          boxShadow: 3,
          borderRadius: 3,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          transition: "0.3s",
          "&:hover": { boxShadow: 6 },
        }}
      >
        <CardMedia
          component="img"
          height="220"
          image={product.image}
          alt={product.name}
          sx={{ objectFit: "cover" }}
        />

        <CardContent sx={{ flexGrow: 1 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={1}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {product.name}
            </Typography>
            <Typography variant="body2" color="green">
              {product.quantity}
            </Typography>
          </Box>

          <Typography variant="body1" color="success.main" sx={{ mb: 1 }}>
            ₹{product.price}
          </Typography>

          {product.description && (
            <Typography variant="body2" color="text.secondary">
              {product.description.length > 80
                ? product.description.slice(0, 80) + "..."
                : product.description}
            </Typography>
          )}
        </CardContent>

        <CardActions sx={{ p: 2, pt: 0 }}>
          <Button
            fullWidth
            variant="contained"
            color="success"
            onClick={handleAdd}
          >
            Add to Cart
          </Button>
          <Button
            fullWidth
            variant="contained"
            component={Link}
            to={`/detail/${product._id}`}
            color="primary"
          >
            Purchase Now
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
