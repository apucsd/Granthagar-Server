export interface IUser {
  name: string;
  email: string;
  password: string;
  role: "admin | guest | seller";
  firstName?: string;
  lastName?: string;
  dateOfBirth?: Date;
  gender?: "male" | "female" | "other";
  address?: {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
  };
  image?: string;
  phoneNumber?: string;
  createdAt: Date;
  updatedAt: Date;
}
