import React from "react";
import nxt_wave_bg from "../assets/nxt_wave_bg.mp4";
import nx_wave_hero from "../assets/nx_wave_hero.png";
import "./styles.css";

const VideoContainer = () => {
  return (
    <div className="container">
      <video src={nxt_wave_bg} autoPlay loop muted />
      <div className="content">
        <div className="header">
          <h1>UNI</h1>
          <button className="buttonClass">Uni PayCheck</button>
        </div>
        <div className="form">
          <div className="left">
            <div className="nextgenInfo">
              <b>NX Wave.</b> The next-gen credit card for those who love
              rewards.
            </div>
            <span>1% Cashback5x + RewardsZero + Forex Markup</span>
            <div class="input-container">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter phone number"
                className="inputClass"
              />
              <button
                type="submit"
                class="apply-button"
                id="apply-button"
                disabled
              >
                Apply Now
              </button>
            </div>
            <div class="checkbox-container">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                onchange="toggleApplyButton()"
              />
              <label for="agree">I agree to the terms and conditions</label>
            </div>
          </div>
          <img src={nx_wave_hero} alt="img" height={400} />
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
