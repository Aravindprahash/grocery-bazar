import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('cart');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, qty = 1) => {
    setCart(prev => {
      const idKey = product._id || product.id;
      const exists = prev.find(i => (i._id || i.id) === idKey);
      if (exists) {
        return prev.map(i => ( (i._id||i.id) === idKey ? { ...i, quantity: (i.quantity||0) + qty } : i ));
      }
      return [...prev, { ...product, quantity: qty }];
    });
  };

  const increaseQty = (id) => {
    setCart(prev => prev.map(i => ((i._id||i.id) === id ? { ...i, quantity: (i.quantity||0) + 1 } : i)));
  };
  const decreaseQty = (id) => {
    setCart(prev => prev.map(i => {
      if ((i._id||i.id) !== id) return i;
      const newQty = Math.max(1, (i.quantity||1) - 1);
      return { ...i, quantity: newQty };
    }));
  };
  const removeFromCart = (id) => setCart(prev => prev.filter(i => (i._id||i.id) !== id));
  const clearCart = () => setCart([]);

  const totalAmount = cart.reduce((sum, it) => sum + (it.price || 0) * (it.quantity || 0), 0);

  return (
    <CartContext.Provider value={{
      cart, addToCart, increaseQty, decreaseQty, removeFromCart, clearCart, totalAmount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
