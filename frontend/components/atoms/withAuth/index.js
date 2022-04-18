import { useGetUser } from "../../../apollo/action";
import { Redirect } from "../../molecules";

export default (WrappedComponent, role) => (props) => {
  const {
    data: { user } = {},
    loading,
    error,
  } = useGetUser({ fetchPolicy: "network-only" });

  if (!loading && (!user || error) && typeof window !== "undefined") {
    return <Redirect to="/login" />;
  }

  // TODO: Send a message to login page
  if (user) {
    if (role && user.role !== role) {
      return <Redirect to="/login" />;
    }
    return <WrappedComponent {...props} />;
  }
  return <p>Authenticating...</p>;
};