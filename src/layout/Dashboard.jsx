import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "../styles/Dashboard.css";

// Pages imports
import Home from "../pages/Home";
import Counter from "../pages/Counter";
import Users from "../pages/Users";
import Products from "../pages/Products";

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Dashboard</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/counter"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Counter
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/users"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/products"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Products
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="main-content">
        {/* Navbar */}
        <div className="navbar">
          <h2>Welcome to Admin Dashboard</h2>
          <div className="user-info">
            <span>Admin User</span>
          </div>
        </div>

        {/* Content area */}
        <div className="content">
          <Routes>
            <Route index element={<Home />} />
            <Route path="counter" element={<Counter />} />
            <Route path="users" element={<Users />} />
            <Route path="products" element={<Products />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
