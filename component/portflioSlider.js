import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import portfolio from "../data/Portfolio.json";

function PortfolioSlider() {
  const { portfolioData } = portfolio;
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    speed: 3500,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <section className="content-inner-1 bg-gray">
        <div className="container">
          <div className="section-head style-3 text-center mb-4">
            <h2 className="title">Our Projects</h2>
            <div className="dlab-separator style-2 bg-primary"></div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Slider
                {...settings}
                className="team-carousel2 owl owl-carousel owl-none owl-theme owl-dots-primary-full"
              >
                {portfolioData.map((item) => (
                  <React.Fragment key={item.id}>
                    <div
                      className="item wow fadeInUp dlab-img-overlay1"
                      data-wow-duration="2s"
                      data-wow-delay="0.1s"
                      // key={item.id}
                    >
                      <div className="dlab-team style-3 m-b10">
                        <div className="">
                          <img src={item.src} alt={item.title} />
                        </div>
                      </div>
                      <div className="dlab-mask">
                        <p className="dlab-mask-desc">{item.description}</p>
                        <a
                          href={item.url}
                          target="_blank"
                          className="dlab-mask-link mt-5 btn"
                        >
                          Preview <i className="fa fa-long-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                    <div className="dlab-content text-center mt-4">
                      <div className="clearfix">
                        <h3 className="dlab-name">{item.title}</h3>
                        {/* <span className="dlab-position">{item.category}</span> */}
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PortfolioSlider;
