
const signInUser = async(email: string, password: string): Promise<User> => {
  try {
    const res = await fetch(`https://759f8jxwv2.execute-api.us-east-1.amazonaws.com/v1/users/login/${email}/${password}`)
    if(!res.ok){
      return Promise.reject("Credenciales invalidas")
    }
    const user: User = await res.json()
    return user
  } catch (error) {
    return Promise.reject("Ocurrio un error validando el usuario")
  }
}

export default signInUsergi