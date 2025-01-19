import { EmptyProf } from "../assets";
import Card from "../components/Card";

const Donations = () => {
  const sampleAidSeekers = [];
  return (
    <div className="p-8">
      <div className="grid gap-16 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        {sampleAidSeekers.map((aidSeeker, index) => (
          <Card
            type="Donate"
            key={index}
            id={aidSeeker.id}
            img={aidSeeker.user.profilePicURL ?? EmptyProf}
            text={`${aidSeeker.description.slice(0, 100)}...`}
          />
        ))}
      </div>
    </div>
  );
};

export default Donations;
