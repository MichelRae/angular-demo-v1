export interface Course {
  id: number;
  title: string;
  skillLevel : string;
  description : string;
  price : number;
  tags :[];
  author:User;
  courseCategory :string;
  isActive :boolean;
}
export interface User{
  id: number;
  firstName ?: string;
  lastName ?: string;
  username : string;
  email: string;
  summary ?: string;
  phone ?: string;
  address1 ?: string;
  address2 ?: string;
  address3 ?: string;
  authority ?: Authority;
}
export interface Authority{
  name: string
}
