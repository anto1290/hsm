const { Strategy } = require("passport-strategy");

// Strategy get options needed to authenticate user
// Strategy get a callback function that will contain function to call to verify user
// Strategy has to have "authenticate" function
// Strategy has access to "error" "fail" and "success" functions
class GraphqlStrategy extends Strategy {
  constructor(verify) {
    super();
    if (!verify) {
      throw new Error("GraphqlStrategy requires a verify function");
    }
    this.verify = verify;
    this.name = "graphql";
  }
  authenticate(_, options) {
    const done = (error, user, info) => {
      if (error) {
        return this.error(error);
      }
      if (!user) {
        return this.fail(401);
      }

      return this.success(user, info);
    };
    this.verify(options, done);
  }
}

module.exports = GraphqlStrategy;
