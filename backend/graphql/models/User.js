class User {
  constructor(model) {
    this.Model = model;
  }
  async signUp(signUpData) {
    if (signUpData.password !== signUpData.passwordConfirm) {
      throw new Error("Passwords must be the same");
    }
    try {
      return await this.Model.create(signUpData);
    } catch (error) {
      if (error.code && error.code === 11000) {
        throw new Error("User with provided email already exists!");
      }

      throw error;
    }
  }
  getAuthUser(ctx) {
    if (ctx.isAuthenticated()) {
      return ctx.getUser();
    }

    return null;
  }
  getAllByRole(role) {
    return this.Model.find({ role: role });
  }
  async signIn(signInData, ctx) {
    try {
      const user = await ctx.authenticate(signInData);
      return user;
    } catch (error) {
      return error;
    }
  }

  signOut(ctx) {
    try {
      ctx.logout();
      return true;
    } catch (e) {
      return false;
    }
  }
}

module.exports = User;
