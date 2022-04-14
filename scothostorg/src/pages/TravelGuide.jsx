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



      <div className="parallax2">

      </div>
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
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Bucharest");
                              }}
                            >
                              Bucharest
                            </Button>
                          </td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Riga");
                              }}
                            >
                              Riga
                            </Button>
                          </td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Barcelona");
                              }}
                            >
                              Barcelona
                            </Button>
                          </td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Munich");
                              }}
                            >
                              Munich
                            </Button>
                          </td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Amsterdam");
                              }}
                            >
                              Amsterdam
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Bucharest");
                              }}
                            >
                              Bucharest
                            </Button>
                          </td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Paris");
                              }}
                            >
                              Paris
                            </Button>
                          </td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Prague");
                              }}
                            >
                              Prague
                            </Button>
                          </td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Budapest");
                              }}
                            >
                              Budapest
                            </Button>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Budapest");
                              }}
                            >
                              Budapest
                            </Button>
                          </td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Basel");
                              }}
                            >
                              Basel
                            </Button>
                          </td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Hamburg");
                              }}
                            >
                              Hamburg
                            </Button>
                          </td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Gdansk");
                              }}
                            >
                              Gdansk
                            </Button>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Gdansk");
                              }}
                            >
                              Gdansk
                            </Button>
                          </td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Amsterdam");
                              }}
                            >
                              Amsterdam
                            </Button>
                          </td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Aalborg");
                              }}
                            >
                              Aalborg
                            </Button>
                          </td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Warsaw-Modlin");
                              }}
                            >
                              Warsaw-Modlin
                            </Button>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Katowice");
                              }}
                            >
                              Katowice
                            </Button>
                          </td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Berlin");
                              }}
                            >
                              Berlin
                            </Button>
                          </td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Copenhagen");
                              }}
                            >
                              Copenhagen
                            </Button>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Kaunas");
                              }}
                            >
                              Kaunas
                            </Button>
                          </td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Hamburg");
                              }}
                            >
                              Hamburg
                            </Button>
                          </td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Billund");
                              }}
                            >
                              Billund
                            </Button>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
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
                                setSelectedLocation("Madrid");
                              }}
                            >
                              Madrid
                            </Button>
                          </td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Tallinn");
                              }}
                            >
                              Tallinn
                            </Button>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Poznan");
                              }}
                            >
                              Poznan
                            </Button>
                          </td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Naples");
                              }}
                            >
                              Naples
                            </Button>
                          </td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Barcelona");
                              }}
                            >
                              Barcelona
                            </Button>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Riga");
                              }}
                            >
                              Riga
                            </Button>
                          </td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Malaga");
                              }}
                            >
                              Malaga
                            </Button>
                          </td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Alicante");
                              }}
                            >
                              Alicante
                            </Button>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Sofia");
                              }}
                            >
                              Sofia
                            </Button>
                          </td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Alicante");
                              }}
                            >
                              Alicante
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
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Tallinn");
                              }}
                            >
                              Tallinn
                            </Button>
                          </td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Belfast International");
                              }}
                            >
                              Belfast International
                            </Button>
                          </td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Budapest");
                              }}
                            >
                              Budapest
                            </Button>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Warsaw-Modlin");
                              }}
                            >
                              Warsaw-Modlin
                            </Button>
                          </td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Lisbon");
                              }}
                            >
                              Lisbon
                            </Button>
                          </td>
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
                    <p>
                      This route map is a good visual guide of where you can fly
                      to from Košice. -{" "}
                      <a href="https://www.flightconnections.com/flights-from-ko%C5%A1ice-ksc">
                        https://www.flightconnections.com/flights-from-ko%C5%A1ice-ksc
                      </a>
                    </p>
                    <p>
                      If all else fails then use Google maps to determine which
                      big cities are nearby to the one they are in. Using
                      Bratislava we can see that Vienna, Brno and Budapest are
                      nearby. Search the city name on Google maps and you will
                      see in the bottom right of the screen there is a marker
                      for scale so you can figure out approximate distance.
                    </p>
                  </div>
                </div>
              )}
              {selectedLocation === "Budapest" && (
                <div className="extra__info">
                  <h4>Free Travel in Budapest</h4>
                  <div className="d-flex">
                    <div className="free__travel">
                      <ul>
                        <li>
                          They also have routes that travel from Ukraine to
                          Hungary. It is unclear if these are still operating as
                          this post was last updated on March 4th.
                          <a href="https://www.mavcsoport.hu/en/mav-start/international-travels/travel-ukraine-hungary">
                            https://www.mavcsoport.hu/en/mav-start/international-travels/travel-ukraine-hungary{" "}
                          </a>
                        </li>
                        <li>
                          Ukrainian refugees may use MÁV trains free of charge
                          from Záhony.
                        </li>
                        <li>
                          WizzAir are offering free flights out of Hungary for
                          Ukrainians fleeing the war. Learn more here. -
                          <a href="https://wizzair.com/en-gb/information-and-services/about-us/news/2022/03/02/wizz-air-supports-ukrainian-refugees-100-000-free-seats-from-neighbouring-countries-in-march">
                            https://wizzair.com/en-gb/information-and-services/about-us/news/2022/03/02/wizz-air-supports-ukrainian-refugees-100-000-free-seats-from-neighbouring-countries-in-march{" "}
                          </a>
                        </li>
                        <li>
                          Free travel for Ukrainian citizens (refugees) on
                          Budapest public transport will be available until
                          April 15. The mayor of Budapest said all children
                          under the age of 14 from Ukraine would have free
                          travel rights. To plan your route you need the
                          BudapestGO app.
                          <a href="https://play.google.com/store/apps/details?id=hu.webvalto.bkkfutar&hl=en_GB&gl=US">
                            https://play.google.com/store/apps/details?id=hu.webvalto.bkkfutar&hl=en_GB&gl=US{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="popular__routes">
                      <h4>Popular Routes To Scotland</h4>
                      <p>
                        Budapest - Edinburgh (Ryanair, easyJet, WizzAir and
                        Norwegian)
                      </p>
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
                            <a href="https://www.bud.hu/en">Budapest Airport</a>
                          </td>
                          <td>BUD</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.debrecenairport.com/en">
                              Debrecen Airport
                            </a>
                          </td>
                          <td>DEB</td>
                          <td>London Luton</td>
                        </tr>
                      </tbody>
                    </Table>

                    <p>
                      If all else fails then use Google maps to determine which
                      big cities are nearby to the one they are in. Using
                      Budapest we can see that the cities of Brno, Vienna and
                      Bratislava are nearby.
                    </p>
                    <p>
                      Search the city name on Google maps and you will see in
                      the bottom right of the screen there is a marker for scale
                      so you can figure out approximate distance.
                    </p>
                  </div>
                </div>
              )}
              {selectedLocation === "Kaunas" && (
                <div className="extra__info">
                  <h4>Free Travel in Kaunas</h4>
                  <div className="d-flex">
                    <div className="free__travel">
                      <ul>
                        <li>
                          People fleeing from Ukraine can use LTG trains and
                          Vilnius buses free of charge.
                          <a href="https://www.litrail.lt/en/-/%E2%80%9Elietuvos-gelezinkeliai-savo-patalpose-pasirenge-priimti-pabegelius-is-ukrainos">
                            LTG Trains{" "}
                          </a>
                          <a href="https://ukraina.vilnius.lt/atvykstantiems-is-ukrainos/">
                            Vilnius Buses{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="popular__routes">
                      <h4>Popular Routes To Scotland</h4>
                      <p>Kaunas - Edinburgh (Ryanair)</p>
                    </div>
                  </div>
                  <div className="international__airports">
                    <h4>International airports in Lithuania</h4>
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
                            <a href="https://www.vilnius-airport.lt/en/">
                              Vilnius Airport
                            </a>
                          </td>
                          <td>VNO</td>
                          <td>London</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.palanga-airport.lt/en">
                              Palanga Airport
                            </a>
                          </td>
                          <td>PLQ</td>
                          <td>No direct flights</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.kaunas-airport.lt/en/">
                              Kaunas Airport
                            </a>
                          </td>
                          <td>KUN</td>
                          <td>Edinburgh</td>
                        </tr>
                      </tbody>
                    </Table>

                    <p>
                      If your Ukrainian guest is currently in Lithuania but the
                      flights are too busy or too expensive you can direct them
                      to a nearby city with an airport. You can use Google maps
                      to determine which big cities are nearby to the one they
                      are in. Using Kaunas we can see that the only other nearby
                      city is within Lithuania, Vilnius. Further to the north is
                      Riga, Latvia. To the south-west is the border with Poland.
                    </p>
                    <p>
                      Search the city name on Google maps and you will see in
                      the bottom right of the screen there is a marker for scale
                      so you can figure out approximate distance.
                    </p>
                  </div>
                </div>
              )}
              {selectedLocation === "Gdansk" && (
                <div className="extra__info">
                  <h4>Free Travel in Poland</h4>
                  <div className="d-flex">
                    <div className="free__travel">
                      <ul>
                        <li>
                          German Federal Railway has announced that they will
                          offer free travel from Poland to Germany. Trains leave
                          from Warsaw, Danzig, Przemysl, Krakow and Wroclaw. -
                          <a href="https://www.bahn.com/en">
                            https://www.bahn.com/en
                          </a>
                          This post on Facebook has some details on the scheme -
                          <a href="https://www.facebook.com/groups/534675064647815/permalink/546621206786534/">
                            Help Ukraine refugees in all Europe - допомоги
                            українським біженцям{" "}
                          </a>
                        </li>
                        <li>
                          FlixBus are offering free travel to various locations
                          in Poland from Przemysl. Read about it on their
                          website (in Ukrainian). -
                          <a href="https://www.flixbus.pl/ukraina-pomoc">
                            https://www.flixbus.pl/ukraina-pomoc
                          </a>
                        </li>
                        <li>
                          WizzAir is offering free flights to Ukrainian refugees
                          from Poland. Learn more here. -
                          <a href="https://wizzair.com/en-gb/information-and-services/about-us/news/2022/03/02/wizz-air-supports-ukrainian-refugees-100-000-free-seats-from-neighbouring-countries-in-march">
                            WIZZ AIR SUPPORTS UKRAINIAN REFUGEES: 100,000 FREE
                            SEATS FROM NEIGHBOURING COUNTRIES IN MARCH
                          </a>
                        </li>
                        <li>
                          Ukrainians are entitled to a 95% discount on net fares
                          for one-way Finnair tickets from Warsaw, Krakow and
                          Gdansk to Helsinki. -
                          <a href="https://www.finnair.com/">
                            https://www.finnair.com/
                          </a>
                        </li>
                        <li>
                          They can also use PKP trains and Polferries to travel
                          from Polish borders to other cities in Poland. -
                          <a href="https://www.intercity.pl/pl/site/o-nas/dzial-prasowy/aktualnosci/railway-aid-to-ukraine.html">
                            PKP Trains
                          </a>
                          <a href="https://polferries.pl/">
                            https://polferries.pl/
                          </a>
                        </li>
                        <li>
                          LOT airlines also offers discounted tariffs for
                          Ukrainans. -
                          <a href="https://www.lot.com/gb/en">LOT Airlines</a>
                        </li>
                        <li>
                          Uber offers unlimited free trips between the Ukrainian
                          border and Polish cities. -
                          <a href="https://www.uber.com/uk-UA/newsroom/update-on-our-support-for-ukraine/">
                            Uber
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="popular__routes">
                      <h4>Popular Routes To Scotland</h4>
                      <ul>
                        <li>Krakow to Edinburgh (Ryanair)</li>
                        <li>Gdansk to Edinburgh (Ryanair, easyJet)</li>
                        <li>Katowice to Edinburgh (Ryanair)</li>
                        <li>Poznan to Edinburgh (Ryanair)</li>
                        <li>
                          Krakow to Edinburgh (Ryanair, easyJet, Norwegian)
                        </li>
                        <li>Warsaw-Modlin to Edinburgh (Ryanair)</li>
                        <li>Warsaw-Chopin to Edinburgh (easyJet)</li>
                        <li>Gdansk to Aberdeen (Ryanair, WizzAir)</li>
                        <li>Krakow to Glasgow (Ryanair)</li>
                        <li>Wroclaw to Glasgow (Ryanair)</li>
                        <li>Warsaw-Modlin to Glasgow (Ryanair)</li>
                        <li>Bydgoszcz to Edinburgh (Ryanair)</li>
                      </ul>
                      <p>
                        Recently it seems that Poland has been trying to shift
                        as many Ukrainian refugees out of Poland into nearby
                        countries as possible. Poland is already extremely
                        overwhelmed and this goes for the airports too. There
                        are thousands upon thousands of refugees trying to get
                        the same flights from Poland and it is hard to find a
                        space on a flight. This is also the reason that flight
                        prices have rocketed. This is not intentional by the
                        airlines to make money but it is the way their system
                        works. Popular destinations tend to cost more and their
                        booking system will increase the price automatically
                        because of the number of flights going into, and coming
                        out of Poland right now. This has been confirmed by
                        people on the ground in Poland such as "Scot's Angel"{" "}
                        <a href="https://news.stv.tv/scotland/ukrainian-refugees-thank-scottish-angel-for-driving-them-to-safety">
                          Demelza Sully
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                  <div className="international__airports">
                    <h4>International airports in Poland</h4>
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
                            <a href="https://www.lotnisko-chopina.pl/en/index.html">
                              Warsaw-Chopin Airport
                            </a>
                          </td>
                          <td>WAW</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.palanga-airport.lt/en">
                              Krakow John Paul II Airport
                            </a>
                          </td>
                          <td>KRK</td>
                          <td>Glasgow, Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.kaunas-airport.lt/en/">
                              Gdansk Lech Walesa Airport
                            </a>
                          </td>
                          <td>GDN</td>
                          <td>Aberdeen, Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://airport.wroclaw.pl/en/">
                              Copernicus Wroclaw Airport
                            </a>
                          </td>
                          <td>WRO</td>
                          <td>Glasgow, Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://airport.wroclaw.pl/en/">
                              Katowice Airport
                            </a>
                          </td>
                          <td>KTW</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://poznanairport.pl/en/homepage/">
                              Poznan-Lawica Airport
                            </a>
                          </td>
                          <td>POZ</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.rzeszowairport.pl/en">
                              Rzeszow-Jasionka Airport
                            </a>
                          </td>
                          <td>RZE</td>
                          <td>London</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.airport.lublin.pl/en">
                              Lublin Airport
                            </a>
                          </td>
                          <td>LUZ</td>
                          <td>London Luton</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://en-modlinairport-pl.translate.goog/?_x_tr_sl=pl&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=sc">
                              Warsaw-Modlin Airport
                            </a>
                          </td>
                          <td>WMI</td>
                          <td>Glasgow, Edinburgh</td>
                        </tr>
                      </tbody>
                    </Table>

                    <p>
                      Because of the shock increase of flights to get to
                      Scotland from Poland, and the minimum wage in Ukraine, you
                      will likely need to look to nearby cities in other
                      countries to find a reasonable flight to Scotland. Using
                      the example of Katowice you can see that Bratislava and
                      Kosice are nearby.
                    </p>
                    <p>
                      Search the city name on Google maps and you will see in
                      the bottom right of the screen there is a marker for scale
                      so you can figure out approximate distance.
                    </p>
                  </div>
                </div>
              )}
              {selectedLocation === "Katowice" && (
                <div className="extra__info">
                  <h4>Free Travel in Poland</h4>
                  <div className="d-flex">
                    <div className="free__travel">
                      <ul>
                        <li>
                          German Federal Railway has announced that they will
                          offer free travel from Poland to Germany. Trains leave
                          from Warsaw, Danzig, Przemysl, Krakow and Wroclaw. -
                          <a href="https://www.bahn.com/en">
                            https://www.bahn.com/en
                          </a>
                          This post on Facebook has some details on the scheme -
                          <a href="https://www.facebook.com/groups/534675064647815/permalink/546621206786534/">
                            Help Ukraine refugees in all Europe - допомоги
                            українським біженцям{" "}
                          </a>
                        </li>
                        <li>
                          FlixBus are offering free travel to various locations
                          in Poland from Przemysl. Read about it on their
                          website (in Ukrainian). -
                          <a href="https://www.flixbus.pl/ukraina-pomoc">
                            https://www.flixbus.pl/ukraina-pomoc
                          </a>
                        </li>
                        <li>
                          WizzAir is offering free flights to Ukrainian refugees
                          from Poland. Learn more here. -
                          <a href="https://wizzair.com/en-gb/information-and-services/about-us/news/2022/03/02/wizz-air-supports-ukrainian-refugees-100-000-free-seats-from-neighbouring-countries-in-march">
                            WIZZ AIR SUPPORTS UKRAINIAN REFUGEES: 100,000 FREE
                            SEATS FROM NEIGHBOURING COUNTRIES IN MARCH
                          </a>
                        </li>
                        <li>
                          Ukrainians are entitled to a 95% discount on net fares
                          for one-way Finnair tickets from Warsaw, Krakow and
                          Gdansk to Helsinki. -
                          <a href="https://www.finnair.com/">
                            https://www.finnair.com/
                          </a>
                        </li>
                        <li>
                          They can also use PKP trains and Polferries to travel
                          from Polish borders to other cities in Poland. -
                          <a href="https://www.intercity.pl/pl/site/o-nas/dzial-prasowy/aktualnosci/railway-aid-to-ukraine.html">
                            PKP Trains
                          </a>
                          <a href="https://polferries.pl/">
                            https://polferries.pl/
                          </a>
                        </li>
                        <li>
                          LOT airlines also offers discounted tariffs for
                          Ukrainans. -
                          <a href="https://www.lot.com/gb/en">LOT Airlines</a>
                        </li>
                        <li>
                          Uber offers unlimited free trips between the Ukrainian
                          border and Polish cities. -
                          <a href="https://www.uber.com/uk-UA/newsroom/update-on-our-support-for-ukraine/">
                            Uber
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="popular__routes">
                      <h4>Popular Routes To Scotland</h4>
                      <ul>
                        <li>Krakow to Edinburgh (Ryanair)</li>
                        <li>Gdansk to Edinburgh (Ryanair, easyJet)</li>
                        <li>Katowice to Edinburgh (Ryanair)</li>
                        <li>Poznan to Edinburgh (Ryanair)</li>
                        <li>
                          Krakow to Edinburgh (Ryanair, easyJet, Norwegian)
                        </li>
                        <li>Warsaw-Modlin to Edinburgh (Ryanair)</li>
                        <li>Warsaw-Chopin to Edinburgh (easyJet)</li>
                        <li>Gdansk to Aberdeen (Ryanair, WizzAir)</li>
                        <li>Krakow to Glasgow (Ryanair)</li>
                        <li>Wroclaw to Glasgow (Ryanair)</li>
                        <li>Warsaw-Modlin to Glasgow (Ryanair)</li>
                        <li>Bydgoszcz to Edinburgh (Ryanair)</li>
                      </ul>
                      <p>
                        Recently it seems that Poland has been trying to shift
                        as many Ukrainian refugees out of Poland into nearby
                        countries as possible. Poland is already extremely
                        overwhelmed and this goes for the airports too. There
                        are thousands upon thousands of refugees trying to get
                        the same flights from Poland and it is hard to find a
                        space on a flight. This is also the reason that flight
                        prices have rocketed. This is not intentional by the
                        airlines to make money but it is the way their system
                        works. Popular destinations tend to cost more and their
                        booking system will increase the price automatically
                        because of the number of flights going into, and coming
                        out of Poland right now. This has been confirmed by
                        people on the ground in Poland such as "Scot's Angel"{" "}
                        <a href="https://news.stv.tv/scotland/ukrainian-refugees-thank-scottish-angel-for-driving-them-to-safety">
                          Demelza Sully
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                  <div className="international__airports">
                    <h4>International airports in Poland</h4>
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
                            <a href="https://www.lotnisko-chopina.pl/en/index.html">
                              Warsaw-Chopin Airport
                            </a>
                          </td>
                          <td>WAW</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.palanga-airport.lt/en">
                              Krakow John Paul II Airport
                            </a>
                          </td>
                          <td>KRK</td>
                          <td>Glasgow, Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.kaunas-airport.lt/en/">
                              Gdansk Lech Walesa Airport
                            </a>
                          </td>
                          <td>GDN</td>
                          <td>Aberdeen, Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://airport.wroclaw.pl/en/">
                              Copernicus Wroclaw Airport
                            </a>
                          </td>
                          <td>WRO</td>
                          <td>Glasgow, Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://airport.wroclaw.pl/en/">
                              Katowice Airport
                            </a>
                          </td>
                          <td>KTW</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://poznanairport.pl/en/homepage/">
                              Poznan-Lawica Airport
                            </a>
                          </td>
                          <td>POZ</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.rzeszowairport.pl/en">
                              Rzeszow-Jasionka Airport
                            </a>
                          </td>
                          <td>RZE</td>
                          <td>London</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.airport.lublin.pl/en">
                              Lublin Airport
                            </a>
                          </td>
                          <td>LUZ</td>
                          <td>London Luton</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://en-modlinairport-pl.translate.goog/?_x_tr_sl=pl&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=sc">
                              Warsaw-Modlin Airport
                            </a>
                          </td>
                          <td>WMI</td>
                          <td>Glasgow, Edinburgh</td>
                        </tr>
                      </tbody>
                    </Table>

                    <p>
                      Because of the shock increase of flights to get to
                      Scotland from Poland, and the minimum wage in Ukraine, you
                      will likely need to look to nearby cities in other
                      countries to find a reasonable flight to Scotland. Using
                      the example of Katowice you can see that Bratislava and
                      Kosice are nearby.
                    </p>
                    <p>
                      Search the city name on Google maps and you will see in
                      the bottom right of the screen there is a marker for scale
                      so you can figure out approximate distance.
                    </p>
                  </div>
                </div>
              )}
              {selectedLocation === "Krakow" && (
                <div className="extra__info">
                  <h4>Free Travel in Poland</h4>
                  <div className="d-flex">
                    <div className="free__travel">
                      <ul>
                        <li>
                          German Federal Railway has announced that they will
                          offer free travel from Poland to Germany. Trains leave
                          from Warsaw, Danzig, Przemysl, Krakow and Wroclaw. -
                          <a href="https://www.bahn.com/en">
                            https://www.bahn.com/en
                          </a>
                          This post on Facebook has some details on the scheme -
                          <a href="https://www.facebook.com/groups/534675064647815/permalink/546621206786534/">
                            Help Ukraine refugees in all Europe - допомоги
                            українським біженцям{" "}
                          </a>
                        </li>
                        <li>
                          FlixBus are offering free travel to various locations
                          in Poland from Przemysl. Read about it on their
                          website (in Ukrainian). -
                          <a href="https://www.flixbus.pl/ukraina-pomoc">
                            https://www.flixbus.pl/ukraina-pomoc
                          </a>
                        </li>
                        <li>
                          WizzAir is offering free flights to Ukrainian refugees
                          from Poland. Learn more here. -
                          <a href="https://wizzair.com/en-gb/information-and-services/about-us/news/2022/03/02/wizz-air-supports-ukrainian-refugees-100-000-free-seats-from-neighbouring-countries-in-march">
                            WIZZ AIR SUPPORTS UKRAINIAN REFUGEES: 100,000 FREE
                            SEATS FROM NEIGHBOURING COUNTRIES IN MARCH
                          </a>
                        </li>
                        <li>
                          Ukrainians are entitled to a 95% discount on net fares
                          for one-way Finnair tickets from Warsaw, Krakow and
                          Gdansk to Helsinki. -
                          <a href="https://www.finnair.com/">
                            https://www.finnair.com/
                          </a>
                        </li>
                        <li>
                          They can also use PKP trains and Polferries to travel
                          from Polish borders to other cities in Poland. -
                          <a href="https://www.intercity.pl/pl/site/o-nas/dzial-prasowy/aktualnosci/railway-aid-to-ukraine.html">
                            PKP Trains
                          </a>
                          <a href="https://polferries.pl/">
                            https://polferries.pl/
                          </a>
                        </li>
                        <li>
                          LOT airlines also offers discounted tariffs for
                          Ukrainans. -
                          <a href="https://www.lot.com/gb/en">LOT Airlines</a>
                        </li>
                        <li>
                          Uber offers unlimited free trips between the Ukrainian
                          border and Polish cities. -
                          <a href="https://www.uber.com/uk-UA/newsroom/update-on-our-support-for-ukraine/">
                            Uber
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="popular__routes">
                      <h4>Popular Routes To Scotland</h4>
                      <ul>
                        <li>Krakow to Edinburgh (Ryanair)</li>
                        <li>Gdansk to Edinburgh (Ryanair, easyJet)</li>
                        <li>Katowice to Edinburgh (Ryanair)</li>
                        <li>Poznan to Edinburgh (Ryanair)</li>
                        <li>
                          Krakow to Edinburgh (Ryanair, easyJet, Norwegian)
                        </li>
                        <li>Warsaw-Modlin to Edinburgh (Ryanair)</li>
                        <li>Warsaw-Chopin to Edinburgh (easyJet)</li>
                        <li>Gdansk to Aberdeen (Ryanair, WizzAir)</li>
                        <li>Krakow to Glasgow (Ryanair)</li>
                        <li>Wroclaw to Glasgow (Ryanair)</li>
                        <li>Warsaw-Modlin to Glasgow (Ryanair)</li>
                        <li>Bydgoszcz to Edinburgh (Ryanair)</li>
                      </ul>
                      <p>
                        Recently it seems that Poland has been trying to shift
                        as many Ukrainian refugees out of Poland into nearby
                        countries as possible. Poland is already extremely
                        overwhelmed and this goes for the airports too. There
                        are thousands upon thousands of refugees trying to get
                        the same flights from Poland and it is hard to find a
                        space on a flight. This is also the reason that flight
                        prices have rocketed. This is not intentional by the
                        airlines to make money but it is the way their system
                        works. Popular destinations tend to cost more and their
                        booking system will increase the price automatically
                        because of the number of flights going into, and coming
                        out of Poland right now. This has been confirmed by
                        people on the ground in Poland such as "Scot's Angel"{" "}
                        <a href="https://news.stv.tv/scotland/ukrainian-refugees-thank-scottish-angel-for-driving-them-to-safety">
                          Demelza Sully
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                  <div className="international__airports">
                    <h4>International airports in Poland</h4>
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
                            <a href="https://www.lotnisko-chopina.pl/en/index.html">
                              Warsaw-Chopin Airport
                            </a>
                          </td>
                          <td>WAW</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.palanga-airport.lt/en">
                              Krakow John Paul II Airport
                            </a>
                          </td>
                          <td>KRK</td>
                          <td>Glasgow, Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.kaunas-airport.lt/en/">
                              Gdansk Lech Walesa Airport
                            </a>
                          </td>
                          <td>GDN</td>
                          <td>Aberdeen, Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://airport.wroclaw.pl/en/">
                              Copernicus Wroclaw Airport
                            </a>
                          </td>
                          <td>WRO</td>
                          <td>Glasgow, Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://airport.wroclaw.pl/en/">
                              Katowice Airport
                            </a>
                          </td>
                          <td>KTW</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://poznanairport.pl/en/homepage/">
                              Poznan-Lawica Airport
                            </a>
                          </td>
                          <td>POZ</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.rzeszowairport.pl/en">
                              Rzeszow-Jasionka Airport
                            </a>
                          </td>
                          <td>RZE</td>
                          <td>London</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.airport.lublin.pl/en">
                              Lublin Airport
                            </a>
                          </td>
                          <td>LUZ</td>
                          <td>London Luton</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://en-modlinairport-pl.translate.goog/?_x_tr_sl=pl&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=sc">
                              Warsaw-Modlin Airport
                            </a>
                          </td>
                          <td>WMI</td>
                          <td>Glasgow, Edinburgh</td>
                        </tr>
                      </tbody>
                    </Table>

                    <p>
                      Because of the shock increase of flights to get to
                      Scotland from Poland, and the minimum wage in Ukraine, you
                      will likely need to look to nearby cities in other
                      countries to find a reasonable flight to Scotland. Using
                      the example of Katowice you can see that Bratislava and
                      Kosice are nearby.
                    </p>
                    <p>
                      Search the city name on Google maps and you will see in
                      the bottom right of the screen there is a marker for scale
                      so you can figure out approximate distance.
                    </p>
                  </div>
                </div>
              )}
              {selectedLocation === "Poznan" && (
                <div className="extra__info">
                  <h4>Free Travel in Poland</h4>
                  <div className="d-flex">
                    <div className="free__travel">
                      <ul>
                        <li>
                          German Federal Railway has announced that they will
                          offer free travel from Poland to Germany. Trains leave
                          from Warsaw, Danzig, Przemysl, Krakow and Wroclaw. -
                          <a href="https://www.bahn.com/en">
                            https://www.bahn.com/en
                          </a>
                          This post on Facebook has some details on the scheme -
                          <a href="https://www.facebook.com/groups/534675064647815/permalink/546621206786534/">
                            Help Ukraine refugees in all Europe - допомоги
                            українським біженцям{" "}
                          </a>
                        </li>
                        <li>
                          FlixBus are offering free travel to various locations
                          in Poland from Przemysl. Read about it on their
                          website (in Ukrainian). -
                          <a href="https://www.flixbus.pl/ukraina-pomoc">
                            https://www.flixbus.pl/ukraina-pomoc
                          </a>
                        </li>
                        <li>
                          WizzAir is offering free flights to Ukrainian refugees
                          from Poland. Learn more here. -
                          <a href="https://wizzair.com/en-gb/information-and-services/about-us/news/2022/03/02/wizz-air-supports-ukrainian-refugees-100-000-free-seats-from-neighbouring-countries-in-march">
                            WIZZ AIR SUPPORTS UKRAINIAN REFUGEES: 100,000 FREE
                            SEATS FROM NEIGHBOURING COUNTRIES IN MARCH
                          </a>
                        </li>
                        <li>
                          Ukrainians are entitled to a 95% discount on net fares
                          for one-way Finnair tickets from Warsaw, Krakow and
                          Gdansk to Helsinki. -
                          <a href="https://www.finnair.com/">
                            https://www.finnair.com/
                          </a>
                        </li>
                        <li>
                          They can also use PKP trains and Polferries to travel
                          from Polish borders to other cities in Poland. -
                          <a href="https://www.intercity.pl/pl/site/o-nas/dzial-prasowy/aktualnosci/railway-aid-to-ukraine.html">
                            PKP Trains
                          </a>
                          <a href="https://polferries.pl/">
                            https://polferries.pl/
                          </a>
                        </li>
                        <li>
                          LOT airlines also offers discounted tariffs for
                          Ukrainans. -
                          <a href="https://www.lot.com/gb/en">LOT Airlines</a>
                        </li>
                        <li>
                          Uber offers unlimited free trips between the Ukrainian
                          border and Polish cities. -
                          <a href="https://www.uber.com/uk-UA/newsroom/update-on-our-support-for-ukraine/">
                            Uber
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="popular__routes">
                      <h4>Popular Routes To Scotland</h4>
                      <ul>
                        <li>Krakow to Edinburgh (Ryanair)</li>
                        <li>Gdansk to Edinburgh (Ryanair, easyJet)</li>
                        <li>Katowice to Edinburgh (Ryanair)</li>
                        <li>Poznan to Edinburgh (Ryanair)</li>
                        <li>
                          Krakow to Edinburgh (Ryanair, easyJet, Norwegian)
                        </li>
                        <li>Warsaw-Modlin to Edinburgh (Ryanair)</li>
                        <li>Warsaw-Chopin to Edinburgh (easyJet)</li>
                        <li>Gdansk to Aberdeen (Ryanair, WizzAir)</li>
                        <li>Krakow to Glasgow (Ryanair)</li>
                        <li>Wroclaw to Glasgow (Ryanair)</li>
                        <li>Warsaw-Modlin to Glasgow (Ryanair)</li>
                        <li>Bydgoszcz to Edinburgh (Ryanair)</li>
                      </ul>
                      <p>
                        Recently it seems that Poland has been trying to shift
                        as many Ukrainian refugees out of Poland into nearby
                        countries as possible. Poland is already extremely
                        overwhelmed and this goes for the airports too. There
                        are thousands upon thousands of refugees trying to get
                        the same flights from Poland and it is hard to find a
                        space on a flight. This is also the reason that flight
                        prices have rocketed. This is not intentional by the
                        airlines to make money but it is the way their system
                        works. Popular destinations tend to cost more and their
                        booking system will increase the price automatically
                        because of the number of flights going into, and coming
                        out of Poland right now. This has been confirmed by
                        people on the ground in Poland such as "Scot's Angel"{" "}
                        <a href="https://news.stv.tv/scotland/ukrainian-refugees-thank-scottish-angel-for-driving-them-to-safety">
                          Demelza Sully
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                  <div className="international__airports">
                    <h4>International airports in Poland</h4>
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
                            <a href="https://www.lotnisko-chopina.pl/en/index.html">
                              Warsaw-Chopin Airport
                            </a>
                          </td>
                          <td>WAW</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.palanga-airport.lt/en">
                              Krakow John Paul II Airport
                            </a>
                          </td>
                          <td>KRK</td>
                          <td>Glasgow, Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.kaunas-airport.lt/en/">
                              Gdansk Lech Walesa Airport
                            </a>
                          </td>
                          <td>GDN</td>
                          <td>Aberdeen, Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://airport.wroclaw.pl/en/">
                              Copernicus Wroclaw Airport
                            </a>
                          </td>
                          <td>WRO</td>
                          <td>Glasgow, Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://airport.wroclaw.pl/en/">
                              Katowice Airport
                            </a>
                          </td>
                          <td>KTW</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://poznanairport.pl/en/homepage/">
                              Poznan-Lawica Airport
                            </a>
                          </td>
                          <td>POZ</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.rzeszowairport.pl/en">
                              Rzeszow-Jasionka Airport
                            </a>
                          </td>
                          <td>RZE</td>
                          <td>London</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.airport.lublin.pl/en">
                              Lublin Airport
                            </a>
                          </td>
                          <td>LUZ</td>
                          <td>London Luton</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://en-modlinairport-pl.translate.goog/?_x_tr_sl=pl&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=sc">
                              Warsaw-Modlin Airport
                            </a>
                          </td>
                          <td>WMI</td>
                          <td>Glasgow, Edinburgh</td>
                        </tr>
                      </tbody>
                    </Table>

                    <p>
                      Because of the shock increase of flights to get to
                      Scotland from Poland, and the minimum wage in Ukraine, you
                      will likely need to look to nearby cities in other
                      countries to find a reasonable flight to Scotland. Using
                      the example of Katowice you can see that Bratislava and
                      Kosice are nearby.
                    </p>
                    <p>
                      Search the city name on Google maps and you will see in
                      the bottom right of the screen there is a marker for scale
                      so you can figure out approximate distance.
                    </p>
                  </div>
                </div>
              )}
              {selectedLocation === "Warsaw-Modlin" && (
                <div className="extra__info">
                  <h4>Free Travel in Poland</h4>
                  <div className="d-flex">
                    <div className="free__travel">
                      <ul>
                        <li>
                          German Federal Railway has announced that they will
                          offer free travel from Poland to Germany. Trains leave
                          from Warsaw, Danzig, Przemysl, Krakow and Wroclaw. -
                          <a href="https://www.bahn.com/en">
                            https://www.bahn.com/en
                          </a>
                          This post on Facebook has some details on the scheme -
                          <a href="https://www.facebook.com/groups/534675064647815/permalink/546621206786534/">
                            Help Ukraine refugees in all Europe - допомоги
                            українським біженцям{" "}
                          </a>
                        </li>
                        <li>
                          FlixBus are offering free travel to various locations
                          in Poland from Przemysl. Read about it on their
                          website (in Ukrainian). -
                          <a href="https://www.flixbus.pl/ukraina-pomoc">
                            https://www.flixbus.pl/ukraina-pomoc
                          </a>
                        </li>
                        <li>
                          WizzAir is offering free flights to Ukrainian refugees
                          from Poland. Learn more here. -
                          <a href="https://wizzair.com/en-gb/information-and-services/about-us/news/2022/03/02/wizz-air-supports-ukrainian-refugees-100-000-free-seats-from-neighbouring-countries-in-march">
                            WIZZ AIR SUPPORTS UKRAINIAN REFUGEES: 100,000 FREE
                            SEATS FROM NEIGHBOURING COUNTRIES IN MARCH
                          </a>
                        </li>
                        <li>
                          Ukrainians are entitled to a 95% discount on net fares
                          for one-way Finnair tickets from Warsaw, Krakow and
                          Gdansk to Helsinki. -
                          <a href="https://www.finnair.com/">
                            https://www.finnair.com/
                          </a>
                        </li>
                        <li>
                          They can also use PKP trains and Polferries to travel
                          from Polish borders to other cities in Poland. -
                          <a href="https://www.intercity.pl/pl/site/o-nas/dzial-prasowy/aktualnosci/railway-aid-to-ukraine.html">
                            PKP Trains
                          </a>
                          <a href="https://polferries.pl/">
                            https://polferries.pl/
                          </a>
                        </li>
                        <li>
                          LOT airlines also offers discounted tariffs for
                          Ukrainans. -
                          <a href="https://www.lot.com/gb/en">LOT Airlines</a>
                        </li>
                        <li>
                          Uber offers unlimited free trips between the Ukrainian
                          border and Polish cities. -
                          <a href="https://www.uber.com/uk-UA/newsroom/update-on-our-support-for-ukraine/">
                            Uber
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="popular__routes">
                      <h4>Popular Routes To Scotland</h4>
                      <ul>
                        <li>Krakow to Edinburgh (Ryanair)</li>
                        <li>Gdansk to Edinburgh (Ryanair, easyJet)</li>
                        <li>Katowice to Edinburgh (Ryanair)</li>
                        <li>Poznan to Edinburgh (Ryanair)</li>
                        <li>
                          Krakow to Edinburgh (Ryanair, easyJet, Norwegian)
                        </li>
                        <li>Warsaw-Modlin to Edinburgh (Ryanair)</li>
                        <li>Warsaw-Chopin to Edinburgh (easyJet)</li>
                        <li>Gdansk to Aberdeen (Ryanair, WizzAir)</li>
                        <li>Krakow to Glasgow (Ryanair)</li>
                        <li>Wroclaw to Glasgow (Ryanair)</li>
                        <li>Warsaw-Modlin to Glasgow (Ryanair)</li>
                        <li>Bydgoszcz to Edinburgh (Ryanair)</li>
                      </ul>
                      <p>
                        Recently it seems that Poland has been trying to shift
                        as many Ukrainian refugees out of Poland into nearby
                        countries as possible. Poland is already extremely
                        overwhelmed and this goes for the airports too. There
                        are thousands upon thousands of refugees trying to get
                        the same flights from Poland and it is hard to find a
                        space on a flight. This is also the reason that flight
                        prices have rocketed. This is not intentional by the
                        airlines to make money but it is the way their system
                        works. Popular destinations tend to cost more and their
                        booking system will increase the price automatically
                        because of the number of flights going into, and coming
                        out of Poland right now. This has been confirmed by
                        people on the ground in Poland such as "Scot's Angel"{" "}
                        <a href="https://news.stv.tv/scotland/ukrainian-refugees-thank-scottish-angel-for-driving-them-to-safety">
                          Demelza Sully
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                  <div className="international__airports">
                    <h4>International airports in Poland</h4>
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
                            <a href="https://www.lotnisko-chopina.pl/en/index.html">
                              Warsaw-Chopin Airport
                            </a>
                          </td>
                          <td>WAW</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.palanga-airport.lt/en">
                              Krakow John Paul II Airport
                            </a>
                          </td>
                          <td>KRK</td>
                          <td>Glasgow, Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.kaunas-airport.lt/en/">
                              Gdansk Lech Walesa Airport
                            </a>
                          </td>
                          <td>GDN</td>
                          <td>Aberdeen, Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://airport.wroclaw.pl/en/">
                              Copernicus Wroclaw Airport
                            </a>
                          </td>
                          <td>WRO</td>
                          <td>Glasgow, Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://airport.wroclaw.pl/en/">
                              Katowice Airport
                            </a>
                          </td>
                          <td>KTW</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://poznanairport.pl/en/homepage/">
                              Poznan-Lawica Airport
                            </a>
                          </td>
                          <td>POZ</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.rzeszowairport.pl/en">
                              Rzeszow-Jasionka Airport
                            </a>
                          </td>
                          <td>RZE</td>
                          <td>London</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.airport.lublin.pl/en">
                              Lublin Airport
                            </a>
                          </td>
                          <td>LUZ</td>
                          <td>London Luton</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://en-modlinairport-pl.translate.goog/?_x_tr_sl=pl&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=sc">
                              Warsaw-Modlin Airport
                            </a>
                          </td>
                          <td>WMI</td>
                          <td>Glasgow, Edinburgh</td>
                        </tr>
                      </tbody>
                    </Table>

                    <p>
                      Because of the shock increase of flights to get to
                      Scotland from Poland, and the minimum wage in Ukraine, you
                      will likely need to look to nearby cities in other
                      countries to find a reasonable flight to Scotland. Using
                      the example of Katowice you can see that Bratislava and
                      Kosice are nearby.
                    </p>
                    <p>
                      Search the city name on Google maps and you will see in
                      the bottom right of the screen there is a marker for scale
                      so you can figure out approximate distance.
                    </p>
                  </div>
                </div>
              )}
              {selectedLocation === "Riga" && (
                <div className="extra__info">
                  <h4>Free Travel in Latvia</h4>
                  <div className="d-flex">
                    <div className="free__travel">
                      <ul>
                        <li>
                          People fleeing from Ukraine can use Latvijas dzelzceļš
                          trains free of charge. -
                          <a href="https://eng.lsm.lv/article/society/society/latvia-adopts-aid-measures-for-ukrainian-refugees.a447426/">
                            https://eng.lsm.lv/article/society/society/latvia-adopts-aid-measures-for-ukrainian-refugees.a447426/
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="popular__routes">
                      <h4>Popular Routes To Scotland</h4>
                      <ul>
                        <li>Riga to Edinburgh (Ryanair, AirBaltic)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="international__airports">
                    <h4>International airports in Latvia</h4>
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
                            <a href="https://www.riga-airport.com/en">
                              Riga Airport
                            </a>
                          </td>
                          <td>RIX</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://liepaja-airport.lv/en">
                              Liepaja Airport
                            </a>
                          </td>
                          <td>LPX</td>
                          <td>London</td>
                        </tr>
                      </tbody>
                    </Table>

                    <p>
                      Latvia is lacking international airports. There are two
                      which will get you out to the UK on a direct flight. You
                      can only fly direct to Scotland from Riga. The country
                      bordering Riga to the south is Lithuania, the flight
                      options from both are limited but you can see that both
                      Kaunas and Vilnius are not too far from Riga so they are
                      potential options.
                    </p>
                    <p>
                      Search the city name on Google maps and you will see in
                      the bottom right of the screen there is a marker for scale
                      so you can figure out approximate distance.
                    </p>
                  </div>
                </div>
              )}
              {selectedLocation === "Sofia" && (
                <div className="extra__info">
                  <h4>Free Travel in Bulgaria</h4>
                  <div className="d-flex">
                    <div className="free__travel">
                      <ul>
                        <li>
                          Ukrainian refugees can use BDZ trains free of charge.
                          -
                          <a href="https://www.bdz.bg/bg/a/bdzh-shche-osiguryava-bezplaten-prevoz-na-pristigashchi-ot-ukrayna-grazhdani-na-teritoriyata-na-blgariya">
                            https://www.bdz.bg/bg/a/bdzh-shche-osiguryava-bezplaten-prevoz-na-pristigashchi-ot-ukrayna-grazhdani-na-teritoriyata-na-blgariya
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="popular__routes">
                      <h4>Popular Routes To Scotland</h4>
                      <ul>
                        <li>Sofia to Edinburgh (Ryanair, easyJet)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="international__airports">
                    <h4>International airports in Bulgaria</h4>
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
                            <a href="https://sofia-airport.eu/bg/">
                              Sofia Airport
                            </a>
                          </td>
                          <td>SOF</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://burgas-airport.bg/">
                              Burgas Airport
                            </a>
                          </td>
                          <td>BOJ</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://varna-airport.bg/">
                              Varna Airport
                            </a>
                          </td>
                          <td>VAR</td>
                          <td>London</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.plovdivairport.com/en">
                              Plovdiv International Airport
                            </a>
                          </td>
                          <td>PDV</td>
                          <td>London</td>
                        </tr>
                      </tbody>
                    </Table>

                    <p>
                      If your Ukrainian guest is currently in Bulgaria but the
                      flights are too busy or too expensive you can direct them
                      to a nearby city with an airport. You can use Google maps
                      to determine which big cities are nearby to the one they
                      are in. Using Sofia as an example we can see on the map
                      that Skopje is nearby. Skopje is the capital of North
                      Macedonia which is one of the countries we haven't looked
                      at in this guide. You are still able to apply the same
                      tactics to looking for flights from Skopje.
                    </p>
                    <p>
                      Search the city name on Google maps and you will see in
                      the bottom right of the screen there is a marker for scale
                      so you can figure out approximate distance.
                    </p>
                  </div>
                </div>
              )}

              {selectedLocation === "Tallinn" && (
                <div className="extra__info">
                  <h4>Free Travel in Estonia</h4>
                  <div className="d-flex">
                    <div className="free__travel">
                      <ul>
                        <li>
                          People fleeing from Ukraine can use Elron trains and
                          Public Transport trains free of charge. View this page
                          for more information -
                          <a href="https://www.mkm.ee/en/news/ukrainian-war-refugees-can-travel-estonian-trains-and-city-and-county-buses-free-charge">
                            Ukrainian war refugees can travel Estonian trains
                            and city and county buses free of charge
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="popular__routes">
                      <h4>Popular Routes To Scotland</h4>
                      <ul>
                        <li>Sofia to Edinburgh (Ryanair, easyJet)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="international__airports">
                    <h4>International airports in Estonia</h4>
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
                            <a href="https://www.tallinn-airport.ee/">
                              Lennart Meri Tallinn Airport
                            </a>
                          </td>
                          <td>TLL</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://tartu-tallinn--airport-ee.translate.goog/?_x_tr_sl=et&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=sc">
                              Tartu Airport
                            </a>
                          </td>
                          <td>TAY</td>
                          <td>No direct flights</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://kuressaare.tallinn-airport.ee/">
                              Kuressaare Airport
                            </a>
                          </td>
                          <td>URE</td>
                          <td>No direct flights</td>
                        </tr>
                      </tbody>
                    </Table>

                    <p>
                      If your Ukrainian guest is currently in Bulgaria but the
                      flights are too busy or too expensive you can direct them
                      to a nearby city with an airport. You can use Google maps
                      to determine which big cities are nearby to the one they
                      are in. Using Sofia as an example we can see on the map
                      that Skopje is nearby. Skopje is the capital of North
                      Macedonia which is one of the countries we haven't looked
                      at in this guide. You are still able to apply the same
                      tactics to looking for flights from Skopje.
                    </p>
                    <p>
                      Search the city name on Google maps and you will see in
                      the bottom right of the screen there is a marker for scale
                      so you can figure out approximate distance.
                    </p>
                  </div>
                </div>
              )}
              {selectedLocation === "Paris" && (
                <div className="extra__info">
                  <h4>Free Travel in France</h4>
                  <div className="d-flex">
                    <div className="free__travel">
                      <ul>
                        <li>
                          People fleeing from Ukraine can use SNCF and Thalys trains free of charge. -
                          <a href="https://www.sncf.com/fr/groupe/gratuite-trains-refugies-ukrainiens">
                            SNCF Website
                          </a>
                        </li>
                        <li>
                          Eurostar allows Ukrainians a free ticket from any Eurostar station to London St. Pancras International. In France you can go from Paris Nord or Lille Europe. -
                          <a href="https://www.eurostar.com/uk-en/travel-info/service-information/eurostar-travel-updates">
                            Eurostar Website
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="popular__routes">
                      <h4>Popular Routes To Scotland</h4>
                      <ul>
                        <li>Paris Charles de Gualle to Edinburgh (easyJet)</li>
                      </ul>
                      <ul>
                        <li>Paris Charles de Gualle to Glasgow (easyJet)</li>
                      </ul>
                      <ul>
                        <li>Marseille to Glasgow (easyJet)</li>
                      </ul>
                      <ul>
                        <li>Bordeaux to Glasgow (easyJet)</li>
                      </ul>
                      <ul>
                        <li>Grenoble to Edinburgh (easyJet)</li>
                      </ul>
                      <ul>
                        <li>Carcassonne to Edinburgh (Ryanair)</li>
                      </ul>
                      <ul>
                        <li>Chambery to Edinburgh (Inghams, Crystal)</li>
                      </ul>
                      <ul>
                        <li>Nantes to Edinburgh (Ryanair)</li>
                      </ul>
                      <ul>
                        <li>Poitiers to Edinburgh (Ryanair)</li>
                      </ul>
                      <ul>
                        <li>Toulouse to Edinburgh (Ryanair)</li>
                      </ul>
                      <ul>
                        <li>Beziers to Edinburgh (Ryanair)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="international__airports">
                    <h4>International airports in France</h4>
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
                            <a href="https://www.parisaeroport.fr/en/charles-de-gaulle-airport">
                              Paris Charles de Gaulle
                            </a>
                          </td>
                          <td>CDG</td>
                          <td>Edinburgh, Glasgow</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.parisaeroport.fr/en/orly-airport">
                              Paris Orly Airport
                            </a>
                          </td>
                          <td>ORY</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.lille.aeroport.fr/home/">
                              Lille Airport
                            </a>
                          </td>
                          <td>LIL</td>
                          <td>London</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.strasbourg.aeroport.fr/en">
                              Strasbourg Airport

                            </a>
                          </td>
                          <td>SXB</td>
                          <td>No direct flights</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.lyonaeroports.com/en">
                              Lyon Airport

                            </a>
                          </td>
                          <td>LYS</td>
                          <td>London</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.nice.aeroport.fr/en">
                              Nice Airport

                            </a>
                          </td>
                          <td>NCE</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.marseille.aeroport.fr/">
                              Marseille Airport

                            </a>
                          </td>
                          <td>MRS</td>
                          <td>Glasgow, Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.bordeaux.aeroport.fr/en">
                              Bordeaux Airport

                            </a>
                          </td>
                          <td>BOD</td>
                          <td>Glasgow, Edinburgh</td>
                        </tr>
                      </tbody>
                    </Table>
                    <p>
                      France has many major airports. If none of these work for you then you can check the list of French airports and try some others. Use the same techniques to try to find flights using the new city names. You can refer to the Skyscanner section to find out how to search flights.
                    </p>
                    <p>
                     If you get no luck that way then it would be worthwhile looking at any other major cities nearby that fly to Scotland. In the center of the map below is Paris, nearby cities with airports include Brussels and Luxembourg.
                    </p>
                    <p>
                   Scrolling to the top of the map you will also see Calais and Dunkirk, which hosts ferry services to the UK with connecting travel options to Scotland from there.
                    </p>
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1307813.1535473005!2d3.1320168444101397!3d50.19250125231248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2suk!4v1649243044106!5m2!1sen!2suk" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <p>
                      Search the city name on Google maps and you will see in
                      the bottom right of the screen there is a marker for scale
                      so you can figure out approximate distance.
                    </p>
                  </div>
                  <div className="ferries">
                    <ul>
                      <li>Dunkirk (France) to Dover (England)</li>
                      <li>Dieppe (France) to Newhaven (England)</li>
                      <li>Calais (France) to Dover (England)</li>
                      <li>Calais (France) to Folkstone (England)</li>
                      <li>Caen (Normandy, France) to Portsmouth (England)</li>
                    </ul>
                    <p>Click <a href="/">Here</a> to learn more about searching for and booking ferries.</p>
                  </div>
                </div>
              )}
              {selectedLocation === "Basel" && (
                <div className="extra__info">
                  <h4>Free Travel in Switzerland</h4>
                  <div className="d-flex">
                    <div className="free__travel">
                      <ul>
                        <li>
                          Alliance SwissPass have stated that Ukrainians in Switzerland will have free access to public transport in Switzerland until May. This includes second class travel on buses, trams, trains and boats in all areas of Switzerland. -
                          <a href="https://www.allianceswisspass.ch/de/tarife-vorschriften/tarifmassnahmen/Fluechtende-aus-der-Ukraine-duerfen-Schweizer-oeV-gratis-nutzen">
                            Alliance SwissPass
                          </a>
                          <a href="https://www.iamexpat.ch/expat-info/transportation/public-transport-switzerland">
                            Swiss Public Transport
                          </a>
                        </li>
                        <li>
                          Swiss Federal Railways (SBB) are also offering free train travel on long-distance train journeys in Switzerland. -
                          <a href="https://www.sbb.ch/en">
                            Swiss Federal Railways
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="popular__routes">
                      <h4>Popular Routes To Scotland</h4>
                      <ul>
                        <li>Geneva - Edinburgh (Norwegian, Jet2, Crystal and Inghams)</li>
                      </ul>
                      <ul>
                        <li>Zurich to Edinburgh (edelweiss)</li>
                      </ul>
             
                    </div>
                  </div>
                  <div className="international__airports">
                    <h4>International airports in Switzerland</h4>
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
                            <a href="https://www.euroairport.com/en/">
                              EuroAirport Basel-Mulhouse-Freiburg
                            </a>
                          </td>
                          <td>BSL</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.gva.ch/en/">
                              Geneva Airport
                            </a>
                          </td>
                          <td>GVN</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.lille.aeroport.fr/home/">
                              Lille Airport
                            </a>
                          </td>
                          <td>LIL</td>
                          <td>London</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.flughafen-zuerich.ch/en/passengers">
                              Zurich Airport

                            </a>
                          </td>
                          <td>ZRH</td>
                          <td>Glasgow, Edinburgh</td>
                        </tr>
                      </tbody>
                    </Table>
                    <p>
                      Swiss airlines seem to have a bunch of routes from Zurich, it would be worth investigating their website to see if you can find the best destination closest to your location. You can check their website here.
                    </p>
                    <p><b>TIP: </b>Swiss fly from Zurich to Newcastle, handy for those in the south of Scotland.</p>
                    <p>If your Ukrainian guest is currently in Switzerland but the flights are too busy or too expensive you can direct them to a nearby city. You can use Google maps to determine which big cities are nearby to the one they are in. Using Geneva we can see that the cities of Bern, Turin and Lyon are nearby.</p>
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1307813.1535473005!2d3.1320168444101397!3d50.19250125231248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2suk!4v1649243044106!5m2!1sen!2suk" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <p>
                      Search the city name on Google maps and you will see in
                      the bottom right of the screen there is a marker for scale
                      so you can figure out approximate distance.
                    </p>
                  </div>
                  <div className="ferries">
                    <ul>
                      <li>Dunkirk (France) to Dover (England)</li>
                      <li>Dieppe (France) to Newhaven (England)</li>
                      <li>Calais (France) to Dover (England)</li>
                      <li>Calais (France) to Folkstone (England)</li>
                      <li>Caen (Normandy, France) to Portsmouth (England)</li>
                    </ul>
                    <p>Click <a href="/">Here</a> to learn more about searching for and booking ferries.</p>
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
