import React from "react";
import { useSelector } from "react-redux";
import { useAccount, useConnect } from "wagmi";
import { injected, walletConnect } from "wagmi/connectors";
import { projectId } from "../cred";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import HamburgerMenu from "../components/HamburgerMenu";
import Footer from "../components/Footer";

import ImageLandingPage from "../assets/0x0.webp";
import ImageMission from "../assets/5fcfe0b8f3d03a879fe49d11_timur-romanov-osNaWvJ1D1E-unsplash.jpg";
import ImageCity from "../assets/mapV2.svg";
import { RootState } from "../state/store";

const Home = () => {
  const account = useAccount();
  const { connect } = useConnect();

  const hamburgerMenuIsOpen = useSelector(
    (state: RootState) => state.navbar.hamburgerMenuIsOpen
  );

  return (
    <React.StrictMode>
      {!hamburgerMenuIsOpen ? (
        <div>
          <div className="relative overflow-hidden h-[600px]">
            <Navbar />
            <header className="flex flex-col items-center justify-center text-white h-[400px] xl:flex-row">
              <p className="text-cyan-300 z-10 p-3 text-4xl bg-transparent font-bold lg:text-6xl lg:p-5 xl:text-7xl">
                Cleaner Air
              </p>
              {account.status == "connected" ? (
                <button className="text-green-400 z-10 p-3 m-2 text-4xl bg-transparent rounded-xl font-bold lg:text-6xl lg:p-5 xl:text-7xl hover:underline hover:text-white">
                  <span className="button-text">{`${account.address
                    .slice(0, 12)
                    .toUpperCase()}...`}</span>
                </button>
              ) : (
                <button
                  className="text-green-400 z-10 p-3 m-2 text-4xl bg-transparent rounded-xl font-bold lg:text-6xl lg:p-5 xl:text-7xl hover:underline hover:text-white"
                  onClick={() => connect({ connector: injected() })}
                >
                  Connect Web3
                </button>
              )}
              <p className="text-orange-400 z-10 p-3 text-4xl bg-transparent font-bold lg:text-6xl lg:p-5 xl:text-7xl">
                More Joy
              </p>
            </header>
            <div className="bg-gradient-to-b from-black to-gray-700 absolute w-[240%] top-[50%] left-[90%] translate-x-[-50%] translate-y-[-50%] lg:w-[200%] lg:left-[80%] lg:top-[30%] xl:w-[100%] xl:left-[50%] xl:top-[30%]">
              <img
                src={ImageLandingPage}
                alt="Moove image landig page"
                className="opacity-60 blur-[3px] lg:w-[100%]"
              />
            </div>
          </div>
          <div className="relative overflow-hidden min-h-[600px]">
            <header className="flex flex-col text-center h-[600px] justify-center items-center p-1 text-white">
              <h2 className="text-2xl z-10">La nostra missione</h2>
              <p className="text-4xl font-bold p-10 z-10 bg-transparent xl:w-[800px]">
                Siamo qui per liberare le nostre città con una mobilità
                sostenibile, innovativa e alla portata di tutti!
              </p>
              <button className="text-xl shadow-xl hover:bg-white hover:text-black rounded-lg w-[200px] p-3 text-white z-10 xl:text-2xl">
                <Link to={"/sale"}>I nostri veicoli</Link>
              </button>
            </header>
            <div className="bg-gray-800 absolute w-[240%] top-[50%] left-[20%] translate-x-[-50%] translate-y-[-50%] lg:w-[150%] lg:left-[50%] xl:w-[100%]">
              <img
                src={ImageMission}
                alt="Moove mission"
                className="blur-[5px] grayscale-[20%] opacity-60"
              />
            </div>
          </div>
          <div className="relative overflow-hidden min-h-[600px] p-5 bg-blue-400">
            <header className="h-[300px] flex flex-col text-center justify-center items-center text-white xl:p-10 xl:h-[600px]">
              <h2 className="text-2xl underline bg-transparent text-white z-10 xl:mr-auto xl:p-5">
                Le nostre città
              </h2>
              <p className="text-4xl font-bold p-10 bg-transparent z-10 xl:mr-auto xl:text-start xl:p-5 xl:w-[300px]">
                Bruxelles, Roma, Londra, Varsavia, Parigi, Tel Aviv, Madrid...
              </p>
            </header>
            <div className="absolute w-[320%] top-[50%] left-[170%] translate-x-[-50%] translate-y-[-50%] bg-transparent lg:w-[250%] lg:top-[40%] lg:left-[130%] xl:w-[180%] xl:left-[120%] xl:top-[20%]">
              <img
                src={ImageCity}
                alt="Moove city"
                className="bg-transparent"
              />
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <div>
          <Navbar />
          <HamburgerMenu />
        </div>
      )}
    </React.StrictMode>
  );
};

export default Home;
