import React, { useState } from "react";
import "../style/style.css";
import NavBar from "../components/NavBar";
import AirportTravel from "../media/Airport.jpg";
import Passport from "../media/passport.jpg";
import Passport2 from "../media/passport2.jpg";
import IdentityCard from "../media/identitycard.jpg";
import UkraineCert from "../media/ukrainebcert.jpg";
import { Table, ButtonGroup, Button } from "react-bootstrap";

const TravelGuide = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  console.log(selectedCity);
  console.log(selectedLocation);
  return (
    <>
      <NavBar />

      <img
        src={AirportTravel}
        alt="Image of airport"
        className="d-block w-100 bannerImage"
      />
      <div className="travel__main">
        {" "}
        <div className="travel__header">
          <h3>Travel Guide</h3>
        </div>
        <div className="travel__intro s2">
          <p>
            Scotland is ready to welcome displaced people from Ukraine who would
            like to make Scotland their home. We have a proud history of warmly
            accepting people affected by conflict and adversity and the
            generosity and friendliness of Scots extends to you.
          </p>
        </div>
        <div className="responsibility">
          <h4>A Huge Responsibility</h4>
          <p>
            As a host, you are taking on an absolutely massive responsibility by
            offering to bring people into your home. This, although advertised
            as such by the UK government, is not a ‘set and forget’ situation.
            By offering to bring someone into your home you are taking on an
            enormous task. You’ll be responsible for, but not limited to, the
            following;
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
              Filling in a lengthy visa application for your guest/guest (one
              visa application per person).
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
              Did you know that the minimum wage in Ukraine is €160 per month?
              In Poland the minimum wage is €610 per month. The cost of living
              in Poland is already much higher than in Ukraine which means just
              eating in Poland will be expensive on a Ukrainian budget. Now try
              to imagine paying for your family to flee to safety on €160 a
              month.
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
              understand their visa and identity documents and actually allow
              them on the plane.
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
            It is useful to try and understand the types of ID and what they
            mean in regards to travel from Europe and then to Scotland. Right
            now we have no guidance on what airlines will or will not accept as
            a valid form of ID and we have to assume that only those with a
            biometric passport and visa can fly into Scotland.
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
                    the UK. For an adult this will be valid for ten years and
                    for a child their Ukrainian biometric passport lasts for
                    four years. Information is written in Ukrainian and English.
                    The next question is, is the biometric passport in date?
                    With a biometric passport (in date) and the visa for the UK
                    (applied for online) the person will be able to travel on
                    any airline into Scotland. There should be little to no risk
                    booking a flight if everyone in the party has this passport.
                    If it is not in date then it becomes more difficult. Those
                    with an out of date passport are safer to find alternative
                    passage to Scotland.
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
                    issued, some Ukrainians will hold a soft booklet which can
                    be known as a domestic passport, internal passport or an
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
                    This card is hard, quite like a UK driving license, and has
                    a picture on it along with other identifying information.
                    Both the internal passport and the new ID cards are accepted
                    as valid forms of identification.
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
                    the UK. For an adult this will be valid for ten years and
                    for a child their Ukrainian biometric passport lasts for
                    four years. Information is written in Ukrainian and English.
                    The next question is, is the biometric passport in date?
                    With a biometric passport (in date) and the visa for the UK
                    (applied for online) the person will be able to travel on
                    any airline into Scotland. There should be little to no risk
                    booking a flight if everyone in the party has this passport.
                    If it is not in date then it becomes more difficult. Those
                    with an out of date passport are safer to find alternative
                    passage to Scotland.
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
            <b>
              {" "}
              Glasgow, Edinburgh, Aberdeen, Glasgow Prestwick and Inverness.
            </b>
          </div>
          <p className="airportText">
            There are other airports you can use to fly to more remote parts of
            Scotland, likely these destinations would include a layover at one
            of the bigger airports.<br></br>
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
              Later there is an explanation on how to use Skyscanner to find the
              best flight combination or alternatives to your first choice (the
              flight routes are very busy and often very expensive due to
              demand).
            </p>
          </div>
          <div className="popular__flights">
            <h4>Popular airlines flying into Scotland</h4>
            <p className="airportText">
              This is not an exhaustive list, but a really good start on
              airlines you can expect to have flights coming into Scotland from
              around Europe.
            </p>
            <div className="flight__table">
              <div className="row">
                <div className="col-7">
                  <Table striped bordered hover className="travel__table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Airline</th>
                        <th>Website</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Ryanair</td>
                        <td>
                          <a href="https://www.ryanair.com/gb/en">
                            https://www.ryanair.com/gb/en
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>easyJet</td>
                        <td>
                          <a href="https://www.easyjet.com/en/">
                            https://www.easyjet.com/en/
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Flybe</td>
                        <td>
                          <a href="https://www.flybe.com/en">
                            https://www.flybe.com/en
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>WizzAir</td>
                        <td>
                          <a href="https://wizzair.com/en-gb/flights/timetable">
                            https://wizzair.com/en-gb/flights/timetable
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Jet2</td>
                        <td>
                          <a href="https://www.jet2.com/">
                            https://www.jet2.com/
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Loganair</td>
                        <td>
                          <a href="https://www.loganair.co.uk/">
                            https://www.loganair.co.uk/
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>TUI</td>
                        <td>
                          <a href="https://www.tui.co.uk/">
                            https://www.tui.co.uk/
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>KLM</td>
                        <td>
                          <a href="https://www.klm.co.uk/">
                            https://www.klm.co.uk/
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>Norwegian</td>
                        <td>
                          <a href="https://www.norwegian.com/">
                            https://www.norwegian.com/
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>Transavia</td>
                        <td>
                          <a href="https://www.transavia.com/">
                            https://www.transavia.com/
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div className="col tips">
                  <p>
                    <b>TIP: </b>Each of these airlines will have a main ‘hub’ in
                    Europe. This means that that airport is their ‘home’
                    airport. You’ll find more flights from an airline's hub
                    airport flying out to different areas across Europe. There
                    is always the option of flying into England and then to
                    Scotland. Or flying into England and making use of the free
                    train travel to get to Scotland. If you decide to go this
                    route then the most likely scenario is that you will have
                    your guest laying over in one of the airports in London.
                  </p>
                  <p>
                    <b>TIP: </b>Avoid any flights that require ‘self-transfer’ -
                    not only will this be extremely confusing to your guest but
                    it can also involve changing airports and this is really not
                    easy even if they look like they are in the same city.
                    London Stansted is actually closer to Colchester for
                    example. Self-transfer on budget airlines also requires
                    collecting baggage and leaving through border patrol, and
                    then re-entering the airport, checking in for the new flight
                    and passing security again. This will open up your options
                    especially for the cities you can fly into the UK from as
                    London is a major hub for Europe. It will likely also open
                    up some cheaper flight options. This will open up your
                    options especially for the cities you can fly into the UK
                    from as London is a major hub for Europe. It will likely
                    also open up some cheaper flight options.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="popular__flights">
            <h4>Popular flights into Scotland</h4>
            <p className="airportText">
              There are many more, but hopefully you can start your search with
              these. Clicking the name of the city will take you to the relevant
              country’s section within this document.
            </p>
            <div className="country__select__buttons d-flex">
              <ButtonGroup className="mb-2 btn__group">
                <Button
                  onClick={() => {
                    setSelectedCity("Edinburgh");
                  }}
                >
                  Edinburgh
                </Button>
                <Button
                  onClick={() => {
                    setSelectedCity("Glasgow");
                  }}
                >
                  Glasgow
                </Button>
                <Button
                  onClick={() => {
                    setSelectedCity("Aberdeen");
                  }}
                >
                  Aberdeen
                </Button>
                <Button
                  onClick={() => {
                    setSelectedCity("Inverness");
                  }}
                >
                  Inverness
                </Button>
              </ButtonGroup>
            </div>
            <div className="flight__table">
              <div className="row">
                <div className="col-7">
                  {selectedCity === "Edinburgh" && (
                    <Table striped bordered hover className="travel__table">
                      <thead>
                        <tr>
                          <th>Ryanair</th>
                          <th>easyJet</th>
                          <th>Norwegian</th>
                          <th>WizzAir</th>
                          <th>AirBaltic</th>
                          <th>Vueling</th>
                          <th>Eurowings</th>
                          <th>KLM</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Bratislava");
                              }}
                            >
                              Bratislava
                            </Button>
                          </td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Krakow");
                              }}
                            >
                              Krakow
                            </Button>
                          </td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Geneva");
                              }}
                            >
                              Geneva
                            </Button>
                          </td>
                          <td>Bucharest</td>
                          <td>Riga</td>
                          <td>Barcelona</td>
                          <td>Munich</td>
                          <td>Amsterdam</td>
                        </tr>
                        <tr>
                          <td>Bucharest</td>
                          <td>Paris</td>
                          <td>Prague</td>
                          <td>Budapest</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Budapest</td>
                          <td>Basel</td>
                          <td>Hamburg</td>
                          <td>Gdansk</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Gdansk</td>
                          <td>Amsterdam</td>
                          <td>Aalborg</td>
                          <td>Warsaw-Modlin</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Katowice</td>
                          <td>Berlin</td>
                          <td>Copenhagen</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Kaunas</td>
                          <td>Hamburg</td>
                          <td>Billund</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Krakow</td>
                          <td>Madrid</td>
                          <td>Tallinn</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Poznan</td>
                          <td>Naples</td>
                          <td>Barcelona</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Riga</td>
                          <td>Malaga</td>
                          <td>Alicante</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Sofia</td>
                          <td>Alicante</td>
                          <td>Krakow</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Talin</td>
                          <td>Belfast International</td>
                          <td>Budapest</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Warsaw-Modlin</td>
                          <td>Lisbon</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </Table>
                  )}
                </div>
              </div>
            </div>
            <div className="location__info__section">
              {selectedLocation === "Bratislava" && (
                <div className="extra__info">
                  <h4>Free Travel in Slovakia</h4>
                  <div className="d-flex">
                    <div className="free__travel">
                      <ul>
                        <li>
                          There is free train travel in Slovakia for Ukrainians.{" "}
                          <a href="https://www.zssk.sk/ukrajina/">
                            https://www.zssk.sk/ukrajina/{" "}
                          </a>
                          This is the website of the railways of the Slovak
                          Republic.
                        </li>
                        <li>
                          WizzAir is offering free flights from Slovakia for
                          Ukrainian refugees. Read more about it here -
                          <a href="https://wizzair.com/en-gb/information-and-services/about-us/news/2022/03/02/wizz-air-supports-ukrainian-refugees-100-000-free-seats-from-neighbouring-countries-in-march">
                            https://wizzair.com/en-gb/information-and-services/about-us/news/2022/03/02/wizz-air-supports-ukrainian-refugees-100-000-free-seats-from-neighbouring-countries-in-march{" "}
                          </a>
                          This is the website of the railways of the Slovak
                          Republic.
                        </li>
                        <li>
                          Ukrainian people can get a 95% discount on net fares
                          for one-way Finnair tickets from Budapest to Helsinki.
                          Read more about it here -
                          <a href="https://wizzair.com/en-gb/information-and-services/about-us/news/2022/03/02/wizz-air-supports-ukrainian-refugees-100-000-free-seats-from-neighbouring-countries-in-march">
                            https://wizzair.com/en-gb/information-and-services/about-us/news/2022/03/02/wizz-air-supports-ukrainian-refugees-100-000-free-seats-from-neighbouring-countries-in-march{" "}
                          </a>
                          This is the website of the railways of the Slovak
                          Republic.
                        </li>
                      </ul>
                    </div>
                    <div className="popular__routes">
                      <h4>Popular Routes To Scotland</h4>
                      <p>Bratislava - Edinburgh (Ryanair)</p>
                    </div>
                  </div>
                  <div className="international__airports">
                    <h4>International airports in Slovakia</h4>
                    <Table striped bordered hover className="airport__table">
                      <thead>
                        <tr>
                          <th>Airport Name</th>
                          <th>Airport Code</th>
                          <th>UK Desination</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="https://www.bts.aero/en/">
                              Bratislava Airport
                            </a>
                          </td>
                          <td>BTS</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.airportkosice.sk/en">
                              Košice Airport
                            </a>
                          </td>
                          <td>KSC</td>
                          <td>
                            London, Doncaster, Sheffield, Liverpool, London
                            Stansted and London Luton
                          </td>
                        </tr>
                      </tbody>
                                      </Table>
                                      <p>This route map is a good visual guide of where you can fly to from Košice. - <a href="https://www.flightconnections.com/flights-from-ko%C5%A1ice-ksc">https://www.flightconnections.com/flights-from-ko%C5%A1ice-ksc</a></p>
                                      <p>If all else fails then use Google maps to determine which big cities are nearby to the one they are in. Using Bratislava we can see that Vienna, Brno and Budapest are nearby. 
Search the city name on Google maps and you will see in the bottom right of the screen there is a marker for scale so you can figure out approximate distance.
</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelGuide;
