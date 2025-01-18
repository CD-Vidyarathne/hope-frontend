import { Link } from "react-router-dom";
import { Herobg } from "../assets";
import Card from "../components/Card";
import HopeButton from "../components/HopeButton";
import { cards } from "../sampleData";

const Hero = () => {
  return (
    <div className="w-full min-h-[50vh] my-8 flex flex-col items-center justify-center relative">
      <img src={Herobg} className="w-full h-full bg-cover absolute inset-0" />
      <div className="flex flex-col items-center justify-center gap-4 z-10">
        <h1 className="hero-text">Mobilizing and Connecting People for Good</h1>{" "}
        <p className="text-dblue">
          refers to the collaborative efforts that inspire individuals and
          communities to come together, leveraging their resources and talents
          to create positive social change and support those in need.
        </p>
        <Link to="/donations" className="w-[25%]">
          <HopeButton text="Donate" className="mt-8 w-full text-xl" />
        </Link>
      </div>
    </div>
  );
};

import { useState } from "react";

const HomeRow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 6;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const currentCards = cards.slice(
    currentIndex * cardsPerPage,
    (currentIndex + 1) * cardsPerPage,
  );

  return (
    <div className="p-8">
      <h1 className="text-2xl">They are counting on YOU...</h1>
      <div className="mt-6">
        <div className={`flex gap-12 items-center justify-between`}>
          {currentCards.map((card, index) => (
            <Card key={index} id="12" img={card.img} text={card.text} />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-blue-500" : "bg-gray-300"}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeRow />
    </div>
  );
};

export default Home;
