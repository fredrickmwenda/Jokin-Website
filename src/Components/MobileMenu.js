const MobileMenu = () => (
    <div className="th-menu-wrapper">
      <div className="th-menu-area text-center">
        <button className="th-menu-toggle"><i className="fal fa-times"></i></button>
        <div className="mobile-logo">
          <a href="home-company.html"><img src="assets/img/logo.png" alt="Jokin" /></a>
        </div>
        <div className="th-mobile-menu">
          <ul>
            <li className="menu-item-has-children">
              <a href="home-company.html">Home</a>
              <ul className="sub-menu">
                <li><a href="home-company.html">Home Company</a></li>
                <li><a href="home-construction.html">Home Construction</a></li>
                <li><a href="home-industry.html">Home Industry</a></li>
              </ul>
            </li>
            <li><a href="about.html">About Us</a></li>
            <li className="menu-item-has-children">
              <a href="#">Service</a>
              <ul className="sub-menu">
                <li><a href="service.html">Services</a></li>
                <li><a href="service-details.html">Service Details</a></li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <a href="#">Pages</a>
              <ul className="sub-menu">
                <li className="menu-item-has-children">
                  <a href="#">Shop</a>
                  <ul className="sub-menu">
                    <li><a href="shop.html">Shop</a></li>
                    <li><a href="shop-details.html">Shop Details</a></li>
                    <li><a href="cart.html">Cart Page</a></li>
                    <li><a href="checkout.html">Checkout</a></li>
                    <li><a href="wishlist.html">Wishlist</a></li>
                  </ul>
                </li>
                <li><a href="team.html">Team</a></li>
                <li><a href="team-details.html">Team Details</a></li>
                <li><a href="project.html">Project</a></li>
                <li><a href="project-details.html">Project Details</a></li>
                <li><a href="faq.html">Faq Page</a></li>
                <li><a href="price.html">Price Package</a></li>
                <li><a href="error.html">Error Page</a></li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <a href="#">Blog</a>
              <ul className="sub-menu">
                <li><a href="blog-grid.html">Blog Grid</a></li>
                <li><a href="blog.html">Blog Lists</a></li>
                <li><a href="blog-details.html">Blog Details</a></li>
              </ul>
            </li>
            <li>
              <a href="contact.html">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
  
  export default MobileMenu;
  