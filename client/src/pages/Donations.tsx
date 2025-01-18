import { cards } from "../sampleData";
import Card from "../components/Card";

const Donations = () => {
  return (
    <div className="p-8">
      <div className="grid gap-16 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        {cards.map((card, index) => (
          <Card
            key={index}
            id={`card-${index}`}
            img={card.img}
            text={card.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Donations;
