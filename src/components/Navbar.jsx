export default function Navbar() {
  return (
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
  );
}