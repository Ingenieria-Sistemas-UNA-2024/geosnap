import { Photo } from "../types/types";

const savePhoto = async (photoData: Photo): Promise<void> => {
  try {
      const res: Response = await fetch(`https://759f8jxwv2.execute-api.us-east-1.amazonaws.com/v1/photos`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(photoData),
      });
      if (!res.ok) {
          throw new Error(`Failed to update photo: ${res.statusText}`);
      }
  } catch (error: any) {
      return Promise.reject("Fallo el guadado de la foto");
  }
};

export default savePhoto;