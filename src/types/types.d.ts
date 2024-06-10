export interface Photo {
  photoData?: string
  likes?: number
  userID?: string
  longitude?: string
  uploadTime?: string
  photoID?: string
  latitude?: string
  photoURL?: string
  photoData: string
  userName: string
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
