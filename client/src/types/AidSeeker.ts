import User from "./User";

export default interface AidSeeker {
  id: string;
  user: User;
  topic: string;
  description: string;
  requestType: "Patient" | "Child" | "Elder";
  neededAmount: number;
  donationType: "One Time" | "Monthly";
  imageURL: string;
  date: string;
}
