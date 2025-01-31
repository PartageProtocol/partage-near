import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                  <h3>PARTAGE</h3>
                  <p>Keyless Solutions for Seamless Sharing</p>
                  <p>Join our social medias</p>
                  <div className="social-links mt-3">
                    <a href="https://discord.gg/4t4AX9GVUf" target="_blank" className="Discord">
                      <i className="bx bxl-discord"></i>
                    </a>
                    <a href="https://www.youtube.com/@partagexyz" target="_blank" className="Youtube">
                      <i className="bx bxl-youtube"></i>
                    </a>
                    <a href="https://twitter.com/partagexyz" target="_blank" className="twitter">
                      <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="https://t.me/partagexyz" target="_blank" className="telegram">
                      <i className="bx bxl-telegram"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Explore</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="https://hellopartage.xyz" target="_blank">Marketplace</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="https://medium.com/partage_xyz/partage-white-paper-v2-c0cbea46e2f8" target="_blank">White Paper</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="https://medium.com/partage-btc/partage-tutorials-8e1f6868716d" target="_blank">Tutorials</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="https://docs.google.com/document/d/1-ZoP8lExQZ_LDxBG0ZXdbFr7i8Ie0ymcMn6Uh-XfpZc/edit#heading=h.8do1cn1ic47h" target="_blank">Privacy Policy</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p>Exclusive insights straight to your inbox.</p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
          <a
          id="reserve"
            className="caption"
            href="https://ariregister.rik.ee/eng/company/14990229/CivicTech-O%C3%9C?search_id=ed8a0b4&pos=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            All rights reserved {` Ⓒ CivicTech OÜ, 2024`}
          </a>
          </div>
        </div>
      </footer>
      {/* <div id="preloader"></div> */}
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};

export default Footer;
