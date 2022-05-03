// import Image1 from "images/projects/grid/pic1";
import Image from "next/image";
import { useEffect, useState } from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper, useLightbox } from "simple-react-lightbox";
import portfolio from "../data/Portfolio.json";

function Portfolio3() {
  const { portfolioData } = portfolio;

  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolioData);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolioData.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);
  return (
    <>
      <div className="site-filters style-3 clearfix center m-b40">
        <ul className="filters">
          <li className={`btn ${filter === "all" ? "active" : ""}`}>
            <a active={filter === "all"} onClick={() => setFilter("all")}>
              All
            </a>
          </li>
          <li className={`btn ${filter === "web_design" ? "active" : ""}`}>
            <a
              active={filter === "web_design"}
              onClick={() => setFilter("web_design")}
            >
              Web Design
            </a>
          </li>
          <li className={`btn ${filter === "web_development" ? "active" : ""}`}>
            <a
              active={filter === "web_development"}
              onClick={() => setFilter("web_development")}
            >
              Web Development
            </a>
          </li>
          <li className={`btn ${filter === "branding" ? "active" : ""}`}>
            <a
              active={filter === "branding"}
              onClick={() => setFilter("branding")}
            >
              Branding
            </a>
          </li>
          <li className={`btn ${filter === "mobile_app" ? "active" : ""}`}>
            <a
              active={filter === "mobile_app"}
              onClick={() => setFilter("mobile_app")}
            >
              Mobile App
            </a>
          </li>
          <li className={`btn ${filter === "seo" ? "active" : ""}`}>
            <a active={filter === "seo"} onClick={() => setFilter("seo")}>
              SEO
            </a>
          </li>
        </ul>
      </div>
      <SimpleReactLightbox>
        <SRLWrapper>
          <div className="clearfix">
            <ul id="masonry" className="row" data-column-width="3">
              {projects.map((item) =>
                item.filtered === true ? (
                  <>
                    <li
                      className="card-container col-lg-4 col-md-6 col-sm-6 web_design wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.1s"
                    >
                      <div className="dlab-box  style-3 m-b30">
                        <div className="dlab-media ">
                          <Image
                            src={item.src}
                            layout="responsive"
                            width={370}
                            height={370}
                          />
                        </div>
                        {/* <div className="dlab-info">
                              <h5 className="title">
                                <a href="javascript:void(0);">{item.title}</a>
                              </h5>
                              <p className="post-author">
                                By <a href="javascript:void(0);">{item.author}</a>
                              </p>
                                </div> */}
                      </div>
                    </li>
                  </>
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    </>
  );
}

export default Portfolio3;
