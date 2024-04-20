import React from "react";
import "./styles.css";

import down_arrow from "../assets/down_arrow.svg";
import one_percent_cashback from "../assets/one_percent_cashback.png";
import five_x_rewards from "../assets/five_x_rewards.png";
import forex_globe from "../assets/forex_globe.png";

const InfoContainer = () => {
  return (
    <div className="infoContainer">
      <div className="first">
        <div>
          <span className="blackColor">Earn 1% assured cashback</span>
          <span className="greyColor">on your spends. Get</span>
          <span className="blackColor"> 5X</span>
        </div>
        <div>
          <span className="blackColor">more value than cashback </span>
          <span className="greyColor">at the Uni Store. Enjoy</span>
        </div>
        <div>
          <span className="greyColor">round the clock </span>
          <span className="blackColor">Whatsapp support.</span>
          <span className="greyColor"> And it's .</span>
        </div>
        <div>
          <span className="blackColor"> lifetime free</span>
          <span className="greyColor">
            ; no joining fee, no annual charges.
          </span>
        </div>
      </div>
      <div className="downArrow">
        <img src={down_arrow} alt="down arrow" className="downArrowImg" />
      </div>
      <div className="second">
        <div className="commonContent">
          <div>
            <span className="blackColor">1% assured cashback on</span>
          </div>
          <div>
            <span className="blackColor">your spends.</span>
            <span className="greyColor">The more you</span>
          </div>
          <div>
            <span className="greyColor">spend, the more you earn.</span>
          </div>
          <div>
            <span className="greyColor spanText">
              Not applicable on fuel purchase, rent & wallet transfers, ATM
              withdrawals & international transactions.
            </span>
          </div>
        </div>
        <img
          src={one_percent_cashback}
          alt="one_percent_cashback"
          height={400}
        />
      </div>
      <div className="third">
        <img src={five_x_rewards} alt="five_x_rewards" height={400} />
        <div className="commonContent">
          <div>
            <span className="blackColor">5x more value than your</span>
          </div>
          <div>
            <span className="blackColor">cashback,</span>
            <span className="greyColor">only at the Uni</span>
          </div>
          <div>
            <span className="greyColor">Store.</span>
          </div>
        </div>
      </div>

      <div className="forth">
        <div className="commonContent">
          <div>
            <span className="blackColor">Zero Forex Markup.</span>
          </div>
          <div>
            <span className="greyColor">Go international, without</span>
          </div>
          <div>
            <span className="greyColor">any fees.</span>
          </div>
        </div>
        <img src={forex_globe} alt="forex_globe" height={400} />
      </div>
      <div className="fifth">
        <div className="commonContent">
          <div>
            <span className="blackColor">Lifetime free. No joining fee.</span>
          </div>
          <div>
            <span className="blackColor">No annual charges.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoContainer;
