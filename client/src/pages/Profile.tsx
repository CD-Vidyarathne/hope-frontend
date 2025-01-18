import { Link, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import HopeButton from "../components/HopeButton";
import { EmptyProf } from "../assets";

const Profile = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  return (
    <div className="p-8 h-full grid grid-cols-[2fr,2fr,2fr] gap-8">
      <div
        className=" bg-white p-6 rounded-lg shadow-md flex flex-col items-center gap-4"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(24, 19, 43, 0.21) 0%, rgba(182, 195, 220, 0.21) 66%, rgba(132, 140, 164, 0.21) 100%)",
        }}
      >
        <img
          src={user.profilePicURL || EmptyProf}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
        <Link to={`/profile/${user.id}/edit`} className="w-3/4">
          <HopeButton
            text="Edit Profile"
            className="w-full bg-white text-black font-normal"
          />
        </Link>
        <div className="text-left w-full">
          <h2 className="text-center text-xl font-bold mb-4 mt-2">
            {user.username}
          </h2>
          <p className="mb-2">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="mb-2">
            <strong>Address:</strong> {user.address}
          </p>
          <p className="mb-2">
            <strong>Contact Number:</strong> {user.contactNumber}
          </p>
        </div>
        <HopeButton text="Log out" className="bg-red-800 w-1/3 mt-auto" />
      </div>

      <div
        className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col justify-between"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(24, 19, 43, 0.21) 0%, rgba(182, 195, 220, 0.21) 66%, rgba(132, 140, 164, 0.21) 100%)",
        }}
      >
        <h2 className="text-xl mb-8 font-bold">Donation History</h2>
        <div className="space-y-4 text-dblue w-3/4 mx-auto">
          <div className="p-4 bg-lblue rounded-md drop-shadow-lg">
            <p>{user.donations.recent}</p>
            <p>Recent Donations</p>
          </div>
          <div className="p-4 bg-lblue rounded-md drop-shadow-lg">
            <p>{user.donations.recursive}</p>
            <p>Recursive Donations</p>
          </div>
          <div className="p-4 bg-lblue rounded-md drop-shadow-lg">
            <p>{user.donations.total}</p>
            <p>Total Donations</p>
          </div>
        </div>
        <Link
          to={`/profile/${user.id}/donation-history`}
          className="text-black underline mt-auto"
        >
          See All
        </Link>
      </div>

      <div
        className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col justify-between"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(24, 19, 43, 0.21) 0%, rgba(182, 195, 220, 0.21) 66%, rgba(132, 140, 164, 0.21) 100%)",
        }}
      >
        <h2 className="text-xl mb-8 font-bold">Volunteering Activities</h2>
        <div className="space-y-4 text-dblue w-3/4 mx-auto">
          <div className="p-4 bg-lblue rounded-md drop-shadow-lg">
            <p>{user.voulenteering.recent}</p>
            <p>Recent Activities</p>
          </div>
          <div className="p-4 bg-lblue rounded-md drop-shadow-lg">
            <p>{user.voulenteering.total}</p>
            <p>Total Activities</p>
          </div>
        </div>
        <Link
          to={`/profile/${user.id}/voulenteering-activities`}
          className="text-black underline mt-auto"
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default Profile;
