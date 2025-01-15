import { Herobg } from "../assets";
import Card from "../components/Card";
import HopeButton from "../components/HopeButton";

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
        <HopeButton text="Donate" className="mt-8 w-[25%] text-xl" />
      </div>
    </div>
  );
};

import { useState } from "react";

const HomeRow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      img: "https://via.assets.so/img.jpg?w=200&h=150&tc=black&bg=#cecece&t=Placeholder",
      text: "John, 28 years old, is struggling with severe kidney failure and needs urgent support.",
    },
    {
      img: "https://via.assets.so/img.jpg?w=200&h=150&tc=black&bg=#cecece&t=Placeholder",
      text: "Sofia, 42 years old, is fighting a rare form of leukemia and requires your help.",
    },
    {
      img: "https://via.assets.so/img.jpg?w=200&h=150&tc=black&bg=#cecece&t=Placeholder",
      text: "Michael, 50 years old, is battling a chronic lung disease and needs medical assistance.",
    },
    {
      img: "https://via.assets.so/img.jpg?w=200&h=150&tc=black&bg=#cecece&t=Placeholder",
      text: "Emily, 31 years old, is suffering from a debilitating spinal injury and requires therapy.",
    },
    {
      img: "https://via.assets.so/img.jpg?w=200&h=150&tc=black&bg=#cecece&t=Placeholder",
      text: "David, 58 years old, has been diagnosed with advanced heart disease and needs immediate treatment.",
    },
    {
      img: "https://via.assets.so/img.jpg?w=200&h=150&tc=black&bg=#cecece&t=Placeholder",
      text: "Maya, 27 years old, is battling an aggressive brain tumor and is in need of surgery.",
    },
    {
      img: "https://via.assets.so/img.jpg?w=200&h=150&tc=black&bg=#cecece&t=Placeholder",
      text: "James, 40 years old, has been diagnosed with liver failure and requires a transplant.",
    },
    {
      img: "https://via.assets.so/img.jpg?w=200&h=150&tc=black&bg=#cecece&t=Placeholder",
      text: "Sarah, 35 years old, is fighting an autoimmune disease and is in urgent need of medications.",
    },
    {
      img: "https://via.assets.so/img.jpg?w=200&h=150&tc=black&bg=#cecece&t=Placeholder",
      text: "Ryan, 44 years old, is dealing with stage 3 cancer and requires chemotherapy support.",
    },
    {
      img: "https://via.assets.so/img.jpg?w=200&h=150&tc=black&bg=#cecece&t=Placeholder",
      text: "Anna, 26 years old, has suffered severe burns and is in need of reconstructive surgery.",
    },
    {
      img: "https://via.assets.so/img.jpg?w=200&h=150&tc=black&bg=#cecece&t=Placeholder",
      text: "Lucas, 33 years old, is suffering from a serious eye condition and requires an expensive treatment.",
    },
    {
      img: "https://via.assets.so/img.jpg?w=200&h=150&tc=black&bg=#cecece&t=Placeholder",
      text: "Olivia, 39 years old, has been diagnosed with ovarian cancer and needs funds for treatment.",
    },
    {
      img: "https://via.assets.so/img.jpg?w=200&h=150&tc=black&bg=#cecece&t=Placeholder",
      text: "Ethan, 30 years old, is facing paralysis after a severe accident and requires extensive rehab.",
    },
    {
      img: "https://via.assets.so/img.jpg?w=200&h=150&tc=black&bg=#cecece&t=Placeholder",
      text: "Sophia, 29 years old, is struggling with depression and needs psychological support and therapy.",
    },
    {
      img: "https://via.assets.so/img.jpg?w=200&h=150&tc=black&bg=#cecece&t=Placeholder",
      text: "Jack, 48 years old, is dealing with kidney cancer and urgently requires radiation therapy.",
    },
  ];
  const cardsPerPage = 6;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  // const nextSet = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  // };
  //
  // const prevSet = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  // };

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
            <Card key={index} img={card.img} text={card.text} />
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
