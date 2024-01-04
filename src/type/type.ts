export interface IUser {
  id: number;
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  isDeleted: boolean;
  updateAt: Date;
}

export interface ITweet {
  id: number;
  tweet: string;
  userId: number;
  createdAt: Date;
}
