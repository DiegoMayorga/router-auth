// esto realmente no es un componente. Aunque el archivo inicie en mayus.

import { redirect } from "react-router-dom";

export function action() {
  localStorage.removeItem("token");
  localStorage.removeItem("expiration");
  return redirect("/");
}
