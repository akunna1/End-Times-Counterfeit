"use client";

import React from "react";
import Menu from "./components/menu";
import Submenu from "./components/submenu";
import Homepic from "./components/homepic";
import Verse from "./components/verse";
import Button from "./components/button";
import Resources from "./components/resources";
import Footer1 from "./components/footer1";
import Footer2 from "./components/footer2";

const Home = () => (
  <div>
    {/* Show Menu only on lg and xl screens */}
    <div className="hidden lg:block">
      < Menu />
    </div>
    < Submenu />
    < Homepic />
    < Verse />
    < Button />
    < Resources />
    < Footer1 />
    < Footer2 />
  </div>
);

export default Home;
