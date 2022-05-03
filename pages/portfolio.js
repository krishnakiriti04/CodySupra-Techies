import Footer from "../layout/footer-3";
import Header from "../layout/header-3";
import Portfolio3 from "../component/portfolio-3";
import Link from "next/link";

function Portfolio() {
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr style-1 bg-primary"
          style={{
            backgroundImage: "url(images/banner/bnr2.png), var(--gradient-sec)",
            backgroundSize: "cover, 200%",
          }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Portfolio</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row style-1">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Portfolio
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- Error Page --> */}
        {/* <div className="section-full" style={{"backgroundImage":"url(images/background/bg1.png)"}}>
			<div className="container">
				<div className="error-page text-center">
					<div className="dlab_error">404</div>
					<h2 className="error-head">We are sorry. But the page you are looking for cannot be found.</h2>
					<Link href="/"><a className="btn btn-primary radius-no"><span className="p-lr15">Back to Homepage</span></a></Link>
				</div>
			</div>
		</div> */}
        {/* <!-- Error Page End --> */}
        <div
          className="section-full"
          style={{ backgroundImage: "url(images/background/bg1.png)" }}
        >
          <div className="container">
            <div className="section-head style-3 text-left">
              {/* <h2 className="title">Our Portfolio</h2> */}
              {/* <div className="dlab-separator style-2 bg-primary"></div> */}
            </div>
            <Portfolio3 />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Portfolio;
