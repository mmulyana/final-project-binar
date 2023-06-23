import Cookies from "js-cookie"

function logout() {
  Cookies.remove('id')
  Cookies.remove('jwt')
}

export { logout }
