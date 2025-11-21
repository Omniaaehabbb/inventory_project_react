import { useState } from 'react';
import './ProductCatalog.css';

const products = [
  { id: 1, name: 'Organic Gala', desc: 'Crisp and sweet organic apples, perfect for snacks.', price: 24.99, priceText: '$24.99 / 20kg box', warehouse: 'City Central Warehouse', distance: 5, category: 'Fruits & Vegetables', img: '🍎' },
  { id: 2, name: 'Bananas', desc: 'Fresh yellow bananas sourced locally.', price: 19.99, priceText: '$19.99 / 15kg box', warehouse: 'East Warehouse', distance: 8, category: 'Fruits & Vegetables', img: '🍌' },
  { id: 3, name: 'Whole Milk', desc: 'Creamy whole milk packed fresh daily.', price: 29.99, priceText: '$29.99 / 24L', warehouse: 'North Warehouse', distance: 10, category: 'Dairy & Eggs', img: '🥛' },
  { id: 4, name: 'Bread Loaf', desc: 'Soft and fresh bakery bread loafs daily.', price: 14.99, priceText: '$14.99 / 10 loaves', warehouse: 'City Central Warehouse', distance: 3, category: 'Bakery', img: '🍞' },
  { id: 5, name: 'Orange Juice', desc: '100% pure and fresh orange juice bottles.', price: 34.99, priceText: '$34.99 / 12 bottles', warehouse: 'South Warehouse', distance: 6, category: 'Beverages', img: '🧃' },
  { id: 6, name: 'Organic Eggs', desc: 'Cage-free organic eggs with rich taste.', price: 12.99, priceText: '$12.99 / 30 eggs', warehouse: 'West Warehouse', distance: 7, category: 'Dairy & Eggs', img: '🥚' },
  { id: 7, name: 'Carrots', desc: 'Fresh crunchy carrots, perfect for cooking.', price: 9.99, priceText: '$9.99 / 10kg', warehouse: 'East Warehouse', distance: 9, category: 'Fruits & Vegetables', img: '🥕' },
  { id: 8, name: 'Basmati Rice', desc: 'Premium aged basmati rice, extra-long grains.', price: 49.99, priceText: '$49.99 / 25kg', warehouse: 'North Warehouse', distance: 15, category: 'Packaged Goods', img: '🍚' },
  { id: 9, name: 'Pasta Pack', desc: 'Durum wheat pasta packs, ready to cook.', price: 22.99, priceText: '$22.99 / 12 packs', warehouse: 'Central Warehouse', distance: 4, category: 'Packaged Goods', img: '🍝' },
  { id: 10, name: 'Fresh Chicken', desc: 'Freshly processed chicken, farm raised.', price: 59.99, priceText: '$59.99 / 10kg', warehouse: 'South Warehouse', distance: 12, category: 'Packaged Goods', img: '🍗' },
  { id: 11, name: 'Cheddar Cheese', desc: 'Rich, creamy cheddar cheese for all recipes.', price: 39.99, priceText: '$39.99 / 5kg', warehouse: 'Central Warehouse', distance: 5, category: 'Dairy & Eggs', img: '🧀' },
  { id: 12, name: 'Butter', desc: 'Creamy, smooth butter from fresh milk.', price: 29.99, priceText: '$29.99 / 2kg', warehouse: 'West Warehouse', distance: 6, category: 'Dairy & Eggs', img: '🧈' },
];

const navItems = [
  { icon: '🏛', label: 'Store Dashboard' },
  { icon: '📦', label: 'Product Catalog' },
  { icon: '🛒', label: 'Orders' },
  { icon: '🚚', label: 'Order Tracking' },
  { icon: '⚙️', label: 'Profile Settings' },
];

const categories = ['Fruits & Vegetables', 'Dairy & Eggs', 'Packaged Goods', 'Beverages', 'Bakery'];
const distances = [
  { label: 'Local (Within 10 miles)', min: 0, max: 10 },
  { label: 'Regional (10-50 miles)', min: 10, max: 50 },
  { label: 'National (50+ miles)', min: 50, max: 1000 },
];

function ProductCatalog() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');
  const [priceRange, setPriceRange] = useState(100);
  const [activeNav, setActiveNav] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedDistances, setSelectedDistances] = useState([]);

  const isInCart = (productId) => {
    return cart.some(item => item.id === productId);
  };

  const toggleCart = (product) => {
    if (isInCart(product.id)) {
      setCart(cart.filter(item => item.id !== product.id));
    } else {
      setCart([...cart, product]);
    }
  };

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const toggleDistance = (distanceLabel) => {
    if (selectedDistances.includes(distanceLabel)) {
      setSelectedDistances(selectedDistances.filter(d => d !== distanceLabel));
    } else {
      setSelectedDistances([...selectedDistances, distanceLabel]);
    }
  };

  const filtered = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(p.category);
    const matchesPrice = p.price <= priceRange;
    
    let matchesDistance = true;
    if (selectedDistances.length > 0) {
      matchesDistance = selectedDistances.some(label => {
        const dist = distances.find(d => d.label === label);
        return p.distance >= dist.min && p.distance < dist.max;
      });
    }

    return matchesSearch && matchesCategory && matchesPrice && matchesDistance;
  });

  return (
    <div className="catalog-container">
      {/* Sidebar - Desktop */}
      <nav className="sidebar">
        <div className="sidebar-top">
          <div className="sidebar-logo">🛒 STORE</div>
          <div>
            {navItems.map((item, i) => (
              <div
                key={i}
                className={`nav-item ${activeNav === i ? 'active' : ''}`}
                onClick={() => setActiveNav(i)}
              >
                <span className="nav-item-icon">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
        
        <button className="logout-btn">Logout</button>
      </nav>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="overlay" onClick={() => setSidebarOpen(false)}>
          <div className="mobile-sidebar" onClick={e => e.stopPropagation()}>
            <div className="mobile-header">
              <span className="mobile-title">Dashboard</span>
              <button className="close-btn" onClick={() => setSidebarOpen(false)}>✕</button>
            </div>
            {navItems.map((item, i) => (
              <div
                key={i}
                className={`nav-item ${activeNav === i ? 'active' : ''}`}
                onClick={() => { setActiveNav(i); setSidebarOpen(false); }}
              >
                <span className="nav-item-icon">{item.icon}</span>
                {item.label}
              </div>
            ))}
            
            <button className="logout-btn">Logout</button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="main-content">
        {/* Navbar */}
        <nav className="navbar">
          <button className="menu-btn" onClick={() => setSidebarOpen(true)}>☰</button>
          <input
            className="search-input"
            type="search"
            placeholder="Search products, warehouses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="navbar-right">
            <button className="notification-btn">🔔</button>
            <button className="cart-icon-btn">
              🛒
              {cart.length > 0 && <span className="badge">{cart.length}</span>}
            </button>
            <div className="user-avatar">👤</div>
          </div>
        </nav>

        <div className="content-area">
          <div className="content-wrapper">
            {/* Filters */}
            <div className="filter-container">
              <div className="filter-section">
                <h5 className="filter-title">Filters</h5>

                <div className="filter-group">
                  <h6 className="filter-subtitle">Categories</h6>
                  {categories.map((cat, i) => (
                    <label key={i} className="checkbox-label">
                      <input
                        type="checkbox"
                        className="checkbox-input"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                      />
                      {cat}
                    </label>
                  ))}
                </div>

                <div className="filter-group">
                  <h6 className="filter-subtitle">Warehouse Proximity</h6>
                  {distances.map((dist, i) => (
                    <label key={i} className="checkbox-label">
                      <input
                        type="checkbox"
                        className="checkbox-input"
                        checked={selectedDistances.includes(dist.label)}
                        onChange={() => toggleDistance(dist.label)}
                      />
                      {dist.label}
                    </label>
                  ))}
                </div>

                <div>
                  <h6 className="filter-subtitle">Price Range</h6>
                  <input
                    type="range"
                    className="range-slider"
                    min="0"
                    max="100"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                  />
                  <div className="price-range-labels">
                    <span>$0</span>
                    <span>${priceRange}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="products-container">
              <div className="products-header">
                <h5 className="products-title">All Products ({filtered.length} items)</h5>
                <select className="select-sort">
                  <option>Sort by: Relevance</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>

              <div className="products-grid">
                {filtered.length > 0 ? (
                  filtered.map((product) => (
                    <div key={product.id} className="card">
                      <div className="card-img">{product.img}</div>
                      <div className="card-body">
                        <h6 className="card-title">{product.name}</h6>
                        <p className="card-desc">{product.desc}</p>
                        <p className="card-price">{product.priceText}</p>
                        <small className="card-warehouse">
                          {product.warehouse}<br />{product.distance} miles away
                        </small>
                        <button
                          className={`cart-btn ${isInCart(product.id) ? 'remove' : 'add'}`}
                          onClick={() => toggleCart(product)}
                        >
                          {isInCart(product.id) ? 'Remove from Cart' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="no-products">
                    <p>😕 No products found matching your filters</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCatalog;