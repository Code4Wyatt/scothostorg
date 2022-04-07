import React from "react";
import NavBar from "../components/NavBar";
import Visa from "../media/setu.jpg";

const SetUp = () => {
  return (
    <>
      <NavBar />
      <img
        src={Visa}
        alt="Image of airport"
        className="d-block w-100 bannerImage"
      />
      <div className="setup__main">
        <h4 className="setup__header">Set Up Guide</h4>
        <div className="setup__intro">
          <p>
            You have already jumped through hoops of red tape and bureaucracy
            and the day of arrival day for your guests is looming. It may seem
            that the hard work is already done however it is only starting as we
            need to be ready for Day 1 in our guests new temporary lifestyle in
            our home for the next 6 months and possibly up to 3 years We have to
            remember that we are hosting to people of whom we will have little
            concept of their recent, current and future experiences and will
            have to keep an open mind to what we might have to offer them.
            Although it is our home and usually our rules some of our guests may
            have different cultural and spiritual beliefs and communication
            skills. They may also be very proud and not always ask for items or
            assistance (or unable to due to language barrier) We may have to
            anticipate some of their practical/ daily living needs. Here are
            some recommendations to assist with our hosting experiences. Your
            own local authority may also provide guidance.
          </p>
          <p>
            This list is not exhaustive and please contact if you have further
            suggestions
          </p>
        </div>
        <div className="day__one">
          <h4>Home</h4>
          <ol>
            <li>
              House keys for each adult with any alarm codes and instructions eg
              external doors kept locked even when at home
            </li>
            <li>
              A basic mobile phone and sim package for initial use (if your
              guests don’t have a phone or their own phone does not work in UK
            </li>
            <li>An information folder (more details below)</li>
            <li>
              Welcome snacks and personal water bottles – give information on
              accessing fresh water in our home
            </li>
            <li>
              Wi-Fi access and codes required with any additional information eg
              24/7 access
            </li>
            <li>
              Show areas of home they can access eg kitchen, bathroom, sitting
              area, work station, washing machine, external doors and any
              outdoor areas and how to access
            </li>
            <li>
              Provide a first aid kit with instructions on pain relief and a
              small sewing kit
            </li>
            <li>Hand sanitiser and face masks </li>
            <li>Notepad and pens </li>
                  </ol>
                  <p><b>Safety note: </b>We may have to child/vulnerable adult proof our home eg ensure cleaning products and sharp items are out of reach. We may have to fit door catches and stair gates, and ensure any valuable ornaments or other breakables are out of reach. Also check our gardens for potential hazards. </p>
        </div>
      </div>
    </>
  );
};

export default SetUp;
