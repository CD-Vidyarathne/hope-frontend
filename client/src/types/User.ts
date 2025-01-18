export type User = {
  id: string;
  username: string;
  email: string;
  address: string;
  contactNumber: string;
  profilePicURL?: string;
  donations: {
    recent: number;
    recursive: number;
    total: number;
  };
  voulenteering: {
    recent: number;
    total: number;
  };
};
