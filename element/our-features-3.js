import HomeData from "../data/Home.json";

function Features3() {
  const { features } = HomeData;
  const { title, leftFeatures, rightFeatures } = features;
  return (
    <>
      {/* <!-- Our Features --> */}
      <section className="content-inner bg-white">
        <div className="container">
          <div className="section-head style-3 text-center">
            <h2 className="title">{title}</h2>
            <div className="dlab-separator style-2 bg-primary"></div>
          </div>
          <div className="row align-items-center about-wraper-2">
            <div className="col-lg-4">
              <div className="row">
                {leftFeatures.map((feature) => (
                  <div
                    key={feature.id}
                    className="col-lg-12 col-md-6 wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.2s"
                  >
                    <div className="icon-bx-wraper left m-b50 icon-up">
                      <div className="icon-bx-sm radius gradient-sec shadow-primary m-b20">
                        <a href="#" className="icon-cell text-white">
                          <i className={feature.icon}></i>
                        </a>
                      </div>
                      <div className="icon-content">
                        <h4 className="dlab-tilte text-capitalize">
                          {feature.heading}
                        </h4>
                        <p className="text-justify">{feature.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="col-lg-4 wow zoomIn"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="dz-media text-center m-b30">
                <img
                  src="images/about/img7.png"
                  className="move-1"
                  alt="features-image"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row">
                {rightFeatures.map((feature) => (
                  <div
                    key={feature.id}
                    className="col-lg-12 col-md-6 wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.2s"
                  >
                    <div className="icon-bx-wraper left m-b50 icon-up">
                      <div className="icon-bx-sm radius gradient-sec shadow-primary m-b20">
                        <a href="#" className="icon-cell text-white">
                          <i className={feature.icon}></i>
                        </a>
                      </div>
                      <div className="icon-content">
                        <h4 className="dlab-tilte text-capitalize">
                          {feature.heading}
                        </h4>
                        <p className="text-justify">{feature.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features3;
