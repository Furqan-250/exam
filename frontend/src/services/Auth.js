class Auth {
  constructor() {
    this.token = null;
  }

  retriveToken = () => {
    console.log(this.localStorage);
    return localStorage.getItem("Token");
  };

  storeToken = (t) => {
    localStorage.setItem("Token", t);
  };

  deleteToken = () => {
    localStorage.removeItem("Token");
  };
}
export default new Auth();
