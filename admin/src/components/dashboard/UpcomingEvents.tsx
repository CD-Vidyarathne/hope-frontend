import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaUser } from "react-icons/fa";
import { format } from "date-fns";
import { Event } from "../../config/types";
import HopeButton from "../HopeButton";

const events: Event[] = [
  {
    date: new Date(2024, 10, 16),
    title: "ElderCare Session",
    time: "Thu 10:15",
    location: "New City, Anuradhapura",
    imageUrl: "https://via.placeholder.com/150",
    attendees: 2,
  },
  {
    date: new Date(2024, 10, 17),
    title: "KidsArt Session",
    time: "Fri 01:15",
    location: "Apeksha Hospital, Maharagama",
    imageUrl: "https://via.placeholder.com/150",
    attendees: 2,
  },
  {
    date: new Date(2024, 10, 17),
    title: "KidsArt Session",
    time: "Fri 01:15",
    location: "Apeksha Hospital, Maharagama",
    imageUrl: "https://via.placeholder.com/150",
    attendees: 2,
  },
  {
    date: new Date(2024, 10, 17),
    title: "KidsArt Session",
    time: "Fri 01:15",
    location: "Apeksha Hospital, Maharagama",
    imageUrl: "https://via.placeholder.com/150",
    attendees: 2,
  },
  {
    date: new Date(2024, 10, 17),
    title: "KidsArt Session",
    time: "Fri 01:15",
    location: "Apeksha Hospital, Maharagama",
    imageUrl: "https://via.placeholder.com/150",
    attendees: 2,
  },
];

const UpcomingEvents = () => {
  type vtype = Date | null;
  const [selectedDate, setSelectedDate] = useState<vtype>(null);

  const filteredEvents = selectedDate
    ? events.filter(
        (event) => event.date.toDateString() === selectedDate.toDateString(),
      )
    : events;

  const handleDateChange = (value: vtype | [vtype, vtype]) => {
    if (value instanceof Date) {
      setSelectedDate(value);
    } else if (Array.isArray(value)) {
      setSelectedDate(value[0]);
    } else {
      setSelectedDate(null);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 bg-bgblue p-6 rounded-lg w-full">
      <div className="flex-1 p-6 bg-bgblue rounded-lg max-w-full overflow-x-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
          <HopeButton
            text="View All Events"
            onClick={() => {
              setSelectedDate(null);
            }}
            className="mb-4"
          />
        </div>
        <div className="flex overflow-x-auto py-2 space-x-4 snap-x">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <EventCard key={index} event={event} />
            ))
          ) : (
            <p>No events available for this date.</p>
          )}
        </div>
      </div>

      <div className="lg:w-64 w-full p-4 bg-white rounded-lg shadow-lg">
        <Calendar
          value={selectedDate}
          className="border-none"
          onChange={handleDateChange}
        />
      </div>
    </div>
  );
};

interface EventCardProps {
  event: Event;
}

function EventCard({ event }: EventCardProps) {
  const { date, title, time, location, imageUrl, attendees } = event;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden min-w-[250px] sm:min-w-[300px] snap-start">
      <img src={imageUrl} alt={title} className="w-full h-32 object-cover" />
      <div className="p-4 flex items-center gap-4">
        <div className="text-blue-500 font-semibold text-sm flex flex-col justify-center items-center max-w-[80px] bg-bgblue p-4 border border-blue-500 rounded-lg">
          <div className="text-lg">{format(date, "MMM").toUpperCase()}</div>
          <div className="text-3xl">{format(date, "d")}</div>
        </div>
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-gray-600 text-sm">
            {time} - {location}
          </p>
          <div className="flex items-center mt-2">
            <FaUser className="text-gray-400 mr-1" />
            <span className="text-gray-600 text-sm">{attendees} attending</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingEvents;
