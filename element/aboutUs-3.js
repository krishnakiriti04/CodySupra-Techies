import Counter3 from "./counter3";
import HomeData from "../data/Home.json";
function AboutUs3() {
  const { whyUs } = HomeData;
  const { title, text1, text2 } = whyUs;
  return (
    <>
      {/* <!-- About Us --> */}
      <section className="content-inner ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-b30">
              <div className="dz-media">
                <img src="images/about/img6.png" className="move-2" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-head style-3 mb-4">
                <h2 className="title">{title}</h2>
                <div className="dlab-separator style-2 bg-primary"></div>
              </div>
              <p>{text1}</p>
              <p className="m-b30">{text2}</p>
              <Counter3 />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs3;
