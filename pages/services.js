import Footer3 from "../layout/footer-3";
import Header3 from "../layout/header-3";
import { useState } from "react";
import AllServices3 from "../element/all-services-3";
import Clients3 from "../element/clients-3";
import Service3 from "../element/service-3";
import Testimonial3 from "../element/testimonial-3";
import TeamSlider3 from "../component/teamSlider-3";
import Link from "next/link";

function Services3() {
  const [open, setOpen] = useState("p2");
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
              <h1>Services</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row style-1">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Services
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End -->  */}

        {/* <!-- Services --> */}
        {/* <AllServices3 />      */}
        <Service3 />
      </div>
      <Footer3 />
    </>
  );
}

export default Services3;
