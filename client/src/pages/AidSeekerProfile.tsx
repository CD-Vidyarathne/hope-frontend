import HopeButton from "../components/HopeButton.tsx";
import { Link, useParams } from "react-router-dom";

const AidSeekerProfile = () => {
  const { id } = useParams();
  console.log(id);
  const sampleAidSeekers = [];

  const aidSeeker = sampleAidSeekers.filter(
    (aidSeeker) => aidSeeker.id === id,
  )[0];

  return (
    <div className="p-8 h-full grid grid-cols-[2fr,3fr] gap-8">
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start">
        <div className="flex h-64 w-full justify-between">
          <img
            src={aidSeeker.user.profilePicURL}
            alt="Aid Seeker"
            className="h-64 max-w-96 aspect-auto object-cover mb-4"
          />
          {aidSeeker.imageURL && (
            <img
              src={aidSeeker.imageURL}
              alt=""
              className="h-64 max-w-96 aspect-auto object-cover mb-4"
            />
          )}
        </div>
        <p className="text-xs text-gray-500">{aidSeeker.date}</p>
        <div className="text-left">
          <p className="text-lg font-semibold">
            Donation Type : {aidSeeker.donationType}
          </p>
          <p className="text-lg font-semibold">
            Donation Amount : {aidSeeker.neededAmount}
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
        <h2 className="text-xl font-bold mb-4">{aidSeeker.topic}</h2>
        <p className="text-sm mb-4">{aidSeeker.description}</p>
        <Link to={`/donations/${aidSeeker.id}/donate`}>
          <HopeButton text="Donate" className="w-64 mt-auto" />
        </Link>
      </div>
    </div>
  );
};

export default AidSeekerProfile;
