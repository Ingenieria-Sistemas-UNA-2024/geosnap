import {Photo} from "../types/types"
const getPhotosRecent = async (): Promise<Photo[]> => {
  try {
    const res: Response = await fetch(`https://759f8jxwv2.execute-api.us-east-1.amazonaws.com/v1/photos/recent`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const photos: Photo[] = await res.json();
    return photos;
  } catch (error: any) {
    return Promise.reject(error);
  }
};
export default getPhotosRecent;