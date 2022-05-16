import Link from "next/link";
import Head from "next/head";
import Quote3 from "../element/quote-3";
import Footer3 from "../layout/footer-3";
import Header3 from "../layout/header-3";
import companyInfo from "../data/companyInfo.json";

function GetQuote() {
  const { companyName } = companyInfo;
  return (
    <>
      <Head>
        <title>Get Quote - {companyName}</title>
        <meta
          name="description"
          content="Get Quote Page for CodySupra Techies"
        />
        <meta property="og:title" content={`Get Quote - ${companyName}`} />
      </Head>
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
              <h1>Get A Quote</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row style-1">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Get A Quote
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- Get A Quote --> */}
        <Quote3 />
      </div>
      <Footer3 />
    </>
  );
}

export default GetQuote;
