import React from "react";
import Banner from "./Banner";
import WhyGoGreen from "./WhyGoGreen";
import HowItWorks from "./HowItWorks";
import ChallengesList from "../Challenges/ChallengesList";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ChallengesList></ChallengesList>
      <WhyGoGreen></WhyGoGreen>
      <HowItWorks></HowItWorks>
    </div>
  );
};

export default Home;
