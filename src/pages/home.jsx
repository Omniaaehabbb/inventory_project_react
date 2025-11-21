import React from 'react';
import '../../../public/assets/css/index.css';

export default function WarezoLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <header>
        <div className="container">
          <nav className="navbar">
            <a className="logo" href="#">
              <i className="fas fa-warehouse"></i> Warezo
            </a>
            <button 
              className="navbar-toggler" 
              type="button"
              onClick={(e) => {
                const nav = e.target.closest('.navbar').querySelector('.navbar-collapse');
                nav.classList.toggle('show');
              }}
            >
              <span className="navbar-toggler-icon">☰</span>
            </button>
            <div className="navbar-collapse">
              <ul className="navbar-nav" style={{listStyle: 'none', display: 'flex', gap: '1rem', alignItems: 'center'}}>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
                <li className="nav-item dropdown" style={{position: 'relative'}}>
                  <a 
                    className="nav-link dropdown-toggle" 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      const menu = e.target.nextElementSibling;
                      menu.classList.toggle('show');
                    }}
                  >
                    <i className="fa-solid fa-user"></i> Account
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="login_page.html">Login</a></li>
                    <li><a className="dropdown-item" href="signup_page.html">Sign Up</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="row" style={{justifyContent: 'center'}}>
            <div className="col-lg-8">
              <h1>Your Direct Connection to Warehouses & Wholesale Products</h1>
              <p>Warezo streamlines procurement for retailers, offering a vast product catalog, flexible payments, and real-time delivery tracking. Transform your supply chain with unparalleled efficiency.</p>
              <div className="hero-buttons">
                <a href="login_page.html" className="btn btn-light">Sign Up Now</a>
                <a href="#" className="btn btn-light">Learn More</a>
              </div>
            </div>
          </div>
          <div className="row" style={{justifyContent: 'center', marginTop: '3rem'}}>
            <div className="col-lg-8" style={{textAlign: 'center'}}>
              <img src="/public/assets/images/Selection.png" alt="Warezo Selection" style={{maxWidth: '100%', marginTop: '3rem'}} />
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="section-title">
            <h2>Streamline Your Business with Warezo</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="stat-card">
                <div className="stat-number">86%</div>
                <h3 className="stat-title">Streamlined Operations</h3>
                <p className="stat-desc">Comprehensive product discovery, ordering, and management, reducing manual tasks and enhancing efficiency.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="stat-card">
                <div className="stat-number">5+</div>
                <h3 className="stat-title">Flexible Payment Options</h3>
                <p className="stat-desc">Support various payment methods including cash, mobile wallets, and cards to fit your business needs.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="stat-card">
                <div className="stat-number">600+</div>
                <h3 className="stat-title">Extensive Product Catalog</h3>
                <p className="stat-desc">Browse and discover a comprehensive range of products from multiple suppliers, all in one place.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="stat-card">
                <div className="stat-number">Real-time</div>
                <h3 className="stat-title">Order Tracking</h3>
                <p className="stat-desc">Gain full visibility into delivery status with real-time updates and notifications for every order.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="section-title">
            <h2>Direct Warehouse Connection</h2>
            <p>Connect directly with a wide network of warehouses, accessing diverse product catalogs without intermediaries.</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card">
                <i className="fas fa-tachometer-alt"></i>
                <h3>Accelerated Procurement</h3>
                <p>Speed up your entire procurement cycle from selection to delivery, ensuring timely stock replenishment.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card">
                <i className="fas fa-search"></i>
                <h3>Product Discovery</h3>
                <p>Easily find and compare products from multiple warehouses with our powerful search and filtering tools.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card">
                <i className="fas fa-truck"></i>
                <h3>Fast Delivery</h3>
                <p>Get your products delivered quickly with our optimized logistics network and warehouse partnerships.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <div className="section-title">
            <h2>How Warezo Works: Simple & Efficient</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Sign Up & Discover</h3>
                <p>Create your account and explore thousands of products from various warehouses.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="step">
                <div className="step-number">2</div>
                <h3>Order with Ease</h3>
                <p>Add products to your cart, choose from multiple payment options, and confirm your order.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="step">
                <div className="step-number">3</div>
                <h3>Track Your Delivery</h3>
                <p>Monitor your order's journey with real-time updates until it reaches your location.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="step">
                <div className="step-number">4</div>
                <h3>Manage & Grow</h3>
                <p>Access order history, manage inventory, and optimize your business with insights.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Elevate Your Retail Business?</h2>
          <p>Join thousands of retailers who are transforming their supply chain with Warezo</p>
          <div className="hero-buttons">
            <a href="login_page.html" className="btn btn-light">Sign Up Now</a>
            <a href="#" className="btn btn-light">Contact Sales</a>
          </div>
        </div>
      </section>
    </div>
  );
}