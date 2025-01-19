import HopeButton from "../components/HopeButton.tsx";

const ProgramProfile = () => {
  const sampleProgram = {
    id: "1",
    organizerId: "organizer123",
    venue: "Community Hall, Main Street",
    time: "10:00 AM",
    date: "2025-03-15",
    eventPicURL: "https://example.com/event1.jpg",
    createdAt: "2025-01-10T12:00:00Z",
    topic: "sdjlkajk",
    description: "jlaskdjlkasjdlkjasd",
  };

  return (
    <div className="p-8 h-full grid grid-cols-[2fr,3fr] gap-8">
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start">
        <img
          src={sampleProgram.eventPicURL}
          alt="Program Image"
          className="h-64 w-96 object-cover mb-4 self-center"
        />
        <p className="text-xs text-gray-500">{sampleProgram.createdAt}</p>
        <div className="text-left">
          <p className="text-lg font-semibold">
            Program Venue : {sampleProgram.venue}
          </p>
          <p className="text-lg font-semibold">
            Program Time : {sampleProgram.time}
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
        <h2 className="text-xl font-bold mb-4">{sampleProgram.topic}</h2>
        <p className="text-sm mb-4">{sampleProgram.description}</p>
        <HopeButton text="Participate" className="w-64 mt-auto" />
      </div>
    </div>
  );
};

export default ProgramProfile;
