export interface Photo {
  likes: number;
  userID: string;
  longitude: string;
  userName: string;
  uploadTime: Date;
  photoID: string;
  latitude: string;
  photoURL: string;
}
export interface User {
  password: string
  secondLastName: string
  userID?: string
  email: string
  phone: string
  firstLastName: string
  name: string
  plus?: boolean
}
