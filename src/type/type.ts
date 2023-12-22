export interface IUser {
  id: number;
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  isDeleted: boolean;
  updateAt: Date;
}
