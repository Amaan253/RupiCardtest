import React from "react";

import "./styles.css";

import app_screen_1 from "../assets/app_screen_1.webp";
import app_screen_2 from "../assets/app_screen_2.webp";
import whatsapp_bubble from "../assets/whatsapp_bubble.webp";
import rupee_bubble from "../assets/rupee_bubble.webp";
import antivirus_bubble from "../assets/antivirus_bubble.webp";
import pcidss_cert from "../assets/pcidss_cert.svg";
import smartBankingInfo from "../assets/smartBankingInfo.png";
import remainingScreen from "../assets/remainingScreen.png";

const LastContainer = () => {
  return (
    <>
      <div className="lastContainer">
        <div className="firstPhoneContainer">
          <div className="phoneSideInfo">
            <div className="whiteText">
              We've all heard of instant groceries, now say hello to
            </div>
            <div className="gradient">instant credit.</div>
            <div className="extraInfo">
              0% hassle, 100% paperless. Get your Uni Card instantly.
            </div>
          </div>
          <img
            src={app_screen_1}
            alt="app_screen_1"
            height={700}
            className="phoneScreen1"
          />
        </div>
        <div className="firstPhoneContainer">
          <div className="phoneSideInfo">
            <div className="whiteText">With Uni,</div>
            <div className="gradient">you're always in control.</div>
            <div className="extraInfo">
              Set your own payment limits. Choose how and where you spend. Lock
              and unlock your card. All right from the app.
            </div>
          </div>
          <img
            src={app_screen_2}
            alt="app_screen_1"
            height={700}
            className="phoneScreen1"
          />
        </div>
        <div className="otherInfoContainer">
          <div className="bubbleBox">
            <img src={whatsapp_bubble} alt="whatsapp_bubble" height={100} />
            <div className="whiteTextInfo">
              Help, just a WhatsApp away. Anytime, Anyday.
            </div>
            <div className="greyColor">
              During hectic work hours. On lazy sunday mornings. In the thick of
              night. Anytime.
            </div>
          </div>
          <div className="bubbleBox">
            <img src={rupee_bubble} alt="rupee_bubble" height={100} />
            <div className="whiteTextInfo">
              No hidden charges, no last minute surprises.
            </div>
            <div className="greyColor">
              100% money back guarantee if a charge is applied without your
              knowledge.
            </div>
          </div>
          <div className="bubbleBox">
            <img src={antivirus_bubble} alt="antivirus_bubble" height={100} />
            <div className="whiteTextInfo">
              Super secure. Because we care about your money.
            </div>
            <img src={pcidss_cert} alt="pcidss_cert" />
          </div>
        </div>
        <img
          src={smartBankingInfo}
          alt="smartBankingInfo"
          className="smartBankingInfo"
        />
        <div className="noteToUser">
          Please note that to stay compliant with RBI guidelines, we have
          discontinued Pay 1/3rd and Pay 1/2 cards for the time being.
        </div>
        <div className="download">
          <div className="downloadtext">Download now to get started</div>
          <div className="buttonContainer">
            <button type="submit" disabled className="downloadbuttonClass">
              Google Play
            </button>
            <button type="submit" disabled className="downloadbuttonClass">
              App Store
            </button>
          </div>
        </div>
        <img
          src={remainingScreen}
          alt="remainingScreen"
          className="smartBankingInfo"
        />
      </div>
    </>
  );
};

export default LastContainer;
