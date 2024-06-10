export interface Photo {
  photoData?: string
  likes?: number
  userID?: string
  longitude?: string
  uploadTime?: string
  photoID?: string
  latitude?: string
  photoURL?: string
}
export interface User {
  password: string
  lastName: string
  userID?: string
  email: string
  phone: string
  firstName: string
  name: string
  plus?: boolean
}
