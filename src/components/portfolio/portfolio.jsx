import "./portfolio.scss";

export default function portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>portfolio</h1>
      <ul>
        <li className="active" >Featured</li>
        <li>Web app</li>
        <li>Moblie app</li>
        <li>Design</li>
        <li>Branding</li>
      </ul>
      <div className="container">
      {/* cart start */}
        <div className="item">
          <img src="assets/web-design.jpg" alt="" />
          <h3>Banking app</h3>
        </div>
      {/* cart end */}
      {/* cart start */}
        <div className="item">
          <img src="assets/web-design.jpg" alt="" />
          <h3>Banking app</h3>
        </div>
      {/* cart end */}
      {/* cart start */}
        <div className="item">
          <img src="assets/web-design.jpg" alt="" />
          <h3>Banking app</h3>
        </div>
      {/* cart end */}
      {/* cart start */}
        <div className="item">
          <img src="assets/web-design.jpg" alt="" />
          <h3>Banking app</h3>
        </div>
      {/* cart end */}
      {/* cart start */}
        <div className="item">
          <img src="assets/web-design.jpg" alt="" />
          <h3>Banking app</h3>
        </div>
      {/* cart end */}
      {/* cart start */}
        <div className="item">
          <img src="assets/web-design.jpg" alt="" />
          <h3>Banking app</h3>
        </div>
      {/* cart end */}
      </div>

    </div>
  );
}
