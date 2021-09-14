import React from "react";
import chestbox from "./../assets/images/chestbox.png";
import Ethcoin from "./../assets/images/Ethcoin.png";
import power from "./../assets/images/power.PNG";
// import pink from "./../assets/images/pink.PNG";

import Chart from "./Chart";
import PieChart from "./PieChart";
import Timeline from "./Timeline";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="content">
                <p className="para_first">we're giving away ethereum</p>
                <h1>
                  Loot<span>hethereum</span>
                </h1>
                <p>
                  The power of <span>Ethereum</span> contained in a{" "}
                  <span>loot chest</span>
                  with a chance for you to win real cryptocurrency{" "}
                  <span>just by owning NFT's</span>
                </p>
                <button className="btn">learn more</button>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 my-5 ">
              <div className="chest_box" data-aos-offset="1000">
                <div className="square"></div>
                <img src={chestbox} alt="chest box" />
                <div className="circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------------THE WORLD'S FIRST LOOT---------------- */}
      <section className="first_loot">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 content">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-6">
                  <h1>The world's first Loot chest NFT</h1>
                  <div className="coin_content">
                  <p>
                    Loothereum are unique NFT's for you to collect, which
                    include chance to win anywhere 1 to 15 Ethereum. All the
                    chest holder will be eligible for drawing taking place on
                    10/16/21. See below for more details.
                  </p>
                  <div className="my-5">
                    <h4>Powered by</h4>
                    <div className="powerdBy">
                      <img src={power} alt="" />
                      <h3> ethereum</h3>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-6 ">
                  <div className="coin_container">
                    <img src={Ethcoin} alt="" />
                  </div>
                </div>
              </div>
              {/* <p>
                Loothereum are unique NFT's for you to collect, which include
                chance to win anywhere 1 to 15 Ethereum. All the chest holder
                will be eligible for drawing taking place on 10/16/21. See below
                for more details.
              </p>
              <div className="my-5">
                <h4>Powered by</h4>
                <div className="powerdBy">
                  <img src={power} alt="" />
                  <h3> ethereum</h3>
                </div>
              </div> */}
            </div>

            <div className="col-lg-4">
              {/* <div className="coin_container">
                <img src={Ethcoin} alt="" />
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* ------------------------------------WE ARE GIVING AWAY ----------------------------------- */}
      <section className="give_away">
        <div className="container">
          <h1 className="my-5 text-center" data-aos="fade-right">
            We are giving away over $300,000
          </h1>

          <div className="row ">
            <div className="col-lg-6">
              <div className="content">
                <h4 className="mt-5 mb-3">Winner Breakdown</h4>
                <p>
                  Over the course of our journey together we’ll be issuing
                  community rewards at major milestones. Get your Loothereum
                  Chests now for chances to win as much as <b> 15 ETH</b>,
                  currently valued at over <b>$48,000</b>.
                </p>
                <span>1 Winner – 15 ETH</span> <br />
                <span>1 Winner – 10 ETH</span>
                <br />
                <span>5 Winners – 5 ETH</span>
                <br />
                <span>10 Winners – 2 ETH</span>
                <br />
                <span>30 Winners – 1 ETH</span>
              </div>
            </div>
            <div className="col-lg-6">
              <PieChart />
            </div>
          </div>
        </div>
      </section>
      {/* ---------------------------------HOW TO GET YOUR FIRST LOOT----------------------------------- */}
      <section className="section3">
        <div className="container">
          <h1 className="text-center">How to get your Loot</h1>

          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <i className="fas fa-search"></i>
                <h3>Minting</h3>
                <p>
                  Mint your chest! Keep in mind that certain designs may hold a
                  higher resale value, or a higher chance of winning real ETH.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <i className="fas fa-exchange-alt"></i>
                <h3>Hold, Trade, or Sell</h3>
                <p>
                  You may choose to keep or trade your Loothereum Chests, but do
                  so before the key milestones outlined below if you want your
                  chance to win rewards!
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <i className="qode_icon_font_awesome_5 fa5 fab fa-ethereum qode_iwt_icon_element"></i>
                <h3>Rewards</h3>
                <p>
                  All Loothereum Chest holders will be eligible for the rewards
                  drawing. We will be giving away up to 100ETH to multiple chest
                  holders.
                </p>
              </div>
            </div>
          </div>
          <button className=" btn">Find Loot NOW!</button>
        </div>
      </section>
      <Timeline />
    </>
  );
};

export default Home;
