import User from "./User";

export default interface Program {
  id: string;
  organizer: User;
  venue: string;
  time: string;
  district: string;
  date: string;
  eventPicURL: string;
  createdAt: string;
  topic: string;
  description: string;
  imageURL: string;
}
