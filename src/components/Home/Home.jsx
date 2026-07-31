import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import ExploreBeauty from "./ExploreBeauty/ExploreBeauty";
import BestSellers from "./BestSellers/BestSellers";
import Features from "./Features/Features";

function Home() {
  return (
    <>
      <Hero></Hero>
      <ExploreBeauty></ExploreBeauty>
      <BestSellers></BestSellers>
      <Features></Features>
    </>
  );
}

export default Home;
