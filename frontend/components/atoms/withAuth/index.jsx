import { useGetUser } from "@/apollo/action";
import { Redirect } from "@/components";

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
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="flex justify-center my-[20vh]">
        <div
          className="spinner-border animate-spin w-40 h-40 border-10 rounded-full text-blue-600"
          role="loading"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>

    </div>
  );
};
