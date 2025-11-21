export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="footer-column">
              <h3>Company</h3>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-column">
              <h3>Resources</h3>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Partners</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Developers</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-column">
              <h3>Legal</h3>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-column">
              <h3>Connect</h3>
              <ul>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2024 Warezo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}