import { PostImage } from "./PostImage";
import { User } from "./User";

export interface Post {
  postId: number;
  content: string;
  User: User;
  createdAt: Date;
  Images: PostImage[];
}
