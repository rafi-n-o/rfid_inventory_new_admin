import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <a href="/" class="brand-link">
        <img
          src="assets/dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          class="brand-image img-circle elevation-3"
          style={{ opacity: "0.8" }}
        />
        <span class="brand-text font-weight-light">Admin</span>
      </a>

      <div class="sidebar">
        <nav class="mt-2">
          <ul
            class="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i class="nav-icon fas fa-cogs"></i>
                <p>
                  Setup
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li class="nav-item">
                  <Link to="/services" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Service</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/devices" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Device</p>
                  </Link>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <Link to="/orders" class="nav-link">
                <i class="nav-icon fas fa-shopping-bag"></i>
                <p>Order</p>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/users" class="nav-link">
                <i class="nav-icon fas fa-user"></i>
                <p>User</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
