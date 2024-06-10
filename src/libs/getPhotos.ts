import { Photo } from "../types/types";

const getPhotos = async (LastEvaluatedKey?: string): Promise<{ items: Photo[]; LastEvaluatedKey: string }> => {
  try {
    console.log(`https://759f8jxwv2.execute-api.us-east-1.amazonaws.com/v1/photos${LastEvaluatedKey ? `?LastEvaluatedKey=${LastEvaluatedKey}` : ""}`);
    const res: Response = await fetch(
      `https://759f8jxwv2.execute-api.us-east-1.amazonaws.com/v1/photos${LastEvaluatedKey ? `?LastEvaluatedKey=${LastEvaluatedKey}` : ""}`
    );
    if (!res.ok) {
      return Promise.reject("Credenciales inválidas");
    }

    const data: { items: Photo[]; LastEvaluatedKey: string } = await res.json();
    console.log("items", data.items)
    if (data.items.length === 0) {
      return Promise.reject("Datos inválidos");
    }
    return {items:data.items,LastEvaluatedKey:data.LastEvaluatedKey};
  } catch (error: any) {
    return Promise.reject("Ocurrió un error al obtener las imágenes");
  }
};

  export default getPhotos;
