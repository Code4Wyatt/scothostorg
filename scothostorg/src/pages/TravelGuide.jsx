import React from "react";
import "../style/style.css";
import NavBar from "../components/NavBar";
import AirportTravel from "../media/Airport.jpg";
import Passport from "../media/passport.jpg";
import Passport2 from "../media/passport2.jpg";
import IdentityCard from "../media/identitycard.jpg";
import UkraineCert from "../media/ukrainebcert.jpg";

const TravelGuide = () => {
  return (
    <>
      <NavBar />

      <img
        src={AirportTravel}
        alt="Image of airport"
        className="d-block w-100 bannerImage"
      />
        <div className="travel__main">   <div className="travel__header">
        <h3>Travel Guide</h3>
      </div>

      <div className="travel__intro s2">
        <p>
          Scotland is ready to welcome displaced people from Ukraine who would
          like to make Scotland their home. We have a proud history of warmly
          accepting people affected by conflict and adversity and the generosity
          and friendliness of Scots extends to you.
        </p>
      </div>

      <div className="responsibility">
        <h4>A Huge Responsibility</h4>
        <p>
          As a host, you are taking on an absolutely massive responsibility by
          offering to bring people into your home. This, although advertised as
          such by the UK government, is not a ‘set and forget’ situation. By
          offering to bring someone into your home you are taking on an enormous
          task. You’ll be responsible for, but not limited to, the following;
        </p>
        <ul>
          <li>Engaging with the person or family to establish a bond.</li>
          <li>
            Supporting them as they leave Ukraine (they might have done this
            already physically but emotionally they’ll be in shock and acting
            just to survive).
          </li>
          <li>
            Trying to manage a language barrier and overcome it to offer
            support.
          </li>
          <li>
            Filling in a lengthy visa application for your guest/guest (one visa
            application per person).
          </li>
          <li>
            Helping navigate them to a visa application centre (if they don’t
            have biometric passports).
          </li>
          <li>
            Trying to communicate why they need to go to a visa application
            centre, trying to explain how to get there without having been to
            any of the places yourself.
          </li>
          <li>
            Planning travel to Scotland, and possibly paying for that travel.
            Did you know that the minimum wage in Ukraine is €160 per month? In
            Poland the minimum wage is €610 per month. The cost of living in
            Poland is already much higher than in Ukraine which means just
            eating in Poland will be expensive on a Ukrainian budget. Now try to
            imagine paying for your family to flee to safety on €160 a month.
          </li>
          <li>
            Trying to navigate your guests from where they are now to an
            airport.{" "}
          </li>
          <li>
            Making sure they are checked in and have their tickets (especially
            confusing if the airline uses digital tickets and you need to get
            them to install and log into an app they cannot understand).
          </li>
          <li>
            Getting baggage dropped off in the right place. Making sure the
            baggage is tagged.
          </li>
          <li>
            Navigating the family to the gate, and making sure the gate staff
            understand their visa and identity documents and actually allow them
            on the plane.
          </li>
          <li>
            Making sure the family gets off the plane, finds their bags and
            finds their way out of the airport.
          </li>
          <li>Getting them safely to your home.</li>
        </ul>
        <p>And that is just the start of the journey.</p>
      </div>
      <div className="ukrainianIds">
        <h4>Types of Ukrainian ID</h4>
        <p>
          It is useful to try and understand the types of ID and what they mean
          in regards to travel from Europe and then to Scotland. Right now we
          have no guidance on what airlines will or will not accept as a valid
          form of ID and we have to assume that only those with a biometric
          passport and visa can fly into Scotland.
        </p>
        <div className="cards__group">
          <div className="row">
            <div className="col">
              <div className="card">
                <img
                  src={Passport}
                  alt="Passport Picture"
                  className="cardImages"
                />
                <h5>Biometric Passport</h5>
                <p>
                  A biometric passport is the kind of passport we get here in
                  the UK. For an adult this will be valid for ten years and for
                  a child their Ukrainian biometric passport lasts for four
                  years. Information is written in Ukrainian and English. The
                  next question is, is the biometric passport in date? With a
                  biometric passport (in date) and the visa for the UK (applied
                  for online) the person will be able to travel on any airline
                  into Scotland. There should be little to no risk booking a
                  flight if everyone in the party has this passport. If it is
                  not in date then it becomes more difficult. Those with an out
                  of date passport are safer to find alternative passage to
                  Scotland.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="card">
                {" "}
                <img
                  src={Passport2}
                  alt="Passport Picture"
                  className="cardImages"
                />
                <h5>Domestic Passport</h5>
                <p>
                  This is also known as an internal passport. Though no longer
                  issued, some Ukrainians will hold a soft booklet which can be
                  known as a domestic passport, internal passport or an
                  identification document. This is all in Ukrainian and
                  handwritten.
                </p>
              </div>
            </div>

            <div className="col">
              <div className="card">
                {" "}
                <img
                  src={IdentityCard}
                  alt="Passport Picture"
                  className="cardImages"
                />
                <h5>Identity Card</h5>
                <p>
                  The internal passports are now replaced by an identity card.
                  This card is hard, quite like a UK driving license, and has a
                  picture on it along with other identifying information. Both
                  the internal passport and the new ID cards are accepted as
                  valid forms of identification.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src={UkraineCert}
                  alt="Passport Picture"
                  className="cardImages"
                />
                <h5>Birth Certificate</h5>
                <p>
                  A biometric passport is the kind of passport we get here in
                  the UK. For an adult this will be valid for ten years and for
                  a child their Ukrainian biometric passport lasts for four
                  years. Information is written in Ukrainian and English. The
                  next question is, is the biometric passport in date? With a
                  biometric passport (in date) and the visa for the UK (applied
                  for online) the person will be able to travel on any airline
                  into Scotland. There should be little to no risk booking a
                  flight if everyone in the party has this passport. If it is
                  not in date then it becomes more difficult. Those with an out
                  of date passport are safer to find alternative passage to
                  Scotland.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flying__scotland">
        <h4>Flying Into Scotland</h4>
        <div className="d-flex">
          {" "}
          <p className="airportText">
            Scotland has five main international airports:{" "}
          </p>{" "}
          <b> Glasgow, Edinburgh, Aberdeen, Glasgow Prestwick and Inverness.</b>
        </div>
        <p className="airportText">
          There are other airports you can use to fly to more remote parts of
          Scotland, likely these destinations would include a layover at one of
          the bigger airports.<br></br>
          
              </p>
              <div className="d-flex">
            <p className="airportText">You can also fly into: </p>
            <b>
              Barra, Benbecula, Campbeltown, Dundee, Inverness, Islay, Kirkwall,
              Stornoway, Sumburgh, Tiree and Wick, Tiree, Colonsay, Coll and
              Islay.
            </b>
          </div>
        <div className="d-flex tip">
          <b>TIP: </b>
          <p className="airportText">
            There are a lot of European airlines which means that there are a
            whole bunch of flight options flying out of Europe to Scotland.
            Later there is an explanation on how to use Skyscanner{" "}
          </p>
        </div>
      </div></div>
   
    </>
  );
};

export default TravelGuide;
