export default function Home() {
  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span><i className="fa-solid fa-trophy"></i> Premium Quality Granite</span>
            <span className="divider">|</span>
            <span><i className="fa-solid fa-truck"></i> Pan India Delivery</span>
            <span className="divider">|</span>
            <span><i className="fa-solid fa-medal"></i> 100% Customer Satisfaction</span>
          </div>
          <div className="top-bar-right">
            <span><i className="fa-solid fa-phone"></i> +91 98765 43210</span>
            <span className="divider">|</span>
            <span><i className="fa-solid fa-envelope"></i> info@divyalaxmigranites.com</span>
          </div>
        </div>
      </div>

      {/* Header / Navbar */}
      <header className="header">
        <div className="container header-inner">
          <div className="logo">
            <i className="fa-solid fa-mountain-sun logo-icon"></i>
            <div className="logo-text">
              <h1>DIVYALAXMI</h1>
              <p>GRANITES</p>
            </div>
          </div>
          <nav className="main-nav">
            <ul>
              <li><a href="#" className="active">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#collection">Our Granite</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#why-us">Why Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="header-actions">
            <button className="icon-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
            <button className="icon-btn"><i className="fa-regular fa-user"></i></button>
            <button className="icon-btn cart-btn">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="cart-count">0</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: "url('/assets/images/hero_granite_1787046303167.jpg')" }}>
        <div className="container">
          <div className="hero-content">
            <span className="subtitle">PREMIUM QUALITY GRANITE</span>
            <h2>Elegant Stones<br />for <span className="highlight">Modern Spaces</span></h2>
            <p>Discover a wide range of premium granite slabs for kitchens, bathrooms, flooring and more.</p>
            <div className="hero-buttons">
              <a href="#collection" className="btn btn-primary">Explore Our Granite <i className="fa-solid fa-arrow-right"></i></a>
              <a href="#contact" className="btn btn-outline">Get a Quote</a>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="collection section">
        <div className="container">
          <div className="section-header">
            <h2>Our Granite Collection</h2>
            <p>Premium quality granite for every space</p>
          </div>
          <div className="collection-grid">
            {/* Card 1 */}
            <div className="collection-card">
              <div className="card-img">
                <img src="/assets/images/kitchen_granite_1787040689503.jpg" alt="Kitchen Granite" />
                <div className="card-icon"><i className="fa-solid fa-kitchen-set"></i></div>
              </div>
              <div className="card-content">
                <div className="card-text">
                  <h3>Kitchen Granite</h3>
                  <p>Stylish & Durable</p>
                </div>
                <a href="#" className="arrow-btn"><i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
            {/* Card 2 */}
            <div className="collection-card">
              <div className="card-img">
                <img src="/assets/images/bathroom_granite_1787040813543.jpg" alt="Bathroom Granite" />
                <div className="card-icon"><i className="fa-solid fa-bath"></i></div>
              </div>
              <div className="card-content">
                <div className="card-text">
                  <h3>Bathroom Granite</h3>
                  <p>Elegant & Hygienic</p>
                </div>
                <a href="#" className="arrow-btn"><i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
            {/* Card 3 */}
            <div className="collection-card">
              <div className="card-img">
                <img src="/assets/images/flooring_granite_1787040943939.jpg" alt="Flooring Granite" />
                <div className="card-icon"><i className="fa-solid fa-layer-group"></i></div>
              </div>
              <div className="card-content">
                <div className="card-text">
                  <h3>Flooring Granite</h3>
                  <p>Strong & Long Lasting</p>
                </div>
                <a href="#" className="arrow-btn"><i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
            {/* Card 4 */}
            <div className="collection-card">
              <div className="card-img">
                <img src="/assets/images/staircase_granite_1787040990472.jpg" alt="Staircase Granite" />
                <div className="card-icon"><i className="fa-solid fa-stairs"></i></div>
              </div>
              <div className="card-content">
                <div className="card-text">
                  <h3>Staircase Granite</h3>
                  <p>Safe & Beautiful</p>
                </div>
                <a href="#" className="arrow-btn"><i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Granite Section */}
      <section id="featured" className="featured section bg-light">
        <div className="container">
          <div className="section-header-flex">
            <div className="section-header text-left">
              <h2>Featured Granite</h2>
              <p>Premium stones for your dream spaces</p>
            </div>
            <a href="#" className="btn btn-primary btn-sm">View All <i className="fa-solid fa-arrow-right"></i></a>
          </div>

          <div className="featured-grid">
            {/* Featured 1 */}
            <div className="featured-card">
              <div className="featured-img">
                <img src="/assets/images/black_galaxy_granite_1787041312515.jpg" alt="Black Galaxy Granite" />
                <span className="badge badge-premium">Premium</span>
                <button className="heart-btn"><i className="fa-regular fa-heart"></i></button>
              </div>
              <div className="featured-content">
                <h3>Black Galaxy Granite</h3>
                <p>A perfect blend of elegance and strength.</p>
                <div className="price">₹1,200 / Sq.Ft</div>
                <button className="btn btn-dark w-100">Add to Enquiry <i className="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
            {/* Featured 2 */}
            <div className="featured-card">
              <div className="featured-img">
                <img src="/assets/images/white_pearl_granite_1787046486944.jpg" alt="White Pearl Granite" />
                <span className="badge badge-popular">Popular</span>
                <button className="heart-btn"><i className="fa-regular fa-heart"></i></button>
              </div>
              <div className="featured-content">
                <h3>White Pearl Granite</h3>
                <p>Bright and timeless beauty.</p>
                <div className="price">₹1,150 / Sq.Ft</div>
                <button className="btn btn-dark w-100">Add to Enquiry <i className="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
            {/* Featured 3 */}
            <div className="featured-card">
              <div className="featured-img">
                <img src="/assets/images/red_multi_granite_1787045646697.jpg" alt="Red Multi Granite" />
                <span className="badge badge-bestseller">Best Seller</span>
                <button className="heart-btn"><i className="fa-regular fa-heart"></i></button>
              </div>
              <div className="featured-content">
                <h3>Red Multi Granite</h3>
                <p>Rich look for modern spaces.</p>
                <div className="price">₹1,300 / Sq.Ft</div>
                <button className="btn btn-dark w-100">Add to Enquiry <i className="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
            {/* Featured 4 */}
            <div className="featured-card">
              <div className="featured-img">
                <img src="/assets/images/steel_grey_granite_1787045671252.jpg" alt="Steel Grey Granite" />
                <button className="heart-btn"><i className="fa-regular fa-heart"></i></button>
              </div>
              <div className="featured-content">
                <h3>Steel Grey Granite</h3>
                <p>Modern and sophisticated.</p>
                <div className="price">₹1,100 / Sq.Ft</div>
                <button className="btn btn-dark w-100">Add to Enquiry <i className="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section id="why-us" className="features-banner">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon"><i className="fa-regular fa-gem"></i></div>
              <div className="feature-text">
                <h4>Premium Quality</h4>
                <p>Only the finest granite slabs</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><i className="fa-solid fa-truck-fast"></i></div>
              <div className="feature-text">
                <h4>Pan India Delivery</h4>
                <p>Safe & timely delivery across India</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><i className="fa-solid fa-shield-halved"></i></div>
              <div className="feature-text">
                <h4>Durable & Long Lasting</h4>
                <p>Built for a lifetime</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><i className="fa-solid fa-headset"></i></div>
              <div className="feature-text">
                <h4>Expert Support</h4>
                <p>Guidance for your perfect choice</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src="/assets/images/about_showroom_1787045738524.jpg" alt="Divyalaxmi Granites Showroom" />
              <div className="about-badge">
                <div className="badge-content">
                  <i className="fa-solid fa-mountain-sun"></i>
                  <span>DIVYALAXMI<br />GRANITES</span>
                </div>
              </div>
            </div>
            <div className="about-content">
              <div className="section-header text-left">
                <h2>About Divyalaxmi Granites</h2>
              </div>
              <p>Divyalaxmi Granites, along with our branch Kamaleshwari Granites, is a trusted name in premium granite and natural stone solutions. With years of experience, we bring you the finest quality stones that combine beauty, strength, and durability — perfect for homes, offices, and commercial spaces.</p>
              <p>Our commitment to excellence and customer satisfaction has made us the preferred choice for architects, builders, and homeowners alike.</p>
              <a href="#" className="btn btn-primary">Know More <i className="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>What Our Customers Say</h2>
            <p>Trusted by architects, builders and homeowners</p>
          </div>
          <div className="testimonials-grid">
            {/* Testimonial 1 */}
            <div className="testimonial-card">
              <i className="fa-solid fa-quote-left quote-icon"></i>
              <p className="review-text">"Excellent quality granite slabs. The finish and colour are exactly as shown. Highly recommended!"</p>
              <div className="stars">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
              </div>
              <div className="reviewer">
                <h4>— Ravi Kumar</h4>
                <p>Homeowner</p>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="testimonial-card">
              <i className="fa-solid fa-quote-left quote-icon"></i>
              <p className="review-text">"Divyalaxmi Granites offers the best variety and professional service. Our requirement was handled perfectly."</p>
              <div className="stars">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i>
              </div>
              <div className="reviewer">
                <h4>— Priya Sharma</h4>
                <p>Interior Designer</p>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="testimonial-card">
              <i className="fa-solid fa-quote-left quote-icon"></i>
              <p className="review-text">"Timely delivery and great packaging from the Kamaleshwari branch. The granite slabs were in perfect condition."</p>
              <div className="stars">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
              </div>
              <div className="reviewer">
                <h4>— Karthik</h4>
                <p>Builder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo footer-logo">
                <i className="fa-solid fa-mountain-sun logo-icon"></i>
                <div className="logo-text">
                  <h2>DIVYALAXMI</h2>
                  <p>GRANITES</p>
                </div>
              </div>
              <p className="footer-desc">Premium quality natural stones for timeless beauty.</p>
              <div className="social-links">
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-youtube"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
              </div>
            </div>

            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#collection">Our Granite</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h3>Our Services</h3>
              <ul>
                <li><a href="#">Kitchen Granite</a></li>
                <li><a href="#">Bathroom Granite</a></li>
                <li><a href="#">Flooring Granite</a></li>
                <li><a href="#">Staircase Granite</a></li>
                <li><a href="#">Custom Solutions</a></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h3>Contact Us</h3>
              <ul>
                <li><i className="fa-solid fa-phone"></i> +91 98765 43210</li>
                <li><i className="fa-solid fa-envelope"></i> info@divyalaxmigranites.com</li>
                <li className="branch">
                  <i className="fa-solid fa-location-dot"></i>
                  <div>
                    <strong>Main Branch:</strong> Divyalaxmi Granites<br />
                    123 Stone Market, Mumbai, India
                  </div>
                </li>
                <li className="branch">
                  <i className="fa-solid fa-location-dot"></i>
                  <div>
                    <strong>Branch Office:</strong> Kamaleshwari Granites<br />
                    456 Marble Hub, Pune, India
                  </div>
                </li>
              </ul>
            </div>

            <div className="footer-newsletter">
              <h3>Subscribe to Our Newsletter</h3>
              <p>Get latest updates on new arrivals and offers.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Your email address" required />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>&copy; 2026 Divyalaxmi Granites. All Rights Reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
