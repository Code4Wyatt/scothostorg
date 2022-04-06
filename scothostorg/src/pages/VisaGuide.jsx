import React from "react";
import Visa from "../media/visa.jpg";
import NavBar from "../components/NavBar";
const VisaGuide = () => {
  return (
    <>
      <NavBar />

      <img
        src={Visa}
        alt="Image of airport"
        className="d-block w-100 bannerImage"
      />
      <div className="visa__main">
        <div className="visa__header">
          <h3>Visa Guide</h3>
        </div>
        <div className="visa__intro">
          <p>
            Scotland is ready to welcome Ukrainians with open arms. There have
            been a number of people matching with people they plan to host in
            their own homes in Scotland and they are moving on to the next,
            painful, stage of the process - the visa application.
          </p>
          <p>
            The general consensus is that the visa application is complicated,
            poorly designed and could break even the most intelligent of people.
            Hopefully this guide will help ease some of those headaches.
          </p>
          <p>
            We will discuss applying for both types of visa - both the Warm
            Scots Welcome and applying with a specific host.
          </p>
        </div>
        <div className="helpline">
          <h4 className="helpline__intro">Visa Helpline</h4>
          <p>
            There is a dedicated helpline to support people through the visa
            application. You can call the visa application helpline on 0808 164
            8810.
          </p>
          <p>
            Feedback about the helpline varies, some people have found it very
            useful and others have claimed that there is no one ‘live’ to speak
            to - rather it is a succession of recorded messages.
          </p>
              </div>
              <div className="before__you__begin">
                  <h4 className="begin__intro">Before You Begin</h4>
                  <p>The whole process will be easier if you approach it as if it were a university essay or work report. You should do some work upfront to make the application process flow more smoothly.</p>
                  <ul>
                      <li>Plan ahead. Give yourself the space and time to do this properly as any errors are consequential as I am sure you have already figured. Plan for a time and space that is free from distractions.</li>
                      <li>Take it slowly. If you make a mistake you can go back and change it (this is true before a certain point in the application after which changes cannot be made).</li>
                      <li>Make sure you have everything you need before you start i.e., a PDF copy of your passport and the passports of the individuals applying for a visa, albeit you perhaps are intending to complete it on their behalf. Save them to your desktop or a special folder for this purpose as it is easier to access them when you get to uploading the documents. </li>
                      <li>If the family is divorced you need to ask for husband/partners details that you would find on a passport. You also need any other names they may have gone under in the past. It would be beneficial to the application (and after that for travel) to have a signed letter from the absent parent stating that they allow the parent to take the child/children out of the country. An example consent form is included at the end of this document.</li>
                      <li>You will need the mother’s maiden name. </li>
                      <li>Has anyone any criminal convictions? </li>
                      <li>Have they worked for the army, police, intelligence services, media – you will need to have the dates and in what capacity. </li>
                      <li>Decide on an arrival date that you will use on the application -  it doesn’t have to be correct, but they have to have a date. It is worth thinking about the fact that  this first step of the application only lasts 3 month. What this means is that within the first 3 months they will have to go to a visa centre in the UK for further biometrics. This is the stage that leads to being given ‘leave to remain’ in the UK for 3 years. So that is why you need to think about the date you input. It would be worth putting the date as at least 2-3 days in the future.</li>
                      <li>TAKE YOUR TIME</li>
                      <li>Check everything, once, twice, three times if necessary. There will be a point where you cannot go back to make changes.</li>
                      <li>Upload your documents as requested. Make sure to check that they have uploaded properly before you finally submit the whole application. </li>
                      <li>You have to do a separate application for every family member intending to come to Scotland. If you do not they will not get their own individual letter of permission and will very likely be denied entry to the UK.</li>
                      <li>Load up the website with the <a href="https://www.gov.uk/guidance/apply-for-a-visa-under-the-ukraine-sponsorship-scheme">Application Form</a> ready to go. Read all associated guidance before beginning.</li>
                  </ul>
              </div>
      </div>
    </>
  );
};

export default VisaGuide;
