import { useEffect, useState } from "react";
import Footer3 from "../layout/footer-3";
import Header3 from "../layout/header-3";
import Link from "next/link";
import ServiceData from "../data/Services.json";

function ServicesDetails3() {
  const { services } = ServiceData;
  const [currentService, setCurrentService] = useState(services[0]);

  return (
    <>
      <Header3 />
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
              <h1>Services Details</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row style-1">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Service Details
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- Services Details --> */}
        <section className="content-inner-2">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 m-b30">
                <aside className="side-bar sticky-top">
                  <div className="widget_nav_menu m-b40">
                    <ul>
                      {services &&
                        services.map((service) => (
                          <li
                            key={service.id}
                            className={
                              service.id === currentService.id ? "active" : ""
                            }
                            onClick={() => setCurrentService(service)}
                          >
                            <a>{service.heading}</a>
                          </li>
                        ))}
                    </ul>
                  </div>
                </aside>
              </div>
              <div className="col-xl-9 col-lg-8">
                <div className="dlab-media m-b30 rounded-md">
                  <img src={currentService.img} alt="Service Details" />
                </div>
                <div className="dlab-content">
                  <div className="m-b40">
                    {currentService && (
                      <>
                        <h3>{currentService.heading}</h3>
                        <p>{currentService.longDesc1}</p>
                        <p>{currentService.longDesc2}</p>
                      </>
                    )}
                  </div>
                  {/* <div className="row">
                    <div className="col-lg-12">
                      <h3>How You Start Web Development ?</h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley.
                      </p>
                      <ul className="list-check style-1 primary">
                        <li>
                          Lorem Ipsum is simply dummy text of the printing.
                        </li>
                        <li>
                          Lorem Ipsum has been the industry's standard dummy
                          text ever.
                        </li>
                        <li>
                          when an unknown printer took a galley of type and
                          scrambled.
                        </li>
                        <li>
                          It has survived not only five centuries, but also the
                          leap.
                        </li>
                        <li>
                          Recently with desktop publishing software like Aldus
                          PageMaker.
                        </li>
                        <li>
                          Lorem Ipsum is simply dummy text of the printing
                          industry.
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer3 />
    </>
  );
}

export default ServicesDetails3;
