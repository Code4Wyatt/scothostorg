import NavBar from "../components/NavBar";
import "../style/style.css";
import { Carousel } from "react-bootstrap";
import facebookLogo from "../media/facebook-logo-png-2320.png";
import travelGuideImage from "../media/travelguide.jpg";
import visaGuideImage from "../media/visaguide.jpg";
import setUpImage from "../media/setup.jpg";
import ongoingSupportImage from "../media/support.jpg";
import homeBanner from "../media/homebanner.jpg";

const Home = () => {
  return (
      <>
      <NavBar />

      <img
        className="d-block w-100 bannerImage"
        src={homeBanner}
        alt="Second slide"
      />

      <div className="mission__statement">
        <div className="statement d-flex">
          <div className="statement1"></div>
          <div className="statement2">
            <p className="m-3 s1">Our Mission</p>
            <p className="m-3 s2">
              Providing a support network for Scottish based hosts for Ukrainian
              families on entire journey of hosting our Ukrainian families, and
              this will be achieved by support and campaigning to represent
              families interest to ensure Scottish and Ukrainian families have a
              positive and effective time during their time together in
              Scotland.
            </p>
          </div>
        </div>
      </div>
      <div className="sub__statement">
        <p className="statement3">
          Hosting is and will be one of the largest commitments families will
          ever make in their life. We strongly encourage you to consider
          carefully what you are about to undertake. If you have already
          undertaken then welcome, we hope to support you, and you us!
        </p>
      </div>
      <div className="sub__statement2">
        <h5 className="statement3">
          Visit our Support Group:{" "}
          <a href="https://www.facebook.com/groups/scothosts">
            <img src={facebookLogo} className="facebookLogo" />
            ScotHosts
          </a>
        </h5>
      </div>
      <div className="our__services">
        <div className="services__container container-fluid">
          <p className="services__title">Services We Offer</p>
          <div className="visa  ">
            <div className="visa__left">
              <img src={visaGuideImage} className="visaGuideImage" />
            </div>
            <div className="visa__right">
              <p className="visa__title">Visa Application Help</p>
              <p className="visa__content">
                Scotland is ready to welcome Ukrainians with open arms. There
                have been a number of people matching with people they plan to
                host in their own homes in Scotland and they are moving on to
                the next, painful, stage of the process - the visa application.
                We will discuss applying for both types of visa - both the Warm
                Scots Welcome and applying with a specific host. The general
                consensus is that the visa application is complicated, poorly
                designed and could break even the most intelligent of people.
                Hopefully this guide will help ease some of those headaches.
              </p>
              <p className="visa__link">
                Visit our visa guide section here:{" "}
                <a href="/travel">Visa Guide</a>
              </p>
            </div>
          </div>
          <div className="visa ">
            <div className="visa__left">
              <img src={travelGuideImage} className="visaGuideImage homeImg2" />
            </div>
            <div className="visa__right travelRight">
              <p className="visa__title homeTitle2">Travel Guide</p>
              <p className="travel__content">
                Scotland is ready to welcome displaced people from Ukraine who
                would like to make Scotland their home. We have a proud history
                of warmly accepting people affected by conflict and adversity
                and the generosity and friendliness of Scots extends to you.
              </p>
              <p className="travel__link">
                Visit our travel guide section here:{" "}
                <a href="/travelguide">Travel Guide</a>
              </p>
            </div>
          </div>
          <div className="visa">
            <div className="visa__left">
              <img src={setUpImage} className="visaGuideImage homeImg3" />
            </div>
            <div className="visa__right welcomeRight">
              <p className="visa__title homeTitle3">Welcome Pack Information</p>
              <p className="visa__content">
                Arriving in a new country can be a scary process. Here we have
                all the details you should need to get settled comfortably, with
                guides on medical assistance and how we will welcome you on your
                arrival.
              </p>
              <p className="visa__link">
                Visit our visa guide section here:{" "}
                <a href="/travel">ScotHosts Welcome Pack</a>
              </p>
              <p className="visa__link">
                Or the guide on the UK Government website here:{" "}
                <a href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1064315/Ukraine_Welcome_Guidance.pdf?fbclid=IwAR2PVWskMOUtradJTH3gUv0oAWRSRreLDbK-pk8CuM4cBHbQL-LZyGYhTkM">
                  UK Goverment Guide
                </a>
              </p>
            </div>
          </div>
          <div className="visa">
            <div className="visa__left">
              <img src={ongoingSupportImage} className="visaGuideImage homeImg4" />
            </div>
            <div className="visa__right supportRight">
              <p className="visa__title">Ongoing Support</p>
              <p className="visa__content">
                Information on the ongoing assistance you will receive including
                getting children into schooling, government benefit systems in
                place and much more.
              </p>
              <p className="visa__link">
                Visit our ongoing support section here:{" "}
                <a href="/travel">Ongoing Support</a>
              </p>
            </div>
          </div>
          <div className="travel d-flex"></div>
        </div>
      </div>
      <div className="footer">
        <h5 className="statement3">
          Visit our Support Group:{" "}
          <a href="https://www.facebook.com/groups/scothosts">
            <img src={facebookLogo} className="facebookLogo" />
            ScotHosts
          </a>
        </h5>
      </div>
    </>
  );
};

export default Home;
