class UserController {
  async registration(request, response, next) {
    try {
    } catch (err) {
      console.log(err);
    }
  }

  async login(request, response, next) {
    try {
      response.json(["Success!"]);
    } catch (err) {
      console.log(err);
    }
  }

  async logout(request, response, next) {
    try {
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new UserController();
