// con esta funcion obtengo y retorno el token. 

export function getAuthToken() {
  const token = localStorage.getItem("token");
  return token;
}
