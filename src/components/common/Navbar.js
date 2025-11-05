  import React from "react";
  import { NavLink, Link, useNavigate } from "react-router-dom";
  import { FaShoppingCart } from "react-icons/fa";
  import { useCart } from "../../context/CartContext";
  import { useSearch } from "../../context/SearchContext";

  const Navbar = () => {
    const { cart } = useCart();
    const { searchTerm, setSearchTerm } = useSearch();
    const navigate = useNavigate();
    const count = Array.isArray(cart)
      ? cart.reduce((s, i) => s + (i.quantity || 0), 0)
      : 0;

    const closeMenu = () => {
      const navMenu = document.getElementById("navMenu");
      if (navMenu && navMenu.classList.contains("show")) {
        navMenu.classList.remove("show");
      }
    };

    const handleLogout = () => {
      localStorage.removeItem("user"); 
      navigate("/login");
      closeMenu();
    };

    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-success"
        style={{
          padding: "10px 15px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        <div className="container">
          <Link
            className="navbar-brand fw-bold"
            to="/home"
            onClick={closeMenu}
            style={{
              fontSize: "1.4rem",
              letterSpacing: "1px",
            }}
          >
            GroceryBazar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
            aria-controls="navMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="collapse navbar-collapse text-center"
            id="navMenu"
            style={{
              backgroundColor: "rgba(25,135,84,0.9)",
              borderRadius: "10px",
              marginTop: "8px",
            }}
          >
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto"
              style={{ gap: "10px" }}
            >
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/home"
                  onClick={closeMenu}
                  style={{ fontWeight: "500" }}
                >
                  ʜᴏᴍᴇ
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  id="categoriesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ fontWeight: "500" }}
                >
                  ᴄᴀᴛᴇɢᴏʀɪᴇꜱ
                </span>
                <ul
                  className="dropdown-menu text-center"
                  aria-labelledby="categoriesDropdown"
                >
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/home"
                      onClick={closeMenu}
                    >
                      All Products
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/category/Fruits & Vegetables"
                      onClick={closeMenu}
                    >
                      Fruits & Vegetables
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/category/Meat & Fish"
                      onClick={closeMenu}
                    >
                      Meat & Fish
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/category/Snacks & Biscuits"
                      onClick={closeMenu}
                    >
                      Snacks & Biscuits
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/category/Oil & Dairy"
                      onClick={closeMenu}
                    >
                      Oil & Dairy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/category/Household & Cleaning"
                      onClick={closeMenu}
                    >
                      Household & Cleaning
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/category/Beverages"
                      onClick={closeMenu}
                    >
                      Beverages
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/category/Packaged Foods"
                      onClick={closeMenu}
                    >
                      Packaged Foods
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/offers"
                  onClick={closeMenu}
                  style={{ fontWeight: "500" }}
                >
                  ᴏꜰꜰᴇʀꜱ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/contact"
                  onClick={closeMenu}
                  style={{ fontWeight: "500" }}
                >
                  ᴄᴏɴᴛᴀᴄᴛ
                </NavLink>
              </li>
            </ul>

            <form
              className="d-flex justify-content-center mt-3 mt-lg-0 mb-3 mb-lg-0"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="form-control"
                style={{
                  minWidth: "230px",
                  borderRadius: "25px",
                  textAlign: "center",
                  padding: "8px 12px",
                }}
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>

            <div className="text-center mt-3 mt-lg-0">
              <Link
                to="/cart"
                className="btn btn-outline-light position-relative ms-2"
                style={{
                  borderRadius: "25px",
                  padding: "8px 18px",
                  fontSize: "1.1rem",
                  marginRight: "12px", 
                }}
                onClick={closeMenu}
              >
                <FaShoppingCart style={{ marginRight: "5px" }} />
                Cart
                {count > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: "0.7rem" }}
                  >
                    {count}
                  </span>
                )}
              </Link>
            </div>

            <div className="text-center mt-3 mb-3">
              <button
                onClick={handleLogout}
                className="btn btn-light fw-bold"
                style={{
                  borderRadius: "25px",
                  padding: "8px 20px",
                  backgroundColor: "#fff",
                  color: "#198754",
                  border: "2px solid #198754",
                  transition: "0.3s",
                }}
                onMouseOver={(e) => {
                   e.target.style.backgroundColor = "#198754";
                   e.target.style.color = "#fff";
                }}
                onMouseOut={(e) => {
                   e.target.style.backgroundColor = "#fff";
                   e.target.style.color = "#198754";
                }}

              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  };

  export default Navbar;
