export default interface User {
  id: string;
  username: string;
  email: string;
  address: string;
  userType: "patient" | "normal";
  contactNumber: string;
  birthdate?: string;
  gender?: "male" | "female";
  profilePicURL?: string;
  donations?: {
    recent: number;
    recursive: number;
    total: number;
  };
  voulenteering?: {
    recent: number;
    total: number;
  };
  receivedDonationsMonthly?: [
    {
      month: string;
      amount: number;
    },
  ];
}
