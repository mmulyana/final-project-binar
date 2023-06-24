import Cookies from "js-cookie"

function logout() {
  Cookies.remove('id')
  Cookies.remove('jwt')
  Cookies.remove('profile')
}

export { logout }
