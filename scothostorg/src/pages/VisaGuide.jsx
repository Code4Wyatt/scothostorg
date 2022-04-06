import React from "react";
import Visa from "../media/visa.jpg";
import NavBar from "../components/NavBar";
import Passport from "../media/passport.jpg";
import Passport2 from "../media/passport2.jpg";
import IdentityCard from "../media/identitycard.jpg";
import UkraineCert from "../media/ukrainebcert.jpg";
import { ListGroup } from "react-bootstrap";

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
          <p>
            The whole process will be easier if you approach it as if it were a
            university essay or work report. You should do some work upfront to
            make the application process flow more smoothly.
          </p>
          <ul>
            <li>
              Plan ahead. Give yourself the space and time to do this properly
              as any errors are consequential as I am sure you have already
              figured. Plan for a time and space that is free from distractions.
            </li>
            <li>
              Take it slowly. If you make a mistake you can go back and change
              it (this is true before a certain point in the application after
              which changes cannot be made).
            </li>
            <li>
              Make sure you have everything you need before you start i.e., a
              PDF copy of your passport and the passports of the individuals
              applying for a visa, albeit you perhaps are intending to complete
              it on their behalf. Save them to your desktop or a special folder
              for this purpose as it is easier to access them when you get to
              uploading the documents.{" "}
            </li>
            <li>
              If the family is divorced you need to ask for husband/partners
              details that you would find on a passport. You also need any other
              names they may have gone under in the past. It would be beneficial
              to the application (and after that for travel) to have a signed
              letter from the absent parent stating that they allow the parent
              to take the child/children out of the country. An example consent
              form is included at the end of this document.
            </li>
            <li>You will need the mother’s maiden name. </li>
            <li>Has anyone any criminal convictions? </li>
            <li>
              Have they worked for the army, police, intelligence services,
              media – you will need to have the dates and in what capacity.{" "}
            </li>
            <li>
              Decide on an arrival date that you will use on the application -
              it doesn’t have to be correct, but they have to have a date. It is
              worth thinking about the fact that this first step of the
              application only lasts 3 month. What this means is that within the
              first 3 months they will have to go to a visa centre in the UK for
              further biometrics. This is the stage that leads to being given
              ‘leave to remain’ in the UK for 3 years. So that is why you need
              to think about the date you input. It would be worth putting the
              date as at least 2-3 days in the future.
            </li>
            <li>TAKE YOUR TIME</li>
            <li>
              Check everything, once, twice, three times if necessary. There
              will be a point where you cannot go back to make changes.
            </li>
            <li>
              Upload your documents as requested. Make sure to check that they
              have uploaded properly before you finally submit the whole
              application.{" "}
            </li>
            <li>
              You have to do a separate application for every family member
              intending to come to Scotland. If you do not they will not get
              their own individual letter of permission and will very likely be
              denied entry to the UK.
            </li>
            <li>
              Load up the website with the{" "}
              <a href="https://www.gov.uk/guidance/apply-for-a-visa-under-the-ukraine-sponsorship-scheme">
                Application Form
              </a>{" "}
              ready to go. Read all associated guidance before beginning.
            </li>
          </ul>
        </div>
        <div className="what__you__need">
          <h4 className="need__intro">What You Will Need</h4>
          <p>
            Before you start, gather the following information to make the
            process easier.Before you start, gather the following information to
            make the process easier.
          </p>
          <p>From your Ukrainian guests:</p>
          <ol>
            <li>
              A really good copy of all their passports. The best option would
              be a scan of their passports which is saved as a PDF. If not then
              you can get a good quality picture of the ID.
            </li>
            <li>The email address of your guest. </li>
            <li>The phone number of your guest. </li>
            <li>
              The full address of the guest family's home in Ukraine before they
              fled.The full address of the guest family's home in Ukraine before
              they fled{" "}
            </li>
            <li>
              The maiden name of the woman/women and ALL married names in case
              they were married more than once.{" "}
            </li>
            <li>
              The relationship of each person to one another. It is important
              you know this about everyone traveling in the group.
            </li>
            <li>Information about any criminal convictions.</li>
            <li>The husband's full name.</li>
            <li>
              Proof that they lived in Ukraine on or before January 1st 2022.
              This could be in the form of a utility bill.
            </li>

            <li>
              Information about whether they ever worked for the military or the
              Ukraine government? If yes, when and what was their role?
            </li>
          </ol>
          <p>From yourself:</p>
          <ol>
            <li>
              A copy of your passport, preferably as a PDF. Learn how to save
              something as a PDF{" "}
              <a href="https://www.wikihow.com/Save-a-PDF-File">Here</a>.
            </li>
            <li>Your address details.</li>
          </ol>
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
        <div className="complete__form__section">
          <h4 className="form__intro">How You Should Complete The Form</h4>
          <p>
            It would be really good if you could complete the form while on a
            call or video call with the people you plan to host. This would make
            the back and forth questions easier to manage. Make sure to arrange
            an agreed time for this and explain how long it might take. You will
            do one visa application per person you plan to host.
          </p>
          <p>
            It would also be good to have a translator with you during the call.
            Try to arrange this if possible - you can always reach out to people
            on Facebook who have been offering this service.
          </p>
          <p>
            If a call is not possible - and in some cases it won’t be - then you
            should send over the visa application questions below in Ukrainian.
            It might be worth breaking them down a bit to make it easier to
            digest.
          </p>
        </div>
        <div className="host__questions__section d-flex">
          <ListGroup className="listGroupEng">
            <ListGroup.Item className="listGroupTitle">
              {" "}
              Visa Form - Section One Questions [English]{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              1 - Do you have a valid Ukrainian passport?
            </ListGroup.Item>
            <ListGroup.Item>
              2 - It mentions biometric passports. Are you able to provide a
              copy of your Ukrainian passport as part of the application?
            </ListGroup.Item>
            <ListGroup.Item>
              3 - We are stating that your home was Ukraine on the 31st December
              2021, is that correct?
            </ListGroup.Item>
            <ListGroup.Item>4 - What is your email address?</ListGroup.Item>
            <ListGroup.Item>
              5 - What should I make the password?
            </ListGroup.Item>
            <ListGroup.Item>
              6 - Do you have any other email addresses?
            </ListGroup.Item>
            <ListGroup.Item>
              7 - What telephone numbers can we include? please make sure to add
              the Ukraine country code.
            </ListGroup.Item>
            <ListGroup.Item>8 - Is that a mobile number?</ListGroup.Item>
            <ListGroup.Item>9 - Do you use it for business?</ListGroup.Item>
            <ListGroup.Item>
              10 - Do you have any other telephone numbers?
            </ListGroup.Item>
            <ListGroup.Item>
              11 - Can you be contacted by telephone call from the UK
              government?
            </ListGroup.Item>
            <ListGroup.Item>
              12 - Can they send you a text message?
            </ListGroup.Item>
            <ListGroup.Item>
              13 - What is your name, as it appears on your passport, with
              English spelling?
            </ListGroup.Item>
            <ListGroup.Item>
              14 - Have you ever been known by any other name? Like your name
              before you were married, or if you were married before.
            </ListGroup.Item>
            <ListGroup.Item>
              15 - Relationship status, married, divorced, single?
            </ListGroup.Item>
            <ListGroup.Item>
              16 - Your home in Ukraines current address and postcode?
            </ListGroup.Item>
          </ListGroup>
          <ListGroup className="listGroupUkr">
            <ListGroup.Item className="listGroupTitle">
              {" "}
              Visa Form - Section One Questions [Ukranian]
            </ListGroup.Item>
            <ListGroup.Item>
              1- Чи є у вас дійсний закордонний паспорт України?
            </ListGroup.Item>
            <ListGroup.Item>
              2 - Згадується біометричний паспорт. Чи можете ви надати копію
              українського паспорта як частину заяви?
            </ListGroup.Item>
            <ListGroup.Item>
              3 - Ми заявляємо, що 31 грудня 2021 року вашим домом була Україна,
              чи не так?
            </ListGroup.Item>
            <ListGroup.Item>4 - Ваша електронна адреса? </ListGroup.Item>
            <ListGroup.Item>5 - Створити пароль? </ListGroup.Item>
            <ListGroup.Item>
              6 - Чи є у вас інша електронна адреса?{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              7 - Усі телефонні номери, включаючи міжнародний код?
            </ListGroup.Item>
            <ListGroup.Item>8 - Це номер мобільного? </ListGroup.Item>
            <ListGroup.Item>
              9 - Ви використовуєте його для бізнесу?
            </ListGroup.Item>
            <ListGroup.Item>
              10 - Чи є у вас інші номери телефонів?{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              11 - Чи можна з вами зв'язатися по телефону з уряду
              Великобританії?{" "}
            </ListGroup.Item>
            <ListGroup.Item>12 - Текстове повідомлення, добре? </ListGroup.Item>
            <ListGroup.Item>
              13 - Ваше ім'я, яке вказано в паспорті англійською мовою?
            </ListGroup.Item>
            <ListGroup.Item>
              14 - Вас коли-небудь знали під іншим ім'ям? Приклад дівочого
              прізвища (до одруження)?{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              15 - Сімейний стан? Розлучені, овдовіли, розлучені...?{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              16 - Поточна адреса та поштовий індекс?{" "}
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div className="host__questions__section d-flex">
          <ListGroup className="listGroupEng">
            <ListGroup.Item className="listGroupTitle">
              {" "}
              Visa Form - Section Two Questions [English]{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              1 - Passport details: issue number, issue date, expiry date, place
              of birth. Please do not send or ask for any documents via Facebook
              messenger, if you would rather use a picture of the passport you
              should give them your email address to receive this.
            </ListGroup.Item>
            <ListGroup.Item>
              2 - Have you ever, or do you currently, hold another nationality
              or citizenship?
            </ListGroup.Item>
            <ListGroup.Item>
              3 - What date do you plan to arrive in the UK?
            </ListGroup.Item>
            <ListGroup.Item>
              4 - Have you ever tried to go to another country but been denied
              any of these: a visa, denied entry at the border, refused
              permission to stay or remain, refused asylum, deported, removed,
              required to leave, excluded or banned from entry?
            </ListGroup.Item>
            <ListGroup.Item>
              5 - Have you ever entered the UK illegally, overstayed your UK
              visa or permission to stay, breached the conditions of your leave
              for example, worked without permission or received public funds
              when you did not have permission?
            </ListGroup.Item>
            <ListGroup.Item>
              6 - Have you ever given false information when applying for a
              visa, leave to enter, leave to remain or breached UK immigration
              law in any other way.
            </ListGroup.Item>
            <ListGroup.Item>
              7 - Do you have a criminal conviction?
            </ListGroup.Item>
            <ListGroup.Item>
              8 - Have you ever had a penalty for a driving offense?
            </ListGroup.Item>
            <ListGroup.Item>
              9 - Have you had an arrest or charge for which you are currently
              awaiting, or are currently on trial for?
            </ListGroup.Item>
            <ListGroup.Item>
              10 - Have you ever had a caution, warning, reprimand or other out
              of court penalty?
            </ListGroup.Item>
            <ListGroup.Item>
              11 - Do you have a civil court judgment against you? E.g.
              non-payment of debt, bankruptcy proceedings or anti-social
              behaviour?
            </ListGroup.Item>
            <ListGroup.Item>
              12 - Have you been issued a civil penalty issued under UK
              immigration law?
            </ListGroup.Item>
            <ListGroup.Item>
              13 - Have you as part of your employment or otherwise undertaken
              paid or unpaid activity on behalf of a non-UK government which you
              know to be dangerous to the interests or security of the UK or its
              allies?
            </ListGroup.Item>
            <ListGroup.Item>
              14 - Have you ever engaged in any other activities that might
              indicate that you are not a person of good character?
            </ListGroup.Item>
            <ListGroup.Item>
              15 - Is there any other information about your character or
              behaviour which you would like to make us aware of?
            </ListGroup.Item>
            <ListGroup.Item>
              16 - Have you ever worked for any of the following types of
              organisations (paid or unpaid)?
              <ul>
                <li>Armed forces - career, </li>
                <li>
                  Armed forces - compulsory or national or military services
                </li>
                <li>
                  Government (including public or civil administration and
                  nonmilitary compulsory national service)
                </li>
                <li>Intelligence services</li>
                <li>
                  Security organisations (including police and private security
                  services)
                </li>
                <li>Media organisations</li>
                <li>Judiciary (including working as a judge or magistrate?)</li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item>
              17 - Do you accept these conditions? If you stay in the UK without
              permission you can be:
              <ul>
                <li>Detained</li>
                <li>Prosecuted</li>
                <li>Fined and imprisoned</li>
                <li>You can be removed and banned from the UK</li>
                <li>You will not be allowed to work</li>
                <li>You will not be able to rent a home</li>
                <li>
                  You will not be able to claim any benefits and can be
                  prosecuted if you try to
                </li>
                <li>
                  You could be charged by the National Health Services for
                  medical treatment
                </li>
                <li>You can be denied access to a bank account</li>
                <li>
                  DVLA (driving license authority) can prevent you from driving
                  by taking away your driving license
                </li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item>
              18 - Can you confirm you understand and accept these conditions?
            </ListGroup.Item>
            <ListGroup.Item>
              19 - By sending this application, you confirm that to the best of
              your knowledge and belief that the following is correct:
              <ul>
                <li>The information relating to the application.</li>
                <li>The supporting evidence.</li>
                <li>
                  I understand that the data I have given can be used as set out
                  in the privacy policy.
                </li>
                <li>
                  I consent to organisations, including financial institutions,
                  providing information to the Home Office when requested in
                  relation to this application.
                </li>
                <li>
                  I understand that any passports/travel documents submitted in
                  support of my application, which remain uncollected after
                  three months from the date they were ready for collection,
                  will be returned to an office of the authority that issued the
                  document. If this happens, the visa application centre will be
                  able to advise where the document has been sent.
                </li>
                <li>
                  I have discussed with any other applicants that I am acting on
                  behalf of, and confirmed that the contents of the application
                  are correct and complete.
                </li>
                <li>I agree to the terms and conditions.</li>
                <li>
                  I understand that if false information is given, the
                  application can be refused and I may be prosecuted, and, if I
                  am the applicant, I may be banned from the UK.
                </li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item>
              20 - I can confirm that:
              <ul>
                <li>I am the applicant aged 18 or over.</li>
                <li>I am the applicant aged 18 or under.</li>
                <li>
                  I am the parent or legal guardian of the applicant who is aged
                  under 18 and completing and submitting the form on their
                  behalf
                </li>
                <li>I am submitting the form on behalf of the applicant</li>
              </ul>
              (if you are submitting the form, as the host, on their behalf then
              you select the last option).
            </ListGroup.Item>
          </ListGroup>
          <ListGroup className="listGroupUkr">
            <ListGroup.Item className="listGroupTitle">
              {" "}
              Visa Form - Section Two Questions [Ukranian]
            </ListGroup.Item>
            <ListGroup.Item>
              1- Дані паспорта: номер видачі, дата видачі, термін дії, місце
              народження? Чи легше відправити копію паспорта через
              Facebook-месенджер, оскільки копія знадобиться пізніше.
            </ListGroup.Item>
            <ListGroup.Item>
              2 - Чи маєте ви коли-небудь або маєте інше громадянство чи
              громадянство?
            </ListGroup.Item>
            <ListGroup.Item>
              3 - Якої дати ви плануєте прибути до Великобританії? Ставимо через
              тиждень. Він діє до 90 днів.
            </ListGroup.Item>
            <ListGroup.Item>
              4 - Ви коли-небудь були з якоїсь країни; відмовили у візі,
              відмовили у в’їзді на кордоні, відмовили у дозволі на перебування
              чи залишитися, відмовили у наданні притулку, депортували,
              видалили, вимагали виїзду, виключено чи заборонено в’їзд?
            </ListGroup.Item>
            <ListGroup.Item>
              5 - Чи ви коли-небудь в'їжджали до Великобританії нелегально,
              залишалися у Великій Британії після закінчення терміну дії вашої
              візи або дозволу на перебування, порушували умови вашої відпустки,
              наприклад, працювали без дозволу або отримували державні кошти,
              коли у вас не було дозволу?{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              6 - Чи давали ви коли-небудь неправдиву інформацію, подаючи заявку
              на візу, дозвіл на в'їзд або дозвіл на перебування, порушували
              імміграційне законодавство Великобританії іншим чином?
            </ListGroup.Item>
            <ListGroup.Item>
              7 - Чи маєте ви кримінальну судимість?
            </ListGroup.Item>
            <ListGroup.Item>
              8 - Чи мали ви коли-небудь покарання за порушення водіння?
            </ListGroup.Item>
            <ListGroup.Item>
              9 - Чи був на вас арешт або звинувачення, за які ви зараз
              перебуваєте або очікуєте суду?
            </ListGroup.Item>
            <ListGroup.Item>
              10 - Чи мали ви коли-небудь застереження, попередження, догану чи
              інше позасудове стягнення?
            </ListGroup.Item>
            <ListGroup.Item>
              11 - Чи є у вас рішення цивільного суду проти вас, наприклад,
              несплата боргу, провадження у справі про банкрутство або
              антигромадська поведінка?
            </ListGroup.Item>
            <ListGroup.Item>
              12 - Чи було накладено на вас цивільне стягнення, винесене згідно
              з імміграційним законодавством Великобританії?{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              13 - Чи займалися ви в рамках свого найму чи іншим чином займалися
              оплачуваною чи неоплачуваною діяльністю від імені уряду не
              Великобританії, про яку ви знаєте, що є небезпечною для інтересів
              або національної безпеки Сполученого Королівства чи його
              союзників?
            </ListGroup.Item>
            <ListGroup.Item>
              14 - Чи займалися ви коли-небудь іншими видами діяльності, які
              можуть свідчити про те, що вас не вважають людиною з хорошим
              характером?
            </ListGroup.Item>
            <ListGroup.Item>
              15 - Чи є інша інформація про ваш характер або поведінку, про яку
              ви хотіли б повідомити нам?
            </ListGroup.Item>
            <ListGroup.Item>
              16 - Чи працювали ви коли-небудь у будь-якій із наведених нижче
              організацій, оплачуваних чи неоплачуваних?
              <ul>
                <li>Збройні сили - кар'єра</li>
                <li>збройні сили - обов'язков</li>
                <li>
                  національна або військова служба, уряд (включаючи державну або
                  цивільну адміністрацію та невійськову обов'язкову національну
                  службу)
                </li>
                <li>розвідувальні служби</li>
                <li>
                  організації безпеки (включаючи поліцію та приватні служби
                  безпеки)
                </li>
                <li>організації ЗМІ</li>
                <li>судова влада (включаючи роботу як суддя чи магістрат)? </li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item>
              17 - Тепер вони повинні прийняти умови; якщо ви перебуваєте в
              Великобританії без дозволу;
              <ul>
                <li>затриманий</li>
                <li>притягнуто до відповідальності</li>
                <li>оштрафовано та ув'язнено</li>
                <li>
                  вас можуть видалити та заборонити повертатися до
                  Великобританії
                </li>
                <li>вам можуть не дозволити працювати</li>
                <li>можливо, ви не зможете орендувати житло</li>
                <li>
                  ви не можете претендувати на будь-які пільги, і вас можуть
                  притягнути до відповідальності, якщо спробуєте
                </li>
                <li>вам можуть стягнути плату за медичне лікування</li>
                <li>
                  вам може бути відмовлено у доступі до банківського рахунку
                </li>
                <li>
                  DVLA (посвідчення водія) може заборонити вам керувати
                  автомобілем, відібрати у вас водійські права
                </li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item>
              18 - Чи можете ви підтвердити, що розумієте та приймаєте ці умови?
            </ListGroup.Item>
            <ListGroup.Item>
              19 - Надсилаючи цю заявку, ви підтверджуєте, що, наскільки вам
              відомо та переконаєтеся, що наступне є правильним:
              <ul>
                <li>інформація, що стосується заяви </li>
                <li>підтверджуючі докази</li>
                <li>
                  Я розумію, що дані, які я надав, можна використовувати, як
                  зазначено в політиці конфіденційності{" "}
                </li>
                <li>
                  Я даю згоду на те, щоб організації, у тому числі фінансові
                  установи, надавали інформацію Міністерству внутрішніх справ,
                  коли її запитують щодо цієї заявки.{" "}
                </li>
                <li>
                  Я розумію, що будь-які паспорти/проїзні документи, подані на
                  підтвердження моєї заявки, які залишаються неодержаними через
                  3 місяці з дати їх готовності до отримання, будуть повернуті
                  до офісу органу, який видав документ. Якщо це станеться,
                  Візовий центр зможе повідомити, куди надіслано документ.
                </li>
                <li>
                  Я обговорював з іншими заявниками, від імені яких я дію, і
                  підтвердив, що зміст заяви є правильним і повним.
                </li>
                <li>Я погоджуюся з умовами. </li>
                <li>
                  Я розумію, що якщо буде надано неправдиву інформацію, у заявці
                  може бути відмовлено, і я можу бути притягнутий до
                  відповідальності, а якщо я є заявником, мені може бути
                  заборонено відвідувати Великобританію.{" "}
                </li>
                <li>
                  вам може бути відмовлено у доступі до банківського рахунку
                </li>
                <li>
                  DVLA (посвідчення водія) може заборонити вам керувати
                  автомобілем, відібрати у вас водійські права
                </li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item>
              20 - Я підтверджую, що: (Обов'язково)
              <ul>
                <li>Я є заявником у віці від 18 років</li>
                <li>Я заявник віком до 18 років </li>
                <li>
                  Я є батьком або законним опікуном заявника, якому не
                  виповнилося 18 років, і я заповнює та подає форму від їхнього
                  імені{" "}
                </li>
                <li>Я подаю форму від імені заявника</li>
                          </ul>
                          (Якщо вони хочуть, щоб ви надіслали форму від їхнього імені? Позначте останній варіант.)
            </ListGroup.Item>
                  </ListGroup>
                  
              </div>
              <div className="final">
               
                  
                  
                  <p>**You must now confirm to upload the documents on the third party website which is TLS who are checking on behalf of the UK government**</p>

                     <p> You should upload the following:</p>
                      <ol>
                          <li>The Ukrainians passport (for the person named on this visa application)</li>
                          <li>Your own passport</li>
                          <li>The evidence that the Ukrainian person was living in Ukraine before January 1st 2022</li>
                          <li>The bank statement of the Ukrainian person (if possible)</li>
                      </ol>


              </div>
      </div>
    </>
  );
};

export default VisaGuide;
