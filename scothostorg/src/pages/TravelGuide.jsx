import React, { useState } from "react";
import "../style/style.scss";
import NavBar from "../components/NavBar";
import AirportTravel from "../media/Airport.jpg";
import Passport from "../media/passport.jpg";
import Passport2 from "../media/passport2.jpg";
import IdentityCard from "../media/identitycard.jpg";
import UkraineCert from "../media/ukrainebcert.jpg";
import { Table, ButtonGroup, Button } from "react-bootstrap";
import sky1 from "../media/sky1.png";
import sky2 from "../media/sky2.PNG";
import sky3 from "../media/sky3.PNG";
import sky4 from "../media/sky4.PNG";
import sky5 from "../media/sky5.PNG";
import sky6 from "../media/sky6.PNG";

const TravelGuide = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  console.log(selectedCity);
  console.log(selectedLocation);
  return (
    <>
      <NavBar />

      <div className="parallax2"></div>
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
                                setSelectedLocation("Spain");
                              }}
                            >
                              Barcelona
                            </Button>
                          </td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Germany");
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
                                setSelectedLocation("Germany");
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
                                setSelectedLocation("Denmark");
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
                                setSelectedLocation("Germany");
                              }}
                            >
                              Berlin
                            </Button>
                          </td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Denmark");
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
                                setSelectedLocation("Germany");
                              }}
                            >
                              Hamburg
                            </Button>
                          </td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Denmark");
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
                                setSelectedLocation("Spain");
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
                                setSelectedLocation("Spain");
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
                                setSelectedLocation("Spain");
                              }}
                            >
                              Malaga
                            </Button>
                          </td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Spain");
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
                                setSelectedLocation("Spain");
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
                                setSelectedLocation("Belfast");
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
                  {selectedCity === "Glasgow" && (
                    <Table striped bordered hover className="travel__table">
                      <thead>
                        <tr>
                          <th>Ryanair</th>
                          <th>Lufthansa</th>
                          <th>KLM</th>
                          <th>easyJet</th>
                        </tr>
                      </thead>
                      <tbody>
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
                                setSelectedLocation("Germany");
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
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Jersey");
                              }}
                            >
                              Jersey
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Krakow");
                              }}
                            >
                              Wroclaw
                            </Button>
                          </td>
                          <td></td>
                          <td></td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Paris");
                              }}
                            >
                              Paris
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Krakow");
                              }}
                            >
                              Warsaw-Modlin
                            </Button>
                          </td>
                          <td></td>
                          <td></td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Spain");
                              }}
                            >
                              Barcelona
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Amsterdam");
                              }}
                            >
                              Amsterdam
                            </Button>
                          </td>
                          <td></td>
                          <td></td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Spain");
                              }}
                            >
                              Alicante
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Germany");
                              }}
                            >
                              Berlin
                            </Button>
                          </td>
                          <td></td>
                          <td></td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Spain");
                              }}
                            >
                              Malaga
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Pula");
                              }}
                            >
                              Pula
                            </Button>
                          </td>
                          <td></td>
                          <td></td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Lisbon");
                              }}
                            >
                              Faro
                            </Button>
                          </td>
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
                          <td></td>
                          <td></td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Belfast");
                              }}
                            >
                              Belfast International
                            </Button>
                          </td>
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
                          <td></td>
                          <td></td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Paris");
                              }}
                            >
                              Marseille
                            </Button>
                          </td>
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
                          <td></td>
                          <td></td>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedLocation("Paris");
                              }}
                            >
                              Bordeaux
                            </Button>
                          </td>
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
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </Table>
                  )}
                  {selectedCity === "Aberdeen" && (
                    <Table striped bordered hover className="travel__table">
                      <thead>
                        <tr>
                          <th>WizzAir</th>
                          <th>Lufthansa</th>
                          <th>KLM</th>
                        </tr>
                      </thead>
                      <tbody>
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
                                setSelectedLocation("Germany");
                              }}
                            >
                              Frankfurt
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
                      </tbody>
                    </Table>
                  )}
                  {selectedCity === "Inverness" && (
                    <Table striped bordered hover className="travel__table">
                      <thead>
                        <tr>
                          <th>KLM</th>
                          <th>easyJet</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
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
                                setSelectedLocation("Belfast");
                              }}
                            >
                              Belfast International
                            </Button>
                          </td>
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
              {selectedLocation === "Pula" && (
                <div className="extra__info">
                  <h4>Free Travel in Croatia</h4>
                  <div className="d-flex">
                    <div className="free__travel">
                      <ul>
                        <li>
                          Ukrainian refugees in Croatia can use HŽ Putnički
                          prijevoz trains free of charge with ‘solidarity
                          tickets’ and with a “Help Ukraine Ticket”.{" "}
                          <a href="http://www.hzpp.hr/">
                            HŽ Putnički prijevoz{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="popular__routes">
                      <h4>Popular Routes To Scotland</h4>
                      <p>Pula - Glasgow (Ryanair)</p>
                      <p>Zadar - Edinburgh (Ryanair)</p>
                      <p>Dubrovnik - Edinburgh (Ryanair)</p>
                      <p>Pula - Edinburgh (Jet2)</p>
                      <p>Split - Edinburgh (Jet2)</p>
                    </div>
                  </div>
                  <div className="international__airports">
                    <h4>International airports in Croatia</h4>
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
                            <a href="https://www.zagreb-airport.hr/en">
                              Zagreb Airport
                            </a>
                          </td>
                          <td>ZAG</td>
                          <td>London</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="http://www.split-airport.hr/index.php?lang=en">
                              Split Airport
                            </a>
                          </td>
                          <td>SPU</td>
                          <td>London, Bristol</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.airport-dubrovnik.hr/en">
                              Dubrovnik Airport
                            </a>
                          </td>
                          <td>DBV</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.zadar-airport.hr/en">
                              Zadar Airport
                            </a>
                          </td>
                          <td>ZAD</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://airport-pula.hr/en/">
                              Pula Airport
                            </a>
                          </td>
                          <td>PUY</td>
                          <td>Glasgow</td>
                        </tr>
                      </tbody>
                    </Table>
                    <p>
                      Croatia is quite well connected, but you might find
                      yourself looking elsewhere for flights.
                    </p>
                    <p>
                      To travel by land you could get to Rijeka, Venice which
                      has two airports, Trieste and Ljubljana. There are a fair
                      amount of travel options from Croatia.
                    </p>
                    <p>
                      Search the city name on Google maps and you will see in
                      the bottom right of the screen there is a marker for scale
                      so you can figure out approximate distance.
                    </p>
                  </div>
                </div>
              )}
              {selectedLocation === "Denmark" && (
                <div className="extra__info">
                  <h4>Free Travel in Denmark</h4>
                  <div className="d-flex">
                    <div className="free__travel">
                      <ul>
                        <li>
                          People fleeing from Ukraine can use{" "}
                          <a href="https://www.dsb.dk/sogning/#?cludoquery=Ukraine&cludopage=1&cludorefurl=https%3A%2F%2Fwww.dsb.dk%2F&cludorefpt=DSB%20%7C%20Find%20din%20togrejse%20og%20pris&cludoinputtype=standard">
                            DSB Trains
                          </a>{" "}
                          free of charge.{" "}
                        </li>
                        <li>
                          Ukrainian cars can pass{" "}
                          <a href="https://news.cision.com/dk/oresundsbro-konsortiet/r/oresundsbron-hjaelper-flygtninge-fra-ukraine,c3516509">
                            Öresundsbron (Denmark-Sweden bridge)
                          </a>{" "}
                          free of charge.{" "}
                        </li>
                      </ul>
                    </div>
                    <div className="popular__routes">
                      <h4>Popular Routes To Scotland</h4>
                      <p>
                        Copenhagen - Edinburgh (Norwegian, Scandinavian
                        Airlines, Ryanair, easyJet)
                      </p>
                      <p>Aalborg - Edinburgh (Norwegian)</p>
                      <p>Billund - Edinburgh (Norwegian, Ryanair)</p>
                      <p>Esbjerg - Edinburgh (Loganair)</p>
                    </div>
                  </div>
                  <div className="international__airports">
                    <h4>International airports in Denmark</h4>
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
                            <a href="https://www.bll.dk/en/">Billund Airport</a>
                          </td>
                          <td>BLL</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://bornholms-lufthavn.dk/en">
                              Bornholm-Ronne Airport
                            </a>
                          </td>
                          <td>RNN</td>
                          <td>No direct flights</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.cph.dk/en">
                              Copenhagen-Kastrup Airport
                            </a>
                          </td>
                          <td>CPH</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www-aal-dk.translate.goog/?_x_tr_sl=da&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=sc">
                              Aalborg Airport
                            </a>
                          </td>
                          <td>AAL</td>
                          <td>No direct flights</td>
                        </tr>
                      </tbody>
                    </Table>
                    <p>
                      Copenhagen is another European hub. It is one of three
                      homes to airline Norwegian. Copenhagen is well connected
                      to Europe and the UK, but if you have trouble you can
                      always look to airports nearby. One really good option is
                      to get the train from outside Copenhagen airport over to
                      Malmo in Sweden. The journey is only around 30 minutes!
                      Malmo is a smaller airport, however.
                    </p>
                    <p>
                      Search the city name on Google maps and you will see in
                      the bottom right of the screen there is a marker for scale
                      so you can figure out approximate distance.
                    </p>
                  </div>
                </div>
              )}
              {selectedLocation === "Lisbon" && (
                <div className="extra__info">
                  <h4>Free Travel in Portugal</h4>
                  <div className="d-flex">
                    <div className="free__travel">
                      <ul>
                        <li>
                          People fleeing from Ukraine can use CP – Trains of
                          Portugal free of charge..{" "}
                          <a href="https://eportugal.gov.pt/en/ucrania-informacoes-e-apoios-disponiveis-em-portugal">
                            CP Trains{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="popular__routes">
                      <h4>Popular Routes To Scotland</h4>
                      <p>Faro - Glasgow (easyJet)</p>
                      <p>Lisbon - Edinburgh (easyJet, Ryanair)</p>
                      <p>Faro - Glasgow (easyJet)</p>
                      <p>Porto - Edinburgh (Ryanair)</p>
                    </div>
                  </div>
                  <div className="international__airports">
                    <h4>International airports in Portugal</h4>
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
                            <a href="https://www.aeroportofaro.pt/en/fao/home">
                              Faro Airport
                            </a>
                          </td>
                          <td>FAO</td>
                          <td>Glasgow, Glasgow Prestwick, Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.aeroportolisboa.pt/en/lis/home">
                              Lisbon Airport
                            </a>
                          </td>
                          <td>LIS</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.aeroportoporto.pt/en/opo/home">
                              Porto Airport
                            </a>
                          </td>
                          <td>OPO</td>
                          <td>Edinburgh</td>
                        </tr>
                      </tbody>
                    </Table>
                    <p>
                      Portugal doesn’t have a lot of airports, and be careful
                      not to look anywhere on the Azores Islands because it
                      would be very hard to get there. Portugal borders Spain so
                      the next big cities to look at would be Spanish. You can
                      see on that map that Seville is the nearest city to Faro.
                      There were not many options for Seville to Scotland so
                      you’d probably have to look further afield for travel
                      options.
                    </p>
                    <p>
                      Search the city name on Google maps and you will see in
                      the bottom right of the screen there is a marker for scale
                      so you can figure out approximate distance.
                    </p>
                  </div>
                </div>
              )}
              {selectedLocation === "Geneva" && (
                <div className="extra__info">
                  <h4>Free Travel in Switzerland</h4>
                  <div className="d-flex">
                    <div className="free__travel">
                      <ul>
                        <li>
                          Alliance SwissPass have stated that Ukrainians in
                          Switzerland will have free access to public transport
                          in Switzerland until May. This includes second class
                          travel on buses, trams, trains and boats in all areas
                          of Switzerland.{" "}
                          <a href="https://www.allianceswisspass.ch/de/tarife-vorschriften/tarifmassnahmen/Fluechtende-aus-der-Ukraine-duerfen-Schweizer-oeV-gratis-nutzen">
                            Alliance SwissPass{" "}
                          </a>
                        </li>
                        <li>
                          Swiss Federal Railways (SBB) are also offering free
                          train travel on long-distance train journeys in
                          Switzerland.{" "}
                          <a href="https://www.sbb.ch/en">
                            Swiss Federal Railways{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="popular__routes">
                      <h4>Popular Routes To Scotland</h4>
                      <p>
                        Geneva - Edinburgh (Norwegian, Jet2, Crystal and
                        Inghams)
                      </p>
                      <p>Zurich - Edinburgh (edelweiss)</p>
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
                            <a href="https://www.gva.ch/en/">Geneva Airport</a>
                          </td>
                          <td>GVN</td>
                          <td>Edinburgh</td>
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
                      Swiss airlines seem to have a bunch of routes from Zurich,
                      it would be worth investigating their website to see if
                      you can find the best destination closest to your
                      location. You can check their website here.
                    </p>

                    <p>
                      TIP: Swiss fly from Zurich to Newcastle, handy for those
                      in the south of Scotland.
                    </p>

                    <p>
                      If your Ukrainian guest is currently in Switzerland but
                      the flights are too busy or too expensive you can direct
                      them to a nearby city. You can use Google maps to
                      determine which big cities are nearby to the one they are
                      in. Using Geneva we can see that the cities of Bern, Turin
                      and Lyon are nearby.
                    </p>
                    <p>
                      Search the city name on Google maps and you will see in
                      the bottom right of the screen there is a marker for scale
                      so you can figure out approximate distance.
                    </p>
                    <p>
                      TIP: EuroAirport Basel-Mulhouse-Freiburg is actually in
                      France rather than Switzerland. It is just over the
                      border.
                    </p>
                  </div>
                </div>
              )}
              {selectedLocation === "Prague" && (
                <div className="extra__info">
                  <h4>Free Travel in Czech Republic</h4>
                  <div className="d-flex">
                    <div className="free__travel">
                      <ul>
                        <li>
                          Contact Pomáháme lidem na útěku to arrange to get
                          picked up from the border.{" "}
                          <a href="https://www.facebook.com/pomocprouprchliky">
                            Pomáháme lidem na útěku{" "}
                          </a>
                        </li>
                        <li>
                          You can also check Drive For Refugees to try to find
                          transport from the border.{" "}
                          <a href="https://doprava.plnu.cz/for-refugees/?fbclid=IwAR2pDkE_IZYB0e8HZVmw_hIMvMt1TuwthUTi8XkA_ssUPYK4VS0EdYHkoT8">
                            Drive For Refugees{" "}
                          </a>
                        </li>
                        <li>
                          Pomoc Ukrajině ČR – Ubľa Facebook group also travel to
                          the Ukraine border.{" "}
                          <a href="https://www.facebook.com/groups/660009768457920/">
                            Pomoc Ukrajině ČR{" "}
                          </a>
                        </li>
                        <li>
                          Train to Ukraine offers transportation from Ukraine to
                          Czech Republic. Use the{" "}
                          <a href="https://zeleznicepomaha.eu/">website</a> or{" "}
                          <a href="https://www.facebook.com/groups/1284289675314851">
                            Facebook group
                          </a>
                          .{" "}
                        </li>
                        <li>
                          People fleeing from Ukraine can use{" "}
                          <a href="https://novy.regiojet.cz/ukrajina">
                            RegioJet
                          </a>
                          , Leo Express, České dráhy trains and{" "}
                          <a href="https://www.arriva.cz/">Arriva transport</a>{" "}
                          free of charge.{" "}
                        </li>
                        <li>
                          Ukrainians can use Prague public transport and public
                          transport in the Central Bohemian Region.
                        </li>
                        <li>
                          Ukrainians can fly to Helsinki using a 95% discount on
                          net fares for one-way Finnair tickets from Prague.{" "}
                          <a href="https://www.finnair.com/">Finnair </a>
                        </li>
                      </ul>
                    </div>
                    <div className="popular__routes">
                      <h4>Popular Routes To Scotland</h4>
                      <p>Prague - Edinburgh (Norwegian, Ryanair, easyJet)</p>
                    </div>
                  </div>
                  <div className="international__airports">
                    <h4>International airports in Czech Republic</h4>
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
                            <a href="https://www.prg.aero/en">
                              Vaclav Havel Airport Prague
                            </a>
                          </td>
                          <td>PRG</td>
                          <td>Edinburgh, Glasgow</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="http://www.brno-airport.cz/en/">
                              Brno-Turany Airport
                            </a>
                          </td>
                          <td>BRQ</td>
                          <td>London</td>
                        </tr>
                      </tbody>
                    </Table>
                    <p>
                      If your Ukrainian guest is currently in Czech Republic but
                      the flights are too busy or too expensive you can direct
                      them to a nearby city with an airport. You can use Google
                      maps to determine which big cities are nearby to the one
                      they are in. Prague is used in the map and you can see
                      nearby Dresden, Vienna and Munich. Search the city name on
                      Google maps and you will see in the bottom right of the
                      screen there is a marker for scale so you can figure out
                      approximate distance.
                    </p>
                  </div>
                </div>
              )}
              {selectedLocation === "Belfast" && (
                <div className="extra__info">
                  <h4>Free Travel in Ireland</h4>
                  <div className="d-flex">
                    <div className="free__travel">
                      <ul>
                        <li>
                          People fleeing from Ukraine can use free of charge in
                          Ireland the rail trains,{" "}
                          <a href="https://www.buseireann.ie/service_updates.php?id=5680&month=Mar">
                            Bus Éireann transportation
                          </a>{" "}
                          and{" "}
                          <a href="https://www.expressway.ie/">
                            Expressway transport
                          </a>
                          .{" "}
                          <a href="https://www.zssk.sk/ukrajina/">
                            https://www.zssk.sk/ukrajina/{" "}
                          </a>
                          .
                        </li>
                      </ul>
                    </div>
                    <div className="popular__routes">
                      <h4>Popular Routes To Scotland</h4>
                      <p>Dublin - Edinburgh (Ryanair, Aer Lingus)</p>
                      <p>Dublin - Glasgow (Ryanair)</p>
                      <p>Dublin - Aberdeen (Loganair, British Airways)</p>
                    </div>
                  </div>
                  <div className="international__airports">
                    <h4>International airports in Ireland</h4>
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
                            <a href="https://www.dublinairport.com/">
                              Dublin Airport
                            </a>
                          </td>
                          <td>DUB</td>
                          <td>Edinburgh, Glasgow, Aberdeen</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.corkairport.com/">
                              Cork Airport
                            </a>
                          </td>
                          <td>ORK</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.shannonairport.ie/">
                              Shannon Airport
                            </a>
                          </td>
                          <td>SNN</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.irelandwestairport.com/">
                              Knock Airport (Ireland West Airport Cork)
                            </a>
                          </td>
                          <td>NOC</td>
                          <td>London</td>
                        </tr>
                      </tbody>
                    </Table>
                    <p>
                      If your Ukrainian guest is currently in Ireland but the
                      flights are too busy or too expensive you can direct them
                      to a nearby city with an airport. You can use Google maps
                      to determine which big cities are nearby to the one they
                      are in. Using Dublin we can see that Cork is nearby.
                      Ireland is an island and only borders Northern Ireland
                      which is part of the UK.
                    </p>
                    <p>
                      Search the city name on Google maps and you will see in
                      the bottom right of the screen there is a marker for scale
                      so you can figure out approximate distance.
                    </p>
                  </div>
                </div>
              )}
              {selectedLocation === "Bucharest" && (
                <div className="extra__info">
                  <h4>Free Travel in Romania</h4>
                  <div className="d-flex">
                    <div className="free__travel">
                      <ul>
                        <li>
                          WizzAir are offering free rescue flights from Romania.
                          Learn more about it{" "}
                          <a href="https://wizzair.com/en-gb/information-and-services/about-us/news/2022/03/02/wizz-air-supports-ukrainian-refugees-100-000-free-seats-from-neighbouring-countries-in-march">
                            here{" "}
                          </a>
                          .
                        </li>
                        <li>
                          CFR trains allow free travel with a “Help Ukraine
                          Ticket”. -
                          <a href="https://www.cfrcalatori.ro/en/information-for-refugees-from-ukraine-about-free-travel-by-train-on-the-romanias-territory/">
                            {" "}
                            Visit CFR Trains{" "}
                          </a>
                          .
                        </li>
                        <li>
                          Ukrainians in Romania can also use Romfour shuttle
                          buses from station to station free of charge. Romfour
                          organizes further bus transport to Italy and other
                          European cities. -
                          <a href="https://wizzair.com/en-gb/information-and-services/about-us/news/2022/03/02/wizz-air-supports-ukrainian-refugees-100-000-free-seats-from-neighbouring-countries-in-march">
                            {" "}
                            Romfour Shuttle Buses{" "}
                          </a>
                          .
                        </li>
                      </ul>
                    </div>
                    <div className="popular__routes">
                      <h4>Popular Routes To Scotland</h4>
                      <p>Bucharest - Edinburgh (Ryanair, WizzAir)</p>
                    </div>
                  </div>
                  <div className="international__airports">
                    <h4>International airports in Romania</h4>
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
                            <a href="https://www.bucharestairports.ro/en">
                              Bucharest Airport
                            </a>
                          </td>
                          <td>OTP</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www-airportcluj-ro.translate.goog/?_x_tr_sl=ro&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=sc">
                              Cluj-Napoca Airport
                            </a>
                          </td>
                          <td>KSC</td>
                          <td>London, Manchester</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://aerotim.ro/en/">
                              Timișoara Airport
                            </a>
                          </td>
                          <td>TSR</td>
                          <td>London</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.aeroport-iasi.ro/">
                              Iasi Airport
                            </a>
                          </td>
                          <td>IAS</td>
                          <td>London</td>
                        </tr>
                      </tbody>
                    </Table>
                    <p>
                      If your Ukrainian guest is currently in Romania but the
                      flights are too busy or too expensive you can direct them
                      to a nearby city with an airport. You can use Google maps
                      to determine which big cities are nearby to the one they
                      are in. Using Bucharest as an example, you can see that
                      there are big cities neary: Varna and Ruse (Pyce). -{" "}
                      <a href="https://www.flightconnections.com/flights-from-ko%C5%A1ice-ksc">
                        https://www.flightconnections.com/flights-from-ko%C5%A1ice-ksc
                      </a>
                    </p>
                    <p>
                      Search the city name on Google maps and you will see in
                      the bottom right of the screen there is a marker for scale
                      so you can figure out approximate distance.
                    </p>
                    <p>
                      Moldova moved a lot of flights due to leave from Chisinau
                      Airport to fly instead from Isai Airport in Romania due to
                      the war in Ukraine.
                    </p>
                  </div>
                </div>
              )}
              {selectedLocation === "Amsterdam" && (
                <div className="extra__info">
                  <h4>Free Travel in the Netherlands</h4>
                  <div className="d-flex">
                    <div className="free__travel">
                      <ul>
                        <li>
                          People fleeing from Ukraine can use NS trains free of
                          charge.{" "}
                          <a href="https://nieuws.ns.nl/aan-de-gevluchte-inwoners-van-oekraine-jouw-paspoort-is-je-treinkaartje-naar-nederland/">
                            {" "}
                            NS Trains{" "}
                          </a>
                          .
                        </li>
                        <li>
                          Eurostar allows Ukrainians a free ticket from any
                          Eurostar station to London St. Pancras International.
                          In the Netherlands you can board at Rotterdam Centraal
                          or Amsterdam Central Station.
                          <a href="https://www.eurostar.com/uk-en/travel-info/service-information/eurostar-travel-updates">
                            {" "}
                            Free Ticket{" "}
                          </a>
                          .
                        </li>
                        <li>
                          DFDS ferries are offering free travel on their
                          Amsterdam to Newcastle route for Ukrainian refugees.
                          They need passenger details, car registration and date
                          of travel. Also valid Ukrainian passports. You can
                          email - travel.sales@dfds.com to book but if they want
                          to come as a foot passenger with a dog you should call
                          to book on 0871 574 7235 or +370 46 323232.
                        </li>
                      </ul>
                    </div>
                    <div className="popular__routes">
                      <h4>Popular Routes To Scotland</h4>
                      <p>Amsterdam - Inverness (KLM)</p>
                      <p>Amsterdam - Glasgow (Ryanair)</p>
                      <p>Amsterdam - Aberdeen (KLM)</p>
                      <p>Amsterdam - Edinburgh (easyJet, KLM)</p>
                      <p>Rotterdam - Edinburgh (Transavia)</p>
                    </div>
                  </div>
                  <div className="international__airports">
                    <h4>International airports in the Netherlands</h4>
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
                            <a href="https://www.schiphol.nl/en/">
                              Amsterdam Airport Schiphol
                            </a>
                          </td>
                          <td>AMS</td>
                          <td>Edinburgh, Glasgow, Aberdeen, Inverness</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.groningenairport.nl/en">
                              Groningen Airport Eelde
                            </a>
                          </td>
                          <td>GRQ</td>
                          <td>London</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.lelystadairport.nl/en/">
                              Lelystad Airport
                            </a>
                          </td>
                          <td>LEY</td>
                          <td>Edinburgh, Glasgow</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.rotterdamthehagueairport.nl/en/">
                              Rotterdam The Hague Airport
                            </a>
                          </td>
                          <td>RTM</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.eindhovenairport.nl/en">
                              Eindhoven Airport
                            </a>
                          </td>
                          <td>EIN</td>
                          <td>Edinburgh</td>
                        </tr>
                      </tbody>
                    </Table>
                    <p>
                      Amsterdam Airport Schiphol is the home of airline KLM. It
                      is one of the biggest (in terms of the routes it offers)
                      airports in Europe with connections to almost anywhere in
                      the world.
                    </p>
                    <p>
                      If you struggle to find travel from Amsterdam, it will not
                      be because of the routes on offer. It is more likely that
                      the flights will be too busy and the prices will increase
                      as more and more refugees head to the Netherlands to get
                      to the UK.
                    </p>

                    <p>
                      Looking at Amsterdam on the map (in the top near the
                      middle of the image) you can see that it is close enough
                      to other airports in the Netherlands so those are always
                      an option. If those are too busy or expensive you can
                      consider other cities nearby like Brussels, Dusseldorf, or
                      Cologne.
                    </p>

                    <p>
                      Search the city name on Google maps and you will see in
                      the bottom right of the screen there is a marker for scale
                      so you can figure out approximate distance.
                    </p>
                  </div>
                </div>
              )}
              {selectedLocation === "Naples" && (
                <div className="extra__info">
                  <h4>Free Travel in Italy</h4>
                  <div className="d-flex">
                    <div className="free__travel">
                      <ul>
                        <li>
                          People fleeing from Ukraine can use Flixbus
                          transportation and Marino Bus transportation free of
                          charge.{" "}
                          <a href="https://corporate.flixbus.com/flixbus-supports-ukraine/">
                            {" "}
                            FlixBus
                          </a>
                          .
                        </li>
                        <li>
                          There is also free travel with Trenitalia group
                          transport within a maximum of 5 days from entering
                          Italy.
                          <a href="https://www.protezionecivile.gov.it/it/comunicato-stampa/emergenza-ucraina-firmata-lordinanza-sulla-gratuita-dei-trasporti-i-cittadini-ucraini-italia-0">
                            {" "}
                            Trenitalia
                          </a>
                          .
                        </li>
                      </ul>
                    </div>
                    <div className="popular__routes">
                      <h4>Popular Routes To Scotland</h4>
                      <p>Rome - Edinburgh (Ryanair)</p>
                      <p>Milan - Edinburgh (easyJet)</p>
                      <p>Turin - Edinburgh (Ryanair, Jet2)</p>
                      <p>Bari - Edinburgh (Ryanair)</p>
                      <p>Venice - Edinburgh (easyJet, Jet2, Ryanair)</p>
                      <p>Venice - Glasgow (easyJet)</p>
                      <p>Treviso - Edinburgh (easyJet)</p>
                      <p>Treviso - Glasgow (easyJet)</p>
                    </div>
                  </div>
                  <div className="international__airports">
                    <h4>International airports in Italy</h4>
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
                            <a href="https://www.ciampino-airport.info/">
                              Rome-Ciampino Airport
                            </a>
                          </td>
                          <td>CIA</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.adr.it/web/aeroporti-di-roma-en">
                              Rome-Fiumicino Airport
                            </a>
                          </td>
                          <td>FCO</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.pisa-airport.com/en/">
                              Pisa International Airport
                            </a>
                          </td>
                          <td>PSA</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.aeroporto.firenze.it/en/">
                              Florence Airport
                            </a>
                          </td>
                          <td>FLR</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.milanomalpensa-airport.com/en/">
                              Milan-Malpensa Airport
                            </a>
                          </td>
                          <td>MXP</td>
                          <td>Bristol, London, Manchester</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.milanolinate-airport.com/en/">
                              Milan-Linate Airport
                            </a>
                          </td>
                          <td>MXP</td>
                          <td>Bristol, London, Manchester</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.milanbergamoairport.it/en/">
                              Milan Bergamo Airport
                            </a>
                          </td>
                          <td>BGY</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.aeroportodinapoli.it/en">
                              Naples International Airport
                            </a>
                          </td>
                          <td>NAP</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.veneziaairport.it/en/">
                              Venice Marco Polo Airport
                            </a>
                          </td>
                          <td>VCE</td>
                          <td>London (Stansted)</td>
                        </tr>
                      </tbody>
                    </Table>
                    <p>
                      Italy is a great country to fly from. There are so many
                      airport options, more than there are listed above. Ryanair
                      alone flies out of 29 airports in Italy. Travel between
                      airports is easy (maybe not if you cannot speak English
                      though) as Italy is well-connected. If you happen to come
                      across no options for flying out of Italy then you can
                      look to nearby cities in other countries.
                    </p>
                    <p>
                      Milan is in the north of Italy and is closer to mainland
                      Europe than cities like Rome, Bari or Florence. Nearby you
                      can see Genoa, Florence, Turin and cities such as Nice,
                      Bern and Innsbruck are all nearby too.
                    </p>

                    <p>
                      TIP: Milan, Venice and Rome all have multiple airports in
                      their vicinity. Milan alone has three nearby airports to
                      select from.
                    </p>

                    <p>
                      Search the city name on Google maps and you will see in
                      the bottom right of the screen there is a marker for scale
                      so you can figure out approximate distance.
                    </p>
                  </div>
                </div>
              )}
              {selectedLocation === "Germany" && (
                <div className="extra__info">
                  <h4>Free Travel in the Germany</h4>
                  <div className="d-flex">
                    <div className="free__travel">
                      <ul>
                        <li>
                          German Federal Railway has announced that they will
                          offer free travel from Poland to Germany. This post on
                          Facebook has some details about the scheme.{" "}
                          <a href="https://www.facebook.com/groups/534675064647815/permalink/546621206786534/">
                            {" "}
                            Facebook Post
                          </a>
                          .
                        </li>
                        <li>
                          Ukrainians can use VBB local public transport free of
                          charge.
                          <a href="https://www.vbb.de/presse/freie-fahrt-im-vbb-fuer-gefluechtete-aus-der-ukraine/">
                            {" "}
                            VBB
                          </a>
                          .
                        </li>
                      </ul>
                    </div>
                    <div className="popular__routes">
                      <h4>Popular Routes To Scotland</h4>
                      <p>Berlin - Edinburgh (easyJet, Ryanair)</p>
                      <p>Hamburg - Edinburgh (easyJet, Norwegian)</p>
                      <p>Munich - Edinburgh (Eurowings)</p>
                      <p>Berlin-Brandenburg - Edinburgh (Norwegian)</p>
                      <p>Munich - Glasgow (Lufthansa)</p>
                      <p>Frankfurt - Aberdeen (Lufthansa)</p>
                      <p>Baden-Baden - Edinburgh (Ryanair)</p>
                    </div>
                  </div>
                  <div className="international__airports">
                    <h4>International airports in Germany</h4>
                    <p>
                      There are actually 36 international airports in Germany,
                      so I am focusing on the ones here that are most likely to
                      fly into the UK.
                    </p>
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
                            <a href="https://www.cologne-bonn-airport.com/en/index.html">
                              Cologne Bonn Airport
                            </a>
                          </td>
                          <td>CGN</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.bremen-airport.com/de/1">
                              Bremen Airport
                            </a>
                          </td>
                          <td>BRE</td>
                          <td>London</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.hannover-airport.de/en/information-for-passengers-visitors/">
                              Hannover Airport
                            </a>
                          </td>
                          <td>HAJ</td>
                          <td>London</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://ber.berlin-airport.de/en.html">
                              Berlin-Brandenburg Airport
                            </a>
                          </td>
                          <td>BER</td>
                          <td>Edinburgh, Glasgow</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.frankfurt-airport.com/en.html">
                              Frankfurt Airport
                            </a>
                          </td>
                          <td>FRA</td>
                          <td>Aberdeen, Edinburgh, Glasgow</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.hamburg-airport.de/en">
                              Hamburg Airport
                            </a>
                          </td>
                          <td>HAM</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.dus.com/en">
                              Dusseldorf Airport
                            </a>
                          </td>
                          <td>DUS</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.munich-airport.com/">
                              Munich Airport
                            </a>
                          </td>
                          <td>MUC</td>
                          <td>Edinburgh, Glasgow</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.stuttgart-airport.com/?cl=en">
                              Stuttgart Airport
                            </a>
                          </td>
                          <td>STR</td>
                          <td>London</td>
                        </tr>
                      </tbody>
                    </Table>
                    <p>
                      If your Ukrainian guest is currently in Germany but the
                      flights are too busy/expensive in the major cities then
                      you can do a bit more research into Germany before looking
                      to other places in Europe. Use{" "}
                      <a href="https://en.wikipedia.org/wiki/List_of_airports_in_Germany">
                        this list
                      </a>{" "}
                      of German airports to try and find one which might offer a
                      better alternative.
                    </p>
                    <p>
                      Otherwise, you can use Google maps to determine which big
                      cities are nearby to the one they are in. Using Munich as
                      an example you’ll see Nuremberg, Frankfurt, Stuttgart,
                      Zurich and Basel are all nearby.
                    </p>

                    <p>
                      Frankfurt is a major European airport. You can find going
                      to many cities in the UK and all over the world. Check out
                      their{" "}
                      <a href="https://www.flightconnections.com/flights-from-frankfurt-fra">
                        flight routes
                      </a>{" "}
                      to see what works for you. Frankfurt is one of two main
                      bases for airline Lufthansa which does short haul and long
                      haul flights.
                    </p>

                    <p>
                      Search the city name on Google maps and you will see in
                      the bottom right of the screen there is a marker for scale
                      so you can figure out approximate distance.
                    </p>
                  </div>
                </div>
              )}
              {selectedLocation === "Spain" && (
                <div className="extra__info">
                  <h4>Free Travel in Spain</h4>
                  <div className="d-flex">
                    <div className="free__travel">
                      <ul>
                        <li>
                          People fleeing from Ukraine can use Renfe trains free
                          of charge.
                          <a href="https://www.renfe.com/es/es/grupo-renfe/comunicacion/renfe-al-dia/sala-de-prensa/Renfe-ofrece-gratuidad-a-refugiados-de-ucrania?fbclid=IwAR3iex50vwLMOx3UAJm136Al93F5i20SUmzC04KmTndWTYABIALEPC213Hs">
                            {" "}
                            Renfe Trains
                          </a>
                          .
                        </li>

                        <h4>Ferries</h4>
                        <ul>
                          <li>Bilbao (Spain) to Portsmouth (England)</li>
                          <li>Santander (Spain) to Plymouth (England)</li>
                          <li>Santander (Spain) to Portsmouth (England)</li>
                          <li>
                            <a href="https://www.brittany-ferries.co.uk/map/timetables?date=1648165831416&flex=30&p=4">
                              Brittany Ferries
                            </a>{" "}
                            allow dogs, cats and ferrets to travel on their
                            boats.
                          </li>
                        </ul>
                      </ul>
                    </div>

                    <div className="popular__routes">
                      <h4>Popular Routes To Scotland</h4>
                      <p>Madrid - Edinburgh (easyJet)</p>
                      <p>Malaga - Edinburgh (easyjet, Jet2, Ryanair, TUI)</p>
                      <p>Alicante - Edinburgh (easyJet, Norwegian, Jet2)</p>
                      <p>Barcelona - Edinburgh (Vueling, Norwegian, Ryanair)</p>
                      <p>Barcelona - Glasgow (easyJet)</p>
                      <p>Alicante - Glasgow (easyJet)</p>
                      <p>Malaga - Glasgow (easyJet)</p>
                    </div>
                  </div>
                  <div className="international__airports">
                    <h4>International airports in Spain</h4>

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
                            <a href="https://www.barcelona-airport.com/">
                              Barcelona El Prat Airport
                            </a>
                          </td>
                          <td>BCN</td>
                          <td>Edinburgh, Glasgow</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.girona-airport.net/">
                              Girona Airport
                            </a>
                          </td>
                          <td>GRO</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.aeropuertomadrid-barajas.com/eng/home.html">
                              Madrid Airport
                            </a>
                          </td>
                          <td>MAD</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.sevilla-airport.com/en/">
                              Seville Airport
                            </a>
                          </td>
                          <td>SVQ</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.aena.es/en/vigo.html">
                              Vigo Airport
                            </a>
                          </td>
                          <td>VGO</td>
                          <td>No direct flights</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.airport-valencia.com/">
                              Valencia Airport
                            </a>
                          </td>
                          <td>VLC</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.alcairport.com/">
                              Alicante Airport
                            </a>
                          </td>
                          <td>ALC</td>
                          <td>Edinburgh, Glasgow</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.airport-malaga.com/">
                              Malaga Airport
                            </a>
                          </td>
                          <td>AGP</td>
                          <td>Edinburgh, Glasgow</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.aena.es/en/almeria.html">
                              Almeria Airport
                            </a>
                          </td>
                          <td>LEI</td>
                          <td>London</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.bilbao-airport.com/">
                              Bilbao Airport
                            </a>
                          </td>
                          <td>BIO</td>
                          <td>Edinburgh</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="https://www.aena.es/en/seve-ballesteros-santander.html">
                              Santander Airport
                            </a>
                          </td>
                          <td>SDR</td>
                          <td>Edinburgh</td>
                        </tr>
                      </tbody>
                    </Table>
                    <p>
                      <b>TIP: </b>Girona is also considered “Barcelona” because
                      it is not far from the city.
                    </p>
                    <p>
                      Spain, quite like France, has a massive number of airports
                      - including on the Balearic Islands and the Canary
                      Islands. If you can’t find what you are looking for from
                      the table of suggestions above then check out{" "}
                      <a href="https://getbybus.com/en/blog/airports-in-spain/">
                        this list
                      </a>{" "}
                      to find other Spanish options.
                    </p>
                    <p>
                      You might need to look to other cities nearby. Barcelona
                      is near Girona, which is also near the border of France.
                      That is another potential idea if you can’t find flights
                      nearby. Tarragona is another city with an airport to the
                      left of Barcelona on the map. Tarragona flies directly to
                      both Leeds and Nottingham in England.
                    </p>

                    <p>
                      Search the city name on Google maps and you will see in
                      the bottom right of the screen there is a marker for scale
                      so you can figure out approximate distance.
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
                          People fleeing from Ukraine can use SNCF and Thalys
                          trains free of charge. -
                          <a href="https://www.sncf.com/fr/groupe/gratuite-trains-refugies-ukrainiens">
                            SNCF Website
                          </a>
                        </li>
                        <li>
                          Eurostar allows Ukrainians a free ticket from any
                          Eurostar station to London St. Pancras International.
                          In France you can go from Paris Nord or Lille Europe.
                          -
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
                      France has many major airports. If none of these work for
                      you then you can check the list of French airports and try
                      some others. Use the same techniques to try to find
                      flights using the new city names. You can refer to the
                      Skyscanner section to find out how to search flights.
                    </p>
                    <p>
                      If you get no luck that way then it would be worthwhile
                      looking at any other major cities nearby that fly to
                      Scotland. In the center of the map below is Paris, nearby
                      cities with airports include Brussels and Luxembourg.
                    </p>
                    <p>
                      Scrolling to the top of the map you will also see Calais
                      and Dunkirk, which hosts ferry services to the UK with
                      connecting travel options to Scotland from there.
                    </p>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1307813.1535473005!2d3.1320168444101397!3d50.19250125231248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2suk!4v1649243044106!5m2!1sen!2suk"
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
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
                    <p>
                      Click <a href="/">Here</a> to learn more about searching
                      for and booking ferries.
                    </p>
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
                          Alliance SwissPass have stated that Ukrainians in
                          Switzerland will have free access to public transport
                          in Switzerland until May. This includes second class
                          travel on buses, trams, trains and boats in all areas
                          of Switzerland. -
                          <a href="https://www.allianceswisspass.ch/de/tarife-vorschriften/tarifmassnahmen/Fluechtende-aus-der-Ukraine-duerfen-Schweizer-oeV-gratis-nutzen">
                            Alliance SwissPass
                          </a>
                          <a href="https://www.iamexpat.ch/expat-info/transportation/public-transport-switzerland">
                            Swiss Public Transport
                          </a>
                        </li>
                        <li>
                          Swiss Federal Railways (SBB) are also offering free
                          train travel on long-distance train journeys in
                          Switzerland. -
                          <a href="https://www.sbb.ch/en">
                            Swiss Federal Railways
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="popular__routes">
                      <h4>Popular Routes To Scotland</h4>
                      <ul>
                        <li>
                          Geneva - Edinburgh (Norwegian, Jet2, Crystal and
                          Inghams)
                        </li>
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
                            <a href="https://www.gva.ch/en/">Geneva Airport</a>
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
                      Swiss airlines seem to have a bunch of routes from Zurich,
                      it would be worth investigating their website to see if
                      you can find the best destination closest to your
                      location. You can check their website here.
                    </p>
                    <p>
                      <b>TIP: </b>Swiss fly from Zurich to Newcastle, handy for
                      those in the south of Scotland.
                    </p>
                    <p>
                      If your Ukrainian guest is currently in Switzerland but
                      the flights are too busy or too expensive you can direct
                      them to a nearby city. You can use Google maps to
                      determine which big cities are nearby to the one they are
                      in. Using Geneva we can see that the cities of Bern, Turin
                      and Lyon are nearby.
                    </p>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1307813.1535473005!2d3.1320168444101397!3d50.19250125231248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2suk!4v1649243044106!5m2!1sen!2suk"
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
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
                    <p>
                      Click <a href="/">Here</a> to learn more about searching
                      for and booking ferries.
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="responsibility planning">
              <h4 className="travelTitle">Travel Planning Tools</h4>
              <h5>Rome2Rio</h5>
              <p>
                Rome2Rio is one of my favourite websites to find out all of the
                different possible ways and combinations of getting from one
                place to another. Watch a video tutorial on Rome2Rio{" "}
                <a href="https://www.youtube.com/watch?v=ZotBFarcUkE">here</a>{" "}
                to learn how to use it.
              </p>
              <h5>Skyscanner</h5>
              <p>
                If you know where your guest is going to fly from you can use{" "}
                <a href="">Skyscanner</a> to search for the best flights to your
                city. Above the starting destination you can select ‘one way’.
                Put the city they are nearest in the ‘from’ box and your city in
                the ‘to’. Then select the departure date. If you are short on
                money to fund the flights you can select the box to add nearby
                airports (also good if there is nothing for your planned date)
                and instead of a specific date you can click the date to search
                the whole month.
              </p>
              <p>Example</p>
              <img src={sky1} />

              <p>
                Another way to find a cheaper route is to put ‘everywhere’ in
                the to box and select UK from within the search results.
              </p>
              <p>Example</p>
              <img src={sky2} />
              <p>In the above I have selected Warsaw Chopin airport to everywhere in the whole month of March. These are the results.</p>
                <img src={sky3} />
              <p>When I click on the United Kingdom bar it will expand like this.</p>
              <img src={sky4} />
              <p>Edinburgh is at the top of the list because the flight is the cheapest one available. You can scroll down until you find an airport near you. I’m going to follow through the process with the cheapest Scottish airport on the list, which was Edinburgh. I clicked on the ‘from £11’ test to the right of the picture of Edinburgh and it opened a calendar view.</p>
              <img src={sky5} />
              <p>From there you can choose the date that suits you best. Once your date is highlighted with the blue circle you can click on ‘find flights’ and you’ll be taken to a list of every flight combination from Warsaw to Edinburgh on your chosen date.</p>
               <img src={sky6} />
              <p>I picked March 24th (tomorrow as I am writing this at 21.25pm on March 23rd). Because of the date being tomorrow there are probably less flights available than usual and the cost is a bit higher. But you can see from the above that there are at least two airlines with multiple combinations of stops ranging from 4 hours 30 minutes total travel time to over 26 hours. Choose the flight that is best for your guest and click select. You will find multiple ways to book it on the next page but I usually open a new tab and find the same flight on the actual airlines website. </p>
            <p>TIP: Airlines book and keep certain travel routes. This means that, for example, Ryanair might fly Warsaw to Edinburgh every Thursday and Monday, but not the other days. It might be worth looking into your chosen flight path and figuring out which days the flights with direct routes (rather than with layovers) fly out and trying to plan your guests travel around that. Routes are also seasonal and some new routes may be opening up for summer soon.</p>
               <h5>Flight Maps</h5>
               <p>One of my favourite tools for planning travel is using flight maps. I am quite flexible (which I understand might not be the case when trying to rescue someone from war) when and where I fly from/to as long as it is in the general area of where I want to be. One good example of this would be if you want to get to Glasgow, both Glasgow Airport and Glasgow Prestwick are fine alternatives. </p>
           
              <p>Each airline will usually have a visual map of where they fly to on their website. So if you know, for example, that your Ukrainian guest is currently near the Ukraine border and has crossed into Poland then they are quite near to Krakow, Lublin and Wroclaw. You can use a flight map to find out which of these cities the airline flies from and then take your search from there.</p>
              <ul>
                <li><a href="https://wizzair.com/en-gb/flights/travel-planning-map">WizzAir flight map</a></li>
                <li><a href="https://www.vueling.com/en/web-map/countries-where-vueling-flies">Vueling country list</a></li>
                <li><a href="https://www.klm.com/destinations/us/en/search">KLM destination map</a></li>
                <li><a href="https://www.easyjet.com/en/routemap">easyJet flight map</a></li>
                <li><a href="https://www.norwegian.com/uk/route-map/Geneva-Alldestinations?D_Month=202203&CurrencyCode=GBP&IncludeTransit=True&ShowPrice=True">Norwegian flight map</a></li>
        <li><a href="https://www.transavia.com/en-UK/destinations/">Transavia flight map</a></li>
              </ul>
           <p>Without access to a flight map your best bet is to use other search  and plan tools on the airline website that let you search each destination you can get to from a start point.</p>
            <p>Another tool to do a similar search is the directory of airlines by hub. Zoom in to see more airports in a particular area. You should get a good idea of the airlines flying out of that airport when you click on the airport code name.</p>
            </div>
           
            <div className="responsibility planning">
              <h4 className="wideSub">A Note About Airports</h4>
              <p>
                Certain airports in Europe offer more flight routes than others. Usually these get called a ‘hub’. Some of the airport hubs in Europe are:
              </p>
              <ul>
                <li>Amsterdam</li>
                <li>London</li>
                <li>Frankfurt</li>
                <li>Helsinki</li>
              </ul>
              <p>These airports are most likely to offer the routes you want because they serve more airlines and more customers.</p>
              <p>Airports will have their own website, the tables above link to (where possible) the airports official website. Using these will alert you to flights leaving soon and offer an alternative to using Skyscanner or Google to research flights out of a certain place. The websites will often offer downloadable maps that you can share with your host family should they need it.</p>
              <p>Airports are busy and confusing. Your guests are likely to get overwhelmed if they do not understand the language spoken or some English. It might be really frightening for your guest to navigate the airport.</p>
              <p>Airport food is expensive and considering the low minimum wage in Ukraine, it might be impossible for your guests to afford to eat at the airport. It might be worth considering booking food on the plane if you are not meeting them in person.</p>
              <p>Every airport, airline and staff member is different. They might not understand the visa situation for the UK and might try to refuse boarding. It could be helpful to arm your guests with the links to the UK government website. It is recommended to speak with the airline to find out what documents are acceptable to them. We will do our best to find this information and update as soon as possible.</p>
                            <p>It could be very likely that your guest has not travelled before. This experience will be new and confusing. You should try your best to explain the process from check in, baggage drop, security (including about liquids and what items will alter the scanners at security) to boarding the plane. Make sure to let your guests know if there is any time difference if they have travelled to the airport. This is especially true if they are flying with a layover as they may not know, and might also have no access to their phones or data.</p>
                            <p>Each airport will have its own website. They have a wealth of information about the airport and will have contact details you can use if you should need. You can use these to plan travel too. If you explore the website of your local airport you should be able to find out about the destinations they fly to. If they fly to a destination, it is likely they will fly back from it too. You can use this almost like a check-list of airports to check for flights coming to Scotland.</p>
            <ul>
                <li><a href="https://www.edinburghairport.com/">Edinburgh Airport website</a></li>
                <li><a href="https://www.transavia.com/en-UK/destinations/">Glasgow Airport website</a></li>
                <li><a href="https://www.hial.co.uk/inverness-airport">Inverness Airport website</a></li>
                <li><a href="https://www.aberdeenairport.com/">Aberdeen Airport website</a></li>
               
              </ul>
            </div>
            <div className="responsibility planning">
              <h4 className="wideSub">A Note About Airlines</h4>
              <p>There are thousands of people working for each airline. They are not all going to know how to handle Ukrainian refugees coming to Scotland. Prepare for this in advance by preparing translations and links of the information available from the government.</p>
              <p>Airline policy varies between airlines. Try to understand the check in process of the company you choose to book with. For example, Ryanair expects you to have an app on your phone. You log in with the same account that booked your tickets. You do not need a boarding pass in most situations as you can access it through that app. [UPDATE 06/04/2022: For Ukrainians going to Ireland with Ryanair, boarding passes were being printed off at the desk. These were a requirement for boarding.]</p>             
                            <p>Find out about baggage too, where do you leave baggage if you check in online? Most airlines allow one small bag onboard. This should fit under the seat in front of you. Budget airlines will charge for any further bags after that - whether they will go in the cabin or will be checked in.</p>
                            <p>Do your guests have a small child with a stroller? Strollers also need to be checked in as baggage too. Check the airport website to see if they will have strollers available for use while in the airport.</p>
            
              <p>You could also try contacting the airport or airline if your guest will experience a layover, they might be able to send someone to ferry the family to the next gate.</p>
            <p>A layover is a very good option if you live, for example, in Inverness or the Isle of Lewis. It offers the opportunity for your guest to get to you in a timely fashion. There are two types of layover your guest might experience and it is important to understand them before you book.</p>
              <ol>
                <li>Self-transfer layover. This type of layover means that your guest will check into their first flight, clear security, board the plane and pass through security and claim baggage at the other end. They then have to check in to the new flight, drop baggage, clear security, board and pass through border control again. This is much more time consuming and probably exhausting to your guests.</li>
                <li>Airline transfers your guests. On this type of booking you are likely to book the entire trip through one airline. Sometimes airlines work together so the branding of the plane will be different, but the easy way to tell is that you are only making one booking even though there are multiple legs to the journey. When your guest lands at their layover destination they won’t have to pass through security and border control and their bags will automatically be put on the next plane by the airport staff.</li>
              </ol>
            </div>
            <div className="responsibility planning">
              <h4 className="wideSub">A Note About Pickup</h4>
              <p>It would be best if you can meet your guest at the airport. Send them a picture of yourself, and have them send pictures to you. It will help you recognise them at the airport. You can also use tools like the airport map, pictures of places in the airport or an app like <a href="https://what3words.com/pretty.needed.chill">what three words</a> to pin-point a location to meet them.</p>
              <p>Bring them a travel adapter or USB UK plug. They won’t be able to charge anything if they don’t have one. If you are travelling to your home by car then one of those USB ports that can go into the cigarette lighter in the car would do.</p>             
                            <p>If your guests seem worried or upset by your plans, be flexible. They are having an absolutely shocking and scary experience. They are hearing stories of human trafficking and many are worried that this will happen to them. If you make any stops on your journey be mindful of this and offer to change any plans you have to make them more comfortable. Something else you might want to offer is to allow them to take a picture of you and send that and your name to some friends or family. This could offer peace of mind to them.</p>
        
            </div>
            <div className="responsibility planning">
              <h4 className="wideSub">A Note About Ukranians</h4>
              <p>Ukrainian people like to be able to take care of themselves. If they offer to buy something for you it would be nice to accept it (something small like a coffee or snack). This will help to break the ice and it helps them feel less indebted to you.</p>
              <p>Ukrainian people might not be used to apps like Ryanair or easyJet. Be patient if you need to help them install these on their devices. For those without English language skills it could be hard to even find these apps. If you are meeting your guests abroad you can take over and download these for them. If you are trying to do this remotely it might be useful to have the help of a translator. </p>             
                            <p>I think something else that is important to remember is to anticipate that there will be issues. The airports across Europe are very busy, the ferries are busy. There are going to be delays and this can disrupt your plans. If you are planning for your guest  to travel with a layover then there is a very real possibility that they might not make it onto the second flight (this is important to remember for flights that fly into England first because they will have to pass security and border control as if they were coming to England).</p>
        
            </div>
            <div className="responsibility planning">
              <h4 className="wideSub">Travelling With Pets</h4>
              <p>The UK government has shared this information about travelling to the UK with pets.</p>
              <p>If you’re travelling from Ukraine with your pets, call +44 3000 200 301 (option 2) or email pettravel@apha.gov.uk to find out what to do.</p>             
                            <p>A separate document is being completed with information about travelling with pets.</p>
        
            </div>
             
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelGuide;
