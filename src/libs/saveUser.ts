import { User } from "../types/types"

const saveUser = async (user: User): Promise<User> => {
  try {
    const res: Response = await fetch(`https://759f8jxwv2.execute-api.us-east-1.amazonaws.com/v1/users`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
    if (!res.ok) {
      return Promise.reject("No se pudo registrar el el usuario")
    }
    const userSave: User = await res.json()
    return userSave
  } catch (error: any) {
    return Promise.reject("Ocurrio un error al registra el usuario")
  }
}

export default saveUser
